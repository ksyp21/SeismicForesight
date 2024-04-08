package com.earthquakeprediction.sesmicforesight.controller;

import com.earthquakeprediction.sesmicforesight.dto.LoginDTO;
import com.earthquakeprediction.sesmicforesight.dto.UserDto;
import com.earthquakeprediction.sesmicforesight.response.LoginResponse;
import com.earthquakeprediction.sesmicforesight.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody UserDto userDto)
    {
        String id = userService.addUser(userDto);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}