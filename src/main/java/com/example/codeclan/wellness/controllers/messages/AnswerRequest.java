package com.example.codeclan.wellness.controllers.messages;

import com.example.codeclan.wellness.models.QuestionType;

import java.io.Serializable;

public class AnswerRequest implements Serializable {

    private QuestionType question;
    private int score;

    public QuestionType getQuestion() {
        return question;
    }

    public void setQuestion(QuestionType question) {
        this.question = question;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
