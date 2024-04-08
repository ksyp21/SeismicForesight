package com.earthquakeprediction.sesmicforesight.config;


import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    public CustomAuthSuccessHandler(){
        setUseReferer(true);
    }
}