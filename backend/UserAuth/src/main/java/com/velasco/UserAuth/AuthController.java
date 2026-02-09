package com.velasco.UserAuth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        authService.processRegistration(user);
        return "Redirect to Log in Page"; //
    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password) {
        String token = authService.authenticate(email, password);
        return (token != null) ? "Redirect to Dashboard" : "Show Error Message"; //
    }
}