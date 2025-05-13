import React, { useEffect, useState } from 'react';
import '../styles/showcard.css';
import { BsDisplay } from 'react-icons/bs';
import axios from 'axios';

const ShowCard = ({ show, getShows, isGetInvolvedClicked }) => {
  const [isAdminLogged, setIsAdminLogged] = useState(false);

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
    status: show.status
  });
  const [seats, setSeats] = useState(show.noOfSeats)
   const[userId,setUserId]=useState(0)
  useEffect(() => {
    const user = localStorage.getItem("role");
    setUserId(user.id)
    if (user == "admin") {
      setIsAdminLogged(true)
    }
    console.log(user)
  }, [])
  function handleEdit(e) {
    e.preventDefault();
    console.log("Edit button clicked")
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(show);
    console.log("Delete button clicked");

    try {
      // Make sure the URL is correct
      const result = await axios.delete(`http://localhost:8081/show/deleteShow/${show.id}`);
      console.log("Delete result status", result.status);
      getShows()
    } catch (error) {
      console.error("Error deleting show", error);
    }
  };
  function handleBookShow(e) {
    e.preventDefault();
    console.log("book button clicked")
  }
  function handleSeats(e) {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      noOfSeats: e.target.value
    }))
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
      const result = await axios.put(`http://localhost:8081/show/updateShowStatus`, updatedData);
      console.log("Approve result status", result.status);
      alert("Show approved successfully!");
      getShows();
    } catch (error) {
      console.error("Error approving show", error);
      alert("Failed to approve show.");
    }
  };


  return (
    <div className="show-card">
      <a href="#" className="show-link">
        <div className="show-image-wrapper">
          <div className="show-image" style={{ backgroundImage: `url(${show.imageUrl})` }}></div>
        </div>
        <div className="show-content">
          <div className="show-title">{show.title}</div>
          <div className="show-meta">
            <span className="show-location">{show.location}</span> |{' '}
            <span className="show-date">{show.startDate}</span>
            <span className="show-date">{show.endDate}</span>
            {isGetInvolvedClicked ? (
              <input type="text" className="show-date" value={formData.noOfSeats} onChange={handleSeats} />) : (<span className="show-date">{show.noOfSeats}</span>)}
          </div>
          <div className="show-description">
            <span className="quote">{show.description}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>
            {isAdminLogged && (
              <>
                <input type="button" onClick={handleEdit} className="edit-button common" value="Edit" />
                {isGetInvolvedClicked && <input type="button" onClick={handleApprove} className="delete-button common" value="APPROVE" />}
                <input type="button" onClick={handleDelete} className="delete-button common" value="Delete" />
              </>
            )}

            {!isAdminLogged && (
              <input type="button" onClick={handleBookShow} className="book-now-button common" value="Book Now" />
            )}
          </div>


        </div>
      </a>
    </div>
  );
};

export default ShowCard;
