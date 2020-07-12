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

    @GetMapping("/submissions")
    public ResponseEntity<List<Submission>> getAllSubmissions(){
        return new ResponseEntity<>(submissionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/submissions/{id}")
    public ResponseEntity getSubmission(@PathVariable Long id){
        return new ResponseEntity<>(submissionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/submissions")
    public ResponseEntity<Submission> postSubmission(@RequestBody Submission sub){
        Submission newSub = new Submission(sub.getUser(), sub.getDayScore(), sub.getDayComment());
        submissionRepository.save(sub);
        return new ResponseEntity<>(newSub, HttpStatus.CREATED);
    }
}
