package com.example.codeclan.wellness.repositories;

import com.example.codeclan.wellness.models.Submission;
import com.example.codeclan.wellness.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {

    List<Submission> findByDateAndUserId(String date, Long userId);
    List<Submission> findByUserId(Long id);

}
