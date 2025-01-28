package com.project.Entities;

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
    private int batchStartTime;

    @Column(name = "batch_end_time")
    private int batchEndTime;

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

    public int getBatchStartTime() {
        return batchStartTime;
    }

    public void setBatchStartTime(int batchStartTime) {
        this.batchStartTime = batchStartTime;
    }

    public int getBatchEndTime() {
        return batchEndTime;
    }

    public void setBatchEndTime(int batchEndTime) {
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