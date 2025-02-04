package com.project.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Entities.Recruiter;
import com.project.Services.RecruiterService;

@RestController
@RequestMapping("/api/recruiter")
public class RecruiterController {
    
    @Autowired
    private RecruiterService recruiterService;
    
    @GetMapping("/all")
    public ResponseEntity<List<Recruiter>> getAllRecruiters() {
        return ResponseEntity.ok().body(recruiterService.getAllRecruiters());
    }

    @GetMapping("/getById/{recruiterId}")
    public ResponseEntity<Recruiter> getRecruiterById(int recruiterId) {
        Optional<Recruiter> recruiter = recruiterService.getRecruiterById(recruiterId);
        if (recruiter.isPresent())
            return ResponseEntity.ok().body(recruiter.get());
        else
            return ResponseEntity.notFound().build();
    }

    @PostMapping("/add")
    public ResponseEntity<Recruiter> addRecruiter(Recruiter recruiter) {
        Recruiter recruiter1 = recruiterService.addRecruiter(recruiter);
        return ResponseEntity.ok().body(recruiter1);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateRecruiter(Recruiter recruiter) {
        boolean isUpdated = recruiterService.updateRecruiter(recruiter);
        if (isUpdated)
            return ResponseEntity.ok().body("Recruiter Updated");
        else
            return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{recruiterId}")
    public ResponseEntity<String> deleteRecruiter(int recruiterId) {
        recruiterService.deleteRecruiter(recruiterId);
        return ResponseEntity.ok().body("Recruiter Deleted");
    }
    
}
