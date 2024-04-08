package com.earthquakeprediction.sesmicforesight.service.impl;


import com.earthquakeprediction.sesmicforesight.dto.LoginDTO;
import com.earthquakeprediction.sesmicforesight.dto.UserDto;
import com.earthquakeprediction.sesmicforesight.entity.User;
import com.earthquakeprediction.sesmicforesight.repository.UserRepository;
import com.earthquakeprediction.sesmicforesight.response.LoginResponse;
import com.earthquakeprediction.sesmicforesight.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addUser(UserDto userDto) {
        User user = new User(
                userDto.getId(),
                userDto.getName(),
                userDto.getEmail(),
                this.passwordEncoder.encode(userDto.getPassword())
        );
        userRepository.save(user);
        return user.getName();
    }
    UserDto userDto;
    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user1 = userRepository.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }
}