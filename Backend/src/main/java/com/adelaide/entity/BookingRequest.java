package com.adelaide.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Arrays;

@Entity
@Data
@Table(schema = "BookingDetails")
@AllArgsConstructor
@NoArgsConstructor
public class BookingRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String email;
    private String showId;
    private String[] seats;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getShowId() {
        return showId;
    }

    public void setShowId(String showId) {
        this.showId = showId;
    }

    public String[] getSeats() {
        return seats;
    }

    public void setSeats(String[] seats) {
        this.seats = seats;
    }

    @Override
    public String toString() {
        return "BookingRequest{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", showId='" + showId + '\'' +
                ", seats=" + Arrays.toString(seats) +
                '}';
    }
}
