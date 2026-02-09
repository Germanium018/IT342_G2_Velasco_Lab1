package com.velasco.UserAuth;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    // Matches findByEmail() from Sequence Diagram
    Optional<User> findByEmail(String email); 
}