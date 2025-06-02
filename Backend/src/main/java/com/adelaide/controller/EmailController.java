package com.adelaide.controller;

import com.adelaide.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "https://fringe-booking.vercel.app")
@RestController
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    // DTO for request body
    public static class BookingRequest {
        public String email;
        public String showId;
        public String[] seats;
    }

    @PostMapping("/sendBookingEmail")
    public ResponseEntity<?> sendBookingEmail(@RequestBody BookingRequest bookingRequest) {
        try {
            emailService.sendBookingConfirmation(bookingRequest.email, bookingRequest.showId, bookingRequest.seats);
            return ResponseEntity.ok().body("{\"success\": true}");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("{\"error\": \"Failed to send email\"}");
        }
    }
}
