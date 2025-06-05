package com.adelaide.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(schema = "BookingDetails")
@AllArgsConstructor
@NoArgsConstructor
public class BookingRequest {
    @Id
    private int id;
    private String email;
    private String showId;
    private String[] seats;
}
