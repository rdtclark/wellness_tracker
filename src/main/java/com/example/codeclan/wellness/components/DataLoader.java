package com.example.codeclan.wellness.components;

import com.example.codeclan.wellness.models.*;
import com.example.codeclan.wellness.repositories.AnswerRepository;
import com.example.codeclan.wellness.repositories.QuestionRepository;
import com.example.codeclan.wellness.repositories.SubmissionRepository;
import com.example.codeclan.wellness.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Random;

@Component
public class DataLoader implements ApplicationRunner {
    
    @Autowired
    AnswerRepository answerRepository;
    
    @Autowired
    SubmissionRepository submissionRepository;
    
    @Autowired
    UserRepository userRepository;
    
    @Autowired
    QuestionRepository questionRepository;
    
    public DataLoader(){
        
    }
    
    public void run(ApplicationArguments args) throws ParseException {
        //Questions
        Question sleep = new Question("SLEEP", "How well did you sleep?");
        questionRepository.save(sleep);
        
        Question eat = new Question("EAT", "Did you eat well?");
        questionRepository.save(eat);
        
        Question social = new Question("SOCIAL", "Did you speak to anyone?");
        questionRepository.save(social);
        
        Question mental = new Question("MENTAL", "Did you learn anything new?");
        questionRepository.save(mental);
        
        Question physical = new Question("PHYSICAL", "Have you exercised?");
        questionRepository.save(physical);
                
        //User
        User neil = new User("Neil");
        userRepository.save(neil);

        //Submission
        for(int i =  1 ; i < 92 ; i++ ){

            int day = i;
            int month = 1;

            if( 31 < i && i < 60 ){
                day = i - 31;
                month = 2;
            }
            if( 60 < i && i < 92 ){
                day =  i - 60;
                month = 3;
            }

            int score = (int)(Math.random() * 6) + 1;

            Submission submission = new Submission(neil, score, "Enjoyed my 10k run", String.format("%s-%s-2020", day, month));
            submissionRepository.save(submission);

            score = (int)(Math.random() * 6) + 1;

            Answer answer1 = new Answer(submission, score, sleep.getId());
            answerRepository.save(answer1);

            score = (int)(Math.random() * 6) + 1;

            Answer answer2 = new Answer(submission, 3, eat.getId());
            answerRepository.save(answer2);

            score = (int)(Math.random() * 6) + 1;

            Answer answer3 = new Answer(submission, 4, mental.getId());
            answerRepository.save(answer3);

            score = (int)(Math.random() * 6) + 1;

            Answer answer4 = new Answer(submission, 3, social.getId());
            answerRepository.save(answer4);

            score = (int)(Math.random() * 6) + 1;

            Answer answer5 = new Answer(submission, 5, physical.getId());
            answerRepository.save(answer5);
        }

    }
}
