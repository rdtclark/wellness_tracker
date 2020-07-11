package com.example.codeclan.wellness.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "answers")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "score")
    private int score;

    @Column(name = "questionType")
    private QuestionType questionType;

    @JsonIgnoreProperties("answers")
    @ManyToOne
    @JoinColumn(name = "submission_id", nullable = false)
    private Long submissionId;

    public Answer(int score, QuestionType questionType, Long submissionId) {
        this.score = score;
        this.questionType = questionType;
        this.submissionId = submissionId;
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

    public String getQuestion(){
        return this.questionType.getQuestion();
    }

    public Long getSubmissionId() {
        return submissionId;
    }

    public void setSubmissionId(Long submissionId) {
        this.submissionId = submissionId;
    }
}
