package com.earthquakeprediction.sesmicforesight.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users",
        uniqueConstraints = @UniqueConstraint(columnNames = "email",name = "unique_users"))
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(nullable = false,name = "name")
    private String name;

    @Column(nullable = false,name = "email")
    private String email;

    @Column(nullable = false,name = "password")
    private String password;

   }
