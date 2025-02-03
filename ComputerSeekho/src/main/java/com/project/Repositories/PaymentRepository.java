package com.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Entities.Payment;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface PaymentRepository extends JpaRepository<Payment, Integer>{

}
