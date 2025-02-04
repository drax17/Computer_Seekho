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
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/student/{studentId}")
    public ResponseEntity<Student> getStudentById(@PathVariable int studentId) {
        Optional<Student> student = studentService.getStudentById(studentId);
        if (student.isPresent())
			return new ResponseEntity<>(student.get(), HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
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
    public ResponseEntity<String> updateStudent(@RequestBody Student student, int studentId) {
        boolean isUpdated = studentService.updateStudent(student);
		if (isUpdated)
			return new ResponseEntity<>("Student Updated", HttpStatus.OK);
		else
			return new ResponseEntity<>("There was a problem updating the Student Details", HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/delete/{studentId}")
    public ResponseEntity<String> deleteStudent(@PathVariable int studentId){
    	studentService.deleteStudent(studentId);
    	return ResponseEntity.ok().body("Student Deleted");
    }
}