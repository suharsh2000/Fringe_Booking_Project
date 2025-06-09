package com.adelaide.controller;

import com.adelaide.dto.BookingDto;
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



    @PostMapping("/sendBookingEmail")
    public ResponseEntity<?> sendBookingEmail(@RequestBody BookingDto bookingRequest) {
        try {
            emailService.sendBookingConfirmation(bookingRequest);
            return ResponseEntity.ok().body("{\"success\": true}");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("{\"error\": \"Failed to send email\"}");
        }
    }
    @GetMapping("/{id}")
    public BookingDto getBookingDetailsById(@PathVariable int id){
        return emailService.getShowDetailsById(id);

    }
}
