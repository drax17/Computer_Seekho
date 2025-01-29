package com.project.Services;

import java.util.*;
import java.util.Optional;

import com.project.Entities.Student;

public interface StudentService {
	Optional<Student> getStudentById(int studentId);
	List<Student> getAllStudents();
	Student addStudent(Student student);
	Student updateStudent(Student student, int studentId);
	void deleteStudent(int studentId);
}
