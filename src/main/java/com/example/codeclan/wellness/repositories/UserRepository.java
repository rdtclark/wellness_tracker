package com.example.codeclan.wellness.repositories;

import com.example.codeclan.wellness.models.Submission;
import com.example.codeclan.wellness.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findUserById(Long UserId);

}
