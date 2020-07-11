package com.example.codeclan.wellness.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Time;
import java.time.Instant;
import java.util.ArrayList;

@Entity
@Table(name = "submissions")
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("submissions")
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Long userId;

    @JsonIgnoreProperties("submission")
    @OneToMany(mappedBy = "submission", fetch = FetchType.LAZY)
    private ArrayList<Answer> answers;

    @Column(name = "time")
    private Instant instant;

    public Submission(Long userId) {
        this.userId = userId;
//        this.instant = instant;
    }

    public Submission(){

    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public ArrayList<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(ArrayList<Answer> answers) {
        this.answers = answers;
    }

    public Instant getTime() {
        return instant;
    }

    public void setTime(Instant instant) {
        this.instant = instant;
    }
}
