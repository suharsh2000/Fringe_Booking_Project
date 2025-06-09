import React, { useEffect, useState } from "react";
import "../styles/showcard.css";
import axios from "axios";
import Modal from "react-modal";
import CustomSeatSelector from "./SeatPicker";

const ShowCard = ({ show, getShows, isGetInvolvedClicked }) => {
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [formData, setFormData] = useState({
    id: show.id,
    title: show.title,
    description: show.description,
    imageUrl: show.imageUrl,
    startDate: show.startDate,
    endDate: show.endDate,
    noOfSeats: show.noOfSeats,
    time: show.time,
    location: show.location,
    status: show.status,
  });
  useEffect(() => {
    const user = localStorage.getItem("role");

    if (user == "admin") {
      setIsAdminLogged(true);
    }
    console.log(user);
  }, []);
  function handleEdit(e) {
    e.preventDefault();
    console.log("Edit button clicked");
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(show);
    console.log("Delete button clicked");

    try {
      // Make sure the URL is correct
      const result = await axios.delete(`https://adalaide-backend-1747617833788.azurewebsites.net/show/deleteShow/${show.id}`);
      console.log("Delete result status", result.status);
      getShows();
    } catch (error) {
      console.error("Error deleting show", error);
    }
  };
  function handleBookShow(e) {
    e.preventDefault();
    console.log("book button clicked");
  }
  function handleSeats(e) {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      noOfSeats: e.target.value,
    }));
  }
  const handleApprove = async (e) => {
    e.preventDefault();

    // Create updated data manually instead of waiting for state
    const updatedData = {
      ...formData,
      status: "APPROVED",
    };

    try {
      console.log("Sending data:", updatedData);
<<<<<<< HEAD
      const result = await axios.put(`https://adalaide-backend-1747617833788.azurewebsites.net/show/updateShowStatus`, updatedData);
=======
      const result = await axios.put(
        `https://adalaide-backend-1747617833788.azurewebsites.net/show/updateShowStatus`,
        updatedData
      );
>>>>>>> dev
      console.log("Approve result status", result.status);
      alert("Show approved successfully!");
      getShows();
    } catch (error) {
      console.error("Error approving show", error);
      alert("Failed to approve show.");
    }
  };

  // Open modal on Book Now
  function handleBookShow(e) {
    e.preventDefault();
    setModalIsOpen(true);
  }

  // Close modal
  function closeModal() {
    setModalIsOpen(false);
  }

  // Track seat selection
  function handleSelectionChange(selectedSeatsArray) {
    setSelectedSeats(selectedSeatsArray);
  }

  function handleConfirmBooking() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    fetch("https://adalaide-backend-1747617833788.azurewebsites.net/email/sendBookingEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        seats: selectedSeats,
        email: userDetails.email,
        showId: formData.id,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to send email");
        return res.json();
      })
      .then(() => {
        alert("Booking confirmed! Email sent.");
        setModalIsOpen(false);
      })
      .catch((error) => {
        alert("Booking confirmed, but failed to send email.");
        setModalIsOpen(false);
        console.error(error);
      });
  }

  return (
    <div className="show-card">
      <a href="#" className="show-link">
        <div className="show-image-wrapper">
          <div
            className="show-image"
            style={{ backgroundImage: `url(${show.imageUrl})` }}
          ></div>
        </div>
        <div className="show-content">
          <div className="show-title">{show.title}</div>
          <div className="show-meta">
            <span className="show-location">{show.location}</span> |{" "}
            <span className="show-date">{show.startDate}</span>
            <span className="show-date">{show.endDate}</span>
            {isGetInvolvedClicked ? (
              <input
                type="text"
                className="show-date"
                value={formData.noOfSeats}
                onChange={handleSeats}
              />
            ) : (
              <span className="show-date">{show.noOfSeats}</span>
            )}
          </div>
          <div className="show-description">
            <span className="quote">{show.description}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5px",
            }}
          >
            {isAdminLogged && (
              <>
                <input
                  type="button"
                  onClick={handleEdit}
                  className="edit-button common"
                  value="Edit"
                />
                {isGetInvolvedClicked && (
                  <input
                    type="button"
                    onClick={handleApprove}
                    className="delete-button common"
                    value="APPROVE"
                  />
                )}
                <input
                  type="button"
                  onClick={handleDelete}
                  className="delete-button common"
                  value="Delete"
                />
              </>
            )}

            {!isAdminLogged && (
              <input
                type="button"
                onClick={handleBookShow}
                className="book-now-button common"
                value="Book Now"
              />
            )}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Select Seats"
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "90vw",
                maxHeight: "90vh",
                overflow: "auto",
              },
            }}
          >
            <h2>Select Your Seats for {show.title}</h2>

            <CustomSeatSelector
              noOfSeats={show.noOfSeats}
              onSelectionChange={handleSelectionChange}
              showId={formData.id}
            />

            <div style={{ marginTop: 20, textAlign: "right" }}>
              <button onClick={closeModal} style={{ marginRight: 10 }}>
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                disabled={selectedSeats.length === 0}
              >
                Confirm Booking
              </button>
            </div>
          </Modal>
        </div>
      </a>
    </div>
  );
};

export default ShowCard;
