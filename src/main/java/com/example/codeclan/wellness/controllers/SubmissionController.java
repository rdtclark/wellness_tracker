package com.example.codeclan.wellness.controllers;

import com.example.codeclan.wellness.controllers.messages.AnswerRequest;
import com.example.codeclan.wellness.controllers.messages.SubmissionRequest;
import com.example.codeclan.wellness.models.Answer;
import com.example.codeclan.wellness.models.Submission;
//import com.example.codeclan.wellness.models.SubmissionRequest;
import com.example.codeclan.wellness.models.User;
import com.example.codeclan.wellness.repositories.AnswerRepository;
import com.example.codeclan.wellness.repositories.SubmissionRepository;
import com.example.codeclan.wellness.repositories.UserRepository;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class SubmissionController {

    @Autowired
    SubmissionRepository submissionRepository;

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    AnswerRepository answerRepository;

    // /submissions?userId=00&from=12-12-2020&to=31-12-2020
    @GetMapping("/submissions")
    public ResponseEntity<List<Submission>> getSubmissionsForDateAndUserId(
            @RequestParam(name = "userId", required = false) Long userId,
            @RequestParam(name = "from", required = false) String from,
            @RequestParam(name = "to", required = false) String to) throws ParseException {
        if (userId != null && from != null &&  to != null){
            SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
            Date dateFrom = format.parse(from);
            Date dateTo = format.parse(to);
            return new ResponseEntity<>(submissionRepository.findByUserIdAndDateBetween(userId, dateFrom, dateTo), HttpStatus.OK);
        }
        return new ResponseEntity<>(submissionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/submissions/{id}")
    public ResponseEntity getSubmission(@PathVariable Long id){
        return new ResponseEntity<>(submissionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/submissions")
    public ResponseEntity postSubmission(@RequestBody SubmissionRequest sub) throws ParseException {

        User user = userRepository.findUserById(sub.getUserId());

        Submission newSub = new Submission(user, sub.getDayScore(), sub.getDayComment(), sub.getDate());
        submissionRepository.save(newSub);

        for(AnswerRequest answerRequest : sub.getAnswers()){
            Answer answer = new Answer(newSub, answerRequest.getScore(), answerRequest.getQuestion());
            answerRepository.save(answer);
        }

        return new ResponseEntity<>(newSub, HttpStatus.CREATED);
    }
}
