package com.adelaide.controller;

<<<<<<< HEAD
=======
import com.adelaide.dto.BookingDto;
>>>>>>> ecba7f227647b59bb7805beb69e16864d23aa4fb
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

<<<<<<< HEAD
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
=======


    @PostMapping("/sendBookingEmail")
    public ResponseEntity<?> sendBookingEmail(@RequestBody BookingDto bookingRequest) {
        try {
            emailService.sendBookingConfirmation(bookingRequest);
>>>>>>> ecba7f227647b59bb7805beb69e16864d23aa4fb
            return ResponseEntity.ok().body("{\"success\": true}");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("{\"error\": \"Failed to send email\"}");
        }
    }
<<<<<<< HEAD
=======
    @GetMapping("/{id}")
    public BookingDto getBookingDetailsById(@PathVariable int id){
        return emailService.getShowDetailsById(id);

    }
>>>>>>> ecba7f227647b59bb7805beb69e16864d23aa4fb
}
