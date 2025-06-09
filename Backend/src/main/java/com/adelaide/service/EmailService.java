package com.adelaide.service;


import com.adelaide.dto.BookingDto;

public interface EmailService {
    void sendBookingConfirmation(BookingDto bookingRequest);
    BookingDto getShowDetailsById(int id);
}
