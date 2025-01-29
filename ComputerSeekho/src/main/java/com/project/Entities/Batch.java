package com.project.Entities;

import java.time.LocalTime;

import jakarta.persistence.*;

@Entity
@Table(name = "batch")
public class Batch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "batch_id")
    private int batchId;

    @Column(name = "batch_name")
    private String batchName;

    @Column(name = "batch_start_time")
    private LocalTime batchStartTime;

    @Column(name = "batch_end_time")
    private LocalTime batchEndTime;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Column(name = "batch_is_active")
    private Boolean batchIsActive;

    public int getBatchId() {
        return batchId;
    }

    public void setBatchId(int batch_id) {
        this.batchId = batch_id;
    }

    public String getBatchName() {
        return batchName;
    }

    public void setBatchName(String batchName) {
        this.batchName = batchName;
    }

    public LocalTime getBatchStartTime() {
        return batchStartTime;
    }

    public void setBatchStartTime(LocalTime batchStartTime) {
        this.batchStartTime = batchStartTime;
    }

    public LocalTime getBatchEndTime() {
        return batchEndTime;
    }

    public void setBatchEndTime(LocalTime batchEndTime) {
        this.batchEndTime = batchEndTime;
    }

    public int getCourseId() {
        return course.getCourseId();
    }

    public void setCourseId(int courseId) {
        this.course.setCourseId(courseId);
    }

    public Boolean getBatchIsActive() {
        return batchIsActive;
    }

    public void setBatchIsActive(Boolean batchIsActive) {
        this.batchIsActive = batchIsActive;
    }
}