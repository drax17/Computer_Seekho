package com.project.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Entities.Student;
import com.project.Repositories.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Optional<Student> getStudentById(int studentId) {
		return studentRepository.findById(studentId);
	}

	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}

	@Override
	public Student addStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public boolean updateStudent(Student student) {
		Optional<Student> foundStudent = studentRepository.findById(student.getStudentId());
		if(foundStudent.isPresent()) {
			studentRepository.save(student);
			return true;
		}
		else return false;
	}

	@Override
	public void deleteStudent(int studentId) {
		studentRepository.deleteById(studentId);
	}

	@Override
	public List<Student> findbyCourse(int courseId) {
		return studentRepository.findbyCourse(courseId);
	}

	@Override
	public List<Student> findByBatch(int batchId) {
		return studentRepository.findByBatch(batchId);
	}
}
