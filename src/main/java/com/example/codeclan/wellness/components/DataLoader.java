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
import java.util.ArrayList;
import java.util.Collections;
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

        ArrayList<String> dailyAnswers = new ArrayList<String>();
        Collections.addAll(dailyAnswers,
                "Met my girlfriend", 
                "Broke up with my girlfriend", 
                "Did some sports", 
                "The chips were amazing", 
                "Went to a nice restaurant", 
                "Had a nice swim",
                "My scottish friend keeps bothering me with french fries",
                "Wrote some good code",
                "Had a bad day at work",
                "Got wasted",
                "I kissed the  Bride",
                "Obama was okay I guess",
                "Thanks Obama",
                "Met with some strange family members",
                "Great weather",
                "Was late for work",
                "Lost my job",
                "................. FML",
                "Watched The Godfather and ate too much chocolate",
                "Didn't leave the house",
                "Met with my family",
                "Made lasagne",
                "Had a fight with my friend",
                "Made up with my friend",
                "Finished reading Norwegian Wood",
                "Applying for jobs",
                "Learning some Italian");
        
        
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

        Question dayQuestion = new Question("DAY", "Rate your day:");
        questionRepository.save(dayQuestion);
                
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
            int dayComment = (int)(Math.random() * dailyAnswers.size());

            Submission submission = new Submission(neil, score, dailyAnswers.get(dayComment), String.format("2020-%s-%s", month, day));
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
