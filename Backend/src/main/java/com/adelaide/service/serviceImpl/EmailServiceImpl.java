package com.adelaide.service.serviceImpl;

<<<<<<< HEAD
import com.adelaide.service.EmailService;
=======
import com.adelaide.dto.BookingDto;
import com.adelaide.entity.BookingRequest;
import com.adelaide.repo.EmailRepository;
import com.adelaide.service.EmailService;
import org.modelmapper.ModelMapper;
>>>>>>> ecba7f227647b59bb7805beb69e16864d23aa4fb
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
=======
import java.util.Optional;

>>>>>>> ecba7f227647b59bb7805beb69e16864d23aa4fb
@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender mailSender;
<<<<<<< HEAD

    @Override
    public void sendBookingConfirmation(String toEmail, String showId, String[] seats) {
        String seatsStr = String.join(", ", seats);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Booking Confirmation");
        message.setText("Thank you for booking seats: " + seatsStr + " for show ID: " + showId + ".");

        mailSender.send(message);
=======
    @Autowired
    private EmailRepository repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void sendBookingConfirmation(BookingDto booking) {
        System.out.println("booking"+booking);
        String seatsStr = String.join(", ", booking.getSeats());

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(booking.getEmail());
        message.setSubject("Booking Confirmation");
        message.setText("Thank you for booking seats: " + seatsStr + " for show ID: " + booking.getShowId() + ".");

        mailSender.send(message);
        BookingRequest bookingDetails = new BookingRequest();
        bookingDetails.setEmail(booking.getEmail());
        bookingDetails.setSeats(booking.getSeats());
        bookingDetails.setShowId(booking.getShowId());

        repo.save(bookingDetails);
    }

    @Override
    public BookingDto getShowDetailsById(int id) {
        Optional<BookingRequest> request = repo.findById(id);
        if (request.isEmpty()) {
            System.out.println("hiiiii");
            return new BookingDto();
        }
        return mapper.map(request.get(), BookingDto.class);
>>>>>>> ecba7f227647b59bb7805beb69e16864d23aa4fb
    }
}
