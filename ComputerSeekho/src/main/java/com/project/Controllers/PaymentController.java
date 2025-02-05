package com.project.Controllers;

import java.util.Optional;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Payment;
import com.project.Entities.ResponseDTO;
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
	public ResponseEntity<ResponseDTO> addPayment(@RequestBody Payment payment) {
		paymentService.addPayment(payment);
		return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDTO("Payment Details Added",new Date()));
	}

	@PutMapping("/update")
	public ResponseEntity<ResponseDTO> updatePayment(@RequestBody Payment payment) {
		boolean isUpdated = paymentService.updatePayment(payment);
		if (isUpdated)
			return new ResponseEntity<>(new ResponseDTO(" Details Updated",new Date()), HttpStatus.OK);
		else
			return new ResponseEntity<>(new ResponseDTO(" Not Found",new Date()), HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/delete/{paymentId}")
	public ResponseEntity<ResponseDTO> deletePayment(@PathVariable int paymentId) {
		paymentService.deletePayment(paymentId);
		return new ResponseEntity<>(new ResponseDTO("Payment Details Deleted",new Date()), HttpStatus.OK);
	}
}
