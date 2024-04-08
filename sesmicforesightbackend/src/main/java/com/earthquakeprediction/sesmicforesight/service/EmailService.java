package com.earthquakeprediction.sesmicforesight.service;

import com.earthquakeprediction.sesmicforesight.consumingrest.PredictionResponse;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private final JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendAlert(String email, PredictionResponse response) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("earthquake-alert@seismicforesight.com");
        message.setTo(email);
        message.setSubject("Earthquake Alert");
        message.setText(String.format("Predicted earthquake on %s with a magnitude of %.2f", response.getDate(), response.getMagnitude_prediction()));
        javaMailSender.send(message);
    }
}