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
        Submission submission1 = new Submission(neil, 4, "Enjoyed my 10k run", "12-06-2020");
        submissionRepository.save(submission1);

        Submission submission2 = new Submission(neil, 1, "Didn't sleep", "13-06-2020");
        submissionRepository.save(submission2);

        Submission submission3 = new Submission(neil, 5, "Saw my friends", "14-06-2020");
        submissionRepository.save(submission3);

        //Answer
        Answer answer1 = new Answer(submission1, 3, sleep.getId());
        answerRepository.save(answer1);

        Answer answer2 = new Answer(submission1, 3, eat.getId());
        answerRepository.save(answer2);

        Answer answer3 = new Answer(submission1, 4, mental.getId());
        answerRepository.save(answer3);

        Answer answer4 = new Answer(submission1, 3, social.getId());
        answerRepository.save(answer4);

        Answer answer5 = new Answer(submission1, 5, physical.getId());
        answerRepository.save(answer5);

        Answer answer6 = new Answer(submission2, 1, sleep.getId());
        answerRepository.save(answer6);

        Answer answer7 = new Answer(submission2, 3, eat.getId());
        answerRepository.save(answer7);

        Answer answer8 = new Answer(submission2, 2, mental.getId());
        answerRepository.save(answer8);

        Answer answer9 = new Answer(submission2, 2, social.getId());
        answerRepository.save(answer9);

        Answer answer10 = new Answer(submission2, 3, physical.getId());
        answerRepository.save(answer10);

        Answer answer11 = new Answer(submission3, 4, sleep.getId());
        answerRepository.save(answer11);

        Answer answer12 = new Answer(submission3, 4, eat.getId());
        answerRepository.save(answer12);

        Answer answer13 = new Answer(submission3, 5, mental.getId());
        answerRepository.save(answer13);

        Answer answer14 = new Answer(submission3, 5, social.getId());
        answerRepository.save(answer14);

        Answer answer15 = new Answer(submission3, 5, physical.getId());
        answerRepository.save(answer15);
    }
}
