package com.earthquakeprediction.sesmicforesight.controller;

import com.earthquakeprediction.sesmicforesight.entity.AuthenticationResponse;
import com.earthquakeprediction.sesmicforesight.entity.User;
import com.earthquakeprediction.sesmicforesight.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthenticationController {

    private final AuthenticationService authService;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}

