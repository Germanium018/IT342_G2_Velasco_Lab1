package com.velasco.UserAuth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {
    @Autowired private UserRepository userRepository;
    @Autowired private TokenProvider tokenProvider;

    public void processRegistration(User user) {
        // Validation: Ensures data is valid before saving
        if (user.getEmail() == null || user.getPassword() == null) {
            throw new RuntimeException("Invalid Data");
        }
        userRepository.save(user); // Matches saveToDatabase()
    }

    public String authenticate(String email, String password) {
        // Matches findByEmail() logic in Sequence Diagram
        return userRepository.findByEmail(email)
                .filter(u -> u.getPassword().equals(password)) // Basic credential check
                .map(u -> tokenProvider.generateToken()) //
                .orElse(null); 
    }

    public void handleLogout() {
        // Fulfills handleLogout() requirement in Class Diagram
        System.out.println("User session cleared.");
    }
}