package com.adelaide.repo;

import com.adelaide.entity.BookingRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends JpaRepository<BookingRequest,Integer> {
}
