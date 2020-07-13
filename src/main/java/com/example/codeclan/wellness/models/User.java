package com.example.codeclan.wellness.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

//    @JsonIgnoreProperties ("user")
    @JsonBackReference
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Submission> submissions;

    @Column(name = "questions")
    private ArrayList<QuestionType> questions;


    public User(String name) {
        this.name = name;
        this.submissions = new ArrayList<Submission>();
        this.questions = new ArrayList<QuestionType>();
        this.questions.add(QuestionType.SLEEP);
        this.questions.add(QuestionType.EAT);
        this.questions.add(QuestionType.SOCIAL);
        this.questions.add(QuestionType.MENTAL);
        this.questions.add(QuestionType.PHYSICAL);
    }

    public User(){

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Submission> getSubmissions() {
        return submissions;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSubmissions(List<Submission> submissions) {
        this.submissions = submissions;
    }

    public ArrayList<QuestionType> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<QuestionType> questions) {
        this.questions = questions;
    }
}
