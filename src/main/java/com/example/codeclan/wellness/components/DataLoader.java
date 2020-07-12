package com.example.codeclan.wellness.components;

import com.example.codeclan.wellness.models.Answer;
import com.example.codeclan.wellness.models.QuestionType;
import com.example.codeclan.wellness.models.Submission;
import com.example.codeclan.wellness.models.User;
import com.example.codeclan.wellness.repositories.AnswerRepository;
import com.example.codeclan.wellness.repositories.SubmissionRepository;
import com.example.codeclan.wellness.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    
    @Autowired
    AnswerRepository answerRepository;
    
    @Autowired
    SubmissionRepository submissionRepository;
    
    @Autowired
    UserRepository userRepository;
    
    public DataLoader(){
        
    }
    
    public void run(ApplicationArguments args){
        //User
        User neil = new User("Neil");
        userRepository.save(neil);

        //Submission
        Submission submission1 = new Submission(neil, 4, "Enjoyed my 10k run");
        submissionRepository.save(submission1);

        Submission submission2 = new Submission(neil, 1, "Didn't sleep");
        submissionRepository.save(submission2);

        //Answer
        Answer answer1 = new Answer(submission1, 3, QuestionType.SLEEP);
        answerRepository.save(answer1);

        Answer answer2 = new Answer(submission1, 3, QuestionType.EAT);
        answerRepository.save(answer2);

        Answer answer3 = new Answer(submission1, 4, QuestionType.MENTAL);
        answerRepository.save(answer3);

        Answer answer4 = new Answer(submission1, 3, QuestionType.SOCIAL);
        answerRepository.save(answer4);

        Answer answer5 = new Answer(submission1, 5, QuestionType.PHYSICAL);
        answerRepository.save(answer5);

        Answer answer6 = new Answer(submission2, 1, QuestionType.SLEEP);
        answerRepository.save(answer6);

        Answer answer7 = new Answer(submission2, 3, QuestionType.EAT);
        answerRepository.save(answer7);

        Answer answer8 = new Answer(submission2, 2, QuestionType.MENTAL);
        answerRepository.save(answer8);

        Answer answer9 = new Answer(submission2, 2, QuestionType.SOCIAL);
        answerRepository.save(answer9);

        Answer answer10 = new Answer(submission2, 3, QuestionType.PHYSICAL);
        answerRepository.save(answer10);
    }
}
