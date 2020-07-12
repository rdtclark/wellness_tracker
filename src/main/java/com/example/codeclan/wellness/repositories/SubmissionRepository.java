package com.example.codeclan.wellness.repositories;

import com.example.codeclan.wellness.models.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {
}
