package com.earthquakeprediction.sesmicforesight.repository;

import com.earthquakeprediction.sesmicforesight.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
