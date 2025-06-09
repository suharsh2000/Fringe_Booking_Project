import React, { useState, useEffect } from "react";
import axios from "axios";
/**
 * Converts 0-based row index to letter (0 -> A, 1 -> B, ...)
 */
const rowIndexToLetter = (index) =>
  String.fromCharCode("A".charCodeAt(0) + index);

export default function CustomSeatSelector({
  noOfSeats, // total seats
  maxSeatsPerRow = 10, // max seats in one row
  bookedSeats = [],
  onSelectionChange,
  showId,
}) {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  useEffect(() => {
    const bookingdetails = axios.get(`https://adalaide-backend-1747617833788.azurewebsites.net/email/${showId}`);
    bookingdetails
      .then((response) => {
        const bookedSeatsData = response.data.seats;
        setSelectedSeats(new Set(bookedSeatsData));
      })
      .catch((error) => {
        console.error("Error fetching booking details:", error);
      });
  }, [showId]);
  // Calculate number of rows and seats in last row
  const rows = Math.ceil(noOfSeats / maxSeatsPerRow);
  const lastRowSeats = noOfSeats % maxSeatsPerRow || maxSeatsPerRow;

  const toggleSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;
    setSelectedSeats((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(seatId)) {
        newSelected.delete(seatId);
      } else {
        newSelected.add(seatId);
      }
      onSelectionChange && onSelectionChange([...newSelected]);
      return newSelected;
    });
  };

  return (
    <div
      style={{
        display: "inline-block",
        padding: 20,
        background: "#f0f0f0",
        borderRadius: 8,
      }}
    >
      {[...Array(rows)].map((_, rowIdx) => {
        const rowLetter = rowIndexToLetter(rowIdx);
        // Determine seats in this row
        const seatsInThisRow =
          rowIdx === rows - 1 ? lastRowSeats : maxSeatsPerRow;

        return (
          <div
            key={rowLetter}
            style={{ display: "flex", marginBottom: 10, alignItems: "center" }}
          >
            <div style={{ width: 20, fontWeight: "bold", marginRight: 8 }}>
              {rowLetter}
            </div>
            {[...Array(seatsInThisRow)].map((_, seatIdx) => {
              const seatId = `${rowLetter}-${seatIdx + 1}`;
              const isBooked = bookedSeats.includes(seatId);
              const isSelected = selectedSeats.has(seatId);
              return (
                <button
                  key={seatId}
                  onClick={() => toggleSeat(seatId)}
                  disabled={isBooked}
                  style={{
                    width: 32,
                    height: 32,
                    marginRight: 6,
                    backgroundColor: isBooked
                      ? "#888"
                      : isSelected
                      ? "#4caf50"
                      : "#fff",
                    border: "1px solid #333",
                    borderRadius: 4,
                    cursor: isBooked ? "not-allowed" : "pointer",
                    userSelect: "none",
                    fontWeight: "bold",
                  }}
                  title={isBooked ? "Booked" : "Available"}
                >
                  {seatIdx + 1}
                </button>
              );
            })}
          </div>
        );
      })}

      <div style={{ marginTop: 15, fontWeight: "bold" }}>
        Selected Seats:{" "}
        {selectedSeats.size > 0 ? [...selectedSeats].join(", ") : "None"}
      </div>
    </div>
  );
}
