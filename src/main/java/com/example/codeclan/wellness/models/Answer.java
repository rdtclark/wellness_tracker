package com.example.codeclan.wellness.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "score")
    private int score;

    @Column(name = "question_id")
    private QuestionType questionType;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "submission_id", nullable = false)
    private Submission submission;

    public Answer(int score, QuestionType questionType, Submission submission) {
        this.score = score;
        this.questionType = questionType;
        this.submission = submission;
    }

    public Answer(){

    }

    public Long getId() {
        return id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public QuestionType getQuestionType() {
        return questionType;
    }

    public Submission getSubmission() {
        return submission;
    }

    public void setSubmission(Submission submission) {
        this.submission = submission;
    }
}
