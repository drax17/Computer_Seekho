package com.project.Controllers;

import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Payment;
import com.project.Services.PaymentService;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
	@Autowired
	private PaymentService paymentService;

	@GetMapping("/getById/{paymentId}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable int paymentId) {
		Optional<Payment> payment = paymentService.getPaymentById(paymentId);
		if (payment.isPresent())
			return new ResponseEntity<>(payment.get(), HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}

	@GetMapping("/all")
	public List<Payment> getAllPayment() {
		return paymentService.getAllPayment();
	}

	@PostMapping("/add")
	public ResponseEntity<Payment> addPayment(@RequestBody Payment payment) {
		Payment payment1 = paymentService.addPayment(payment);
		return ResponseEntity.status(HttpStatus.CREATED).body(payment1);
	}

	@PutMapping("/update")
	public ResponseEntity<String> updatePayment(@RequestBody Payment payment) {
		boolean isUpdated = paymentService.updatePayment(payment);
		if (isUpdated)
			return new ResponseEntity<>("Payment Updated", HttpStatus.OK);
		else
			return new ResponseEntity<>("There was a problem updating the payment", HttpStatus.NOT_MODIFIED);
	}

	@DeleteMapping("/delete/{paymentId}")
	public ResponseEntity<String> deletePayment(@PathVariable int paymentId) {
		paymentService.deletePayment(paymentId);
		return ResponseEntity.ok().body("Payment Deleted");
	}
}
