package com.velasco.UserAuth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Connects to your React frontend
public class AuthController {

    @Autowired private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        authService.processRegistration(user); 
        return ResponseEntity.ok("User registered successfully"); 
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
        String token = authService.authenticate(email, password); 
        
        if (token != null) {
            // Returns the token as a JSON object so localStorage can store it correctly
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body("Invalid Credentials"); 
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        authService.handleLogout(); 
        return ResponseEntity.ok("Logged out");
    }

    @GetMapping("/profile")
    public ResponseEntity<String> viewProfile() {
        return ResponseEntity.ok("Profile data retrieved");
    }
}