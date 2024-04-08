package com.earthquakeprediction.sesmicforesight.repository;

import com.earthquakeprediction.sesmicforesight.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findOneByEmailAndPassword(String email, String password);

    User findByEmail(String email);
}
