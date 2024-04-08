package com.earthquakeprediction.sesmicforesight.service;

import com.earthquakeprediction.sesmicforesight.dto.LoginDTO;
import com.earthquakeprediction.sesmicforesight.dto.UserDto;
import com.earthquakeprediction.sesmicforesight.response.LoginResponse;


public interface UserService {
    String addUser(UserDto employeeDTO);
    LoginResponse loginUser(LoginDTO loginDTO);
}