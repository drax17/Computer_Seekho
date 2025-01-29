package com.project.Entities;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity  
@Table(name = "receipt")
public class Receipt implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "receipt_id")
    private int receiptId;

    @Column(nullable = false)
    private LocalDate receiptDate; 

    @Column(nullable = false)
    private double receiptAmount;

    @Column(nullable = false)
    private int paymentId;

    public int getReceiptId() {
        return receiptId;
    }

    public void setReceiptId(int receiptId) {
        this.receiptId = receiptId;
    }

    public LocalDate getReceiptDate() {
        return receiptDate;
    }

    public void setReceiptDate(LocalDate receiptDate) {
        this.receiptDate = receiptDate;
    }

    public double getReceiptAmount() {
        return receiptAmount;
    }

    public void setReceiptAmount(double receiptAmount) {
        this.receiptAmount = receiptAmount;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }
}