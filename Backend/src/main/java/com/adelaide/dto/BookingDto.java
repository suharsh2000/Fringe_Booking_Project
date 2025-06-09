package com.adelaide.dto;

import java.util.Arrays;

// DTO for request body
public  class BookingDto {
    public int id;
    public String email;
    public String showId;
    public String[] seats;

    public int getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getShowId() {
        return showId;
    }

    public String[] getSeats() {
        return seats;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setShowId(String showId) {
        this.showId = showId;
    }

    public void setSeats(String[] seats) {
        this.seats = seats;
    }

    @Override
    public String toString() {
        return "BookingDto{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", showId='" + showId + '\'' +
                ", seats=" + Arrays.toString(seats) +
                '}';
    }
}