package com.example.codeclan.wellness.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Time;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "submissions")
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("submissions")
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonIgnoreProperties("submission")
    @OneToMany(mappedBy = "submission", fetch = FetchType.LAZY)
    private List<Answer> answers;

    @Column(name = "dayScore")
    private int dayScore;

    @Column(name = "dayComment")
    private String dayComment;

    @Column(name = "time")
    private Instant instant;

    public Submission(User user, int dayScore, String dayComment) {
        this.user = user;
        this.dayScore = dayScore;
        this.dayComment = dayComment;
        this.answers = new ArrayList<Answer>();
        long unixTime = Instant.now().getEpochSecond();
        this.instant = Instant.ofEpochSecond(unixTime);
    }

    public Submission(){

    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Answer> getAnswers() {
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

    public int getDayScore() {
        return dayScore;
    }

    public void setDayScore(int dayScore) {
        this.dayScore = dayScore;
    }

    public String getDayComment() {
        return dayComment;
    }

    public void setDayComment(String dayComment) {
        this.dayComment = dayComment;
    }
}
