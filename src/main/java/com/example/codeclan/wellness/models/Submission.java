package com.example.codeclan.wellness.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Time;
import java.util.ArrayList;

@Entity
@Table(name = "submissions")
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonBackReference
    @OneToMany(mappedBy = "submission", fetch = FetchType.LAZY)
    private ArrayList<Answer> answers;

    @Column(name = "time")
    private Time time;

    public Submission(User user, Time time) {
        this.user = user;
        this.time = time;
    }

    public Submission(){

    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ArrayList<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(ArrayList<Answer> answers) {
        this.answers = answers;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
