package com.earthquakeprediction.sesmicforesight.service;

import com.earthquakeprediction.sesmicforesight.entity.User;
import com.earthquakeprediction.sesmicforesight.repository.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Service
@AllArgsConstructor
public class JwtService {

    private final String SECRET_KEY="7cd3ec521dede23f05307a76c1e6eae3ab7a8d6a1b508f175d018eb2d97a6fbd";

    private final TokenRepository tokenRepository;

    public String extractUsername(String token){
        return extractClaim(token,Claims::getSubject);
    }
    public <T> T extractClaim(String token, Function<Claims,T> resolver){
        Claims claims=extractAllClaims(token);
        return resolver.apply(claims);
    }

    public boolean isValid(String token, UserDetails user){
        String username = extractUsername(token);

        boolean isValidToken= tokenRepository.findByToken(token)
                .map(t->!t.isLoggedOut()).orElse(false);
        return (username.equals(user.getUsername())) && !isTokenExpired(token)&& isValidToken;
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token,Claims::getExpiration);
    }


    private Claims extractAllClaims(String token){
        return Jwts
                .parser()
                .verifyWith(getSigninKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String generateToken(User user){
        String token = Jwts
                .builder()
                .subject(user.getEmail())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()+24*60*60*1000))
                .signWith(getSigninKey())
                .compact();
        return token;
    }

    public SecretKey getSigninKey(){
        byte[] keyBytes = Decoders.BASE64URL.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
