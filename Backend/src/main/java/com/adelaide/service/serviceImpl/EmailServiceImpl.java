package com.adelaide.service.serviceImpl;

import com.adelaide.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendBookingConfirmation(String toEmail, String showId, String[] seats) {
        String seatsStr = String.join(", ", seats);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Booking Confirmation");
        message.setText("Thank you for booking seats: " + seatsStr + " for show ID: " + showId + ".");

        mailSender.send(message);
    }
}
