package com.velasco.UserAuth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired private UserRepository userRepository;
    @Autowired private TokenProvider tokenProvider;

    public void processRegistration(User user) {
        userRepository.save(user); // Matches saveToDatabase()
    }

    public String authenticate(String email, String password) {
        // Simple logic for Lab 1: verify email exists
        return userRepository.findByEmail(email)
                .map(u -> tokenProvider.generateToken())
                .orElse(null); // Returns null if invalid
    }
}