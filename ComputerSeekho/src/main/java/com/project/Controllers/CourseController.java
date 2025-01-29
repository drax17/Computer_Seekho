package com.project.Controllers;

import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Course;
import com.project.Services.CourseService;

@RestController
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable int id) {
        Optional<Course> course = courseService.getCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body(course.get());
    }
    @GetMapping("/all")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @PostMapping("/add")
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        Course course2 = courseService.addCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(course2);
    }
    @PostMapping("/update")
    public ResponseEntity<Course> updateCourse(@RequestBody Course course) {
        Course course2 = courseService.updateCourse(course, course.getCourseId());
        return ResponseEntity.status(HttpStatus.CREATED).body(course2);
    }
    @DeleteMapping("/delete/{courseId}")
    public ResponseEntity<String> deleteCourse(@PathVariable int courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.ok().body("Course Deleted");
    }
}
