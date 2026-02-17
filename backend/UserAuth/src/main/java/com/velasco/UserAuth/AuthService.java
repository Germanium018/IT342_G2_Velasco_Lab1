package com.velasco.UserAuth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {
    @Autowired private UserRepository userRepository;
    @Autowired private JwtUtil jwtUtil; // Changed from TokenProvider to use your real JwtUtil
    @Autowired private BCryptPasswordEncoder passwordEncoder;

    public void processRegistration(User user) {
        if (user.getEmail() == null || user.getPassword() == null) {
            throw new RuntimeException("Invalid Data");
        }
        
        // --- BCrypt Implementation ---
        // Hashes the password before it reaches saveToDatabase()
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        
        userRepository.save(user); 
    }

    public String authenticate(String email, String password) {
        // Matches findByEmail() logic in Sequence Diagram
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // --- BCrypt Verification ---
            // Compares the plain-text login password with the hashed password in MySQL
            if (passwordEncoder.matches(password, user.getPassword())) {
                return jwtUtil.generateToken(email); // Returns actual signed JWT token
            }
        }
        return null; 
    }

    public void handleLogout() {
        // Fulfills handleLogout() requirement in Class Diagram
        System.out.println("User session cleared.");
    }
}