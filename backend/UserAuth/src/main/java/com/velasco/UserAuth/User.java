package com.velasco.UserAuth;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userID; //

    private String firstname; //
    private String lastname;  //
    
    @Column(unique = true)
    private String email;     //
    private String password;  //
}