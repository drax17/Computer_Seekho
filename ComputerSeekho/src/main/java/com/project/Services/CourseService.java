package com.project.Services;

import java.util.*;

import com.project.Entities.Course;

public interface CourseService {
    Optional<Course> getCourseById(int courseId);
    List<Course> getAllCourses();
    Course addCourse(Course course);
    Course updateCourse(Course course,int courseId);
    void deleteCourse(int courseId);
}
