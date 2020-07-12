package com.example.codeclan.wellness.models;

public enum QuestionType {
    SLEEP(1L, "How well did you sleep?"),
    EAT(2L, "Did you eat well?"),
    SOCIAL(3L, "How were your social interactions?"),
    MENTAL(4L, "How mentally stimulated have you been?"),
    PHYSICAL(5L, "Have you had enough physical exercise?");

    private Long id;
    private String question;

    QuestionType(Long id, String question){
        this.id = id;
        this.question = question;
    }

    public Long getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }
}
