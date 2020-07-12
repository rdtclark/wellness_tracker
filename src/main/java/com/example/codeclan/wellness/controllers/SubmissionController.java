package com.example.codeclan.wellness.controllers;

import com.example.codeclan.wellness.models.Submission;
import com.example.codeclan.wellness.models.User;
import com.example.codeclan.wellness.repositories.SubmissionRepository;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SubmissionController {

    @Autowired
    SubmissionRepository submissionRepository;

    // /submissions?date=dd-mm-yyyy&userId=00
    @GetMapping("/submissions")
    public ResponseEntity<List<Submission>> getSubmissionsForDateAndUserId(
            @RequestParam(name = "date", required = false) String date,
            @RequestParam(name = "userId", required = false) Long userId){
        if (date != null && userId != null){
            return new ResponseEntity<>(submissionRepository.findByDateAndUserId(date, userId), HttpStatus.OK);
        }
        return new ResponseEntity<>(submissionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/submissions/{id}")
    public ResponseEntity getSubmission(@PathVariable Long id){
        return new ResponseEntity<>(submissionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/submissions")
    public ResponseEntity<Submission> postSubmission(@RequestBody Submission sub){
        Submission newSub = new Submission(sub.getUser(), sub.getDayScore(), sub.getDayComment(), sub.getDate());
        submissionRepository.save(newSub);
        return new ResponseEntity<>(newSub, HttpStatus.CREATED);
    }
}
