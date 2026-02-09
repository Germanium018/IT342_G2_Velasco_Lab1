package com.velasco.UserAuth;

import org.springframework.stereotype.Component;
import java.util.UUID;

@Component
public class TokenProvider {
    // Matches generateToken() from Class/Sequence Diagrams
    public String generateToken() {
        return UUID.randomUUID().toString(); 
    }
}