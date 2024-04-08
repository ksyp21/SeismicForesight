package com.earthquakeprediction.sesmicforesight.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class LogoutController {

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate(); // Invalidate the session
        }
        return "redirect:/login?logout"; // Redirect to login page with logout parameter
    }

}