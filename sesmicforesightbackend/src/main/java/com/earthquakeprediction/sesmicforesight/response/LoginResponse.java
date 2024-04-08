package com.earthquakeprediction.sesmicforesight.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    String message;
    Boolean status;

    @Override
    public String toString() {
        return "LoginResponce{" +
                "message='" + message + '\'' +
                ", status=" + status +
                '}';
    }
}
