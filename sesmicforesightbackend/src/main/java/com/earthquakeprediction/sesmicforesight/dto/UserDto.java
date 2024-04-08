package com.earthquakeprediction.sesmicforesight.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Integer id;
    private String name;
    private String email;
    private String password;
}