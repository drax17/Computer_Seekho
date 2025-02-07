package com.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.Entities.Payment;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

    @Modifying
    @Query  (value = """
            update student s set payment_due = payment_due-?1 where student_id = ?2 
            """, nativeQuery = true)
    void updatePaymentDue(double amount, int paymentId);
}
