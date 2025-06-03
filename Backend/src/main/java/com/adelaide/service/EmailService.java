package com.adelaide.service;

public interface EmailService {
    void sendBookingConfirmation(String email, String showId, String[] seats);
}
