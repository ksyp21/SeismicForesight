package com.earthquakeprediction.sesmicforesight.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistrationDTO {

    private Long id;
    private String name;
    private String email;

}
