package com.project.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.project.Services.StudentService;
import com.project.Entities.Student;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
        Optional<Student> student = studentService.getStudentById(id);
        return ResponseEntity.status(HttpStatus.CREATED).body(student.get());
    }

    @GetMapping("/all")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        // Student student = new Student();
        Student student2= studentService.addStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(student2);
    }

    @PutMapping("/update")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student, int studentId) {
        Student student2 = studentService.updateStudent(student, studentId);
        return ResponseEntity.status(HttpStatus.CREATED).body(student2);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable int studentId){
    	studentService.deleteStudent(studentId);
    	return ResponseEntity.ok().body("Student Deleted");
    }
}