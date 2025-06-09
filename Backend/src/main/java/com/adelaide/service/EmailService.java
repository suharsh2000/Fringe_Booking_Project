package com.adelaide.service;

<<<<<<< HEAD
public interface EmailService {
    void sendBookingConfirmation(String email, String showId, String[] seats);
=======
import com.adelaide.dto.BookingDto;

public interface EmailService {
    void sendBookingConfirmation(BookingDto bookingRequest);
    BookingDto getShowDetailsById(int id);
>>>>>>> ecba7f227647b59bb7805beb69e16864d23aa4fb
}
