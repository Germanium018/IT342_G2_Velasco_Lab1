package com.velasco.UserAuth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        authService.processRegistration(user); //
        return ResponseEntity.ok("User registered successfully"); 
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
        String token = authService.authenticate(email, password); //
        if (token != null) {
            return ResponseEntity.ok(token); // Returns token for frontend storage
        }
        return ResponseEntity.status(401).body("Invalid Credentials"); //
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        authService.handleLogout(); //
        return ResponseEntity.ok("Logged out");
    }

    @GetMapping("/profile")
    public ResponseEntity<String> viewProfile() {
        // Fulfills viewProfile() requirement in Class Diagram
        return ResponseEntity.ok("Profile data retrieved");
    }
}