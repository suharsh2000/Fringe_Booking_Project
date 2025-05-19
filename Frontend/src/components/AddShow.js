import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/show.css';

const AddShowForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    startDate: '',
    endDate: '',
    noOfSeats: '',
    time: '',
    location: '',
    userId: '',
    status: 'INPROGRESS'
  });
 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    console.log(typeof(user.id))
    if (user && user.id) {
      setFormData(prev => ({
        ...prev,
        userId: user.id
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const result = await axios.post('https://fringe-booking-project.vercel.app/show/addShow', formData);
      if (result.status = 200) {
        console.log(result.data)
        alert('Show added successfully!');
        setFormData({
          title: '',
          description: '',
          imageUrl: '',
          startDate: '',
          endDate: '',
          noOfSeats: '',
          time: '',
          location: ''
        });
      }
    } catch (error) {
      console.error('Error adding show:', error);
      alert('Failed to add show');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-show-form">
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
      <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} required />
      <input name="endDate" type="date" value={formData.endDate} onChange={handleChange} required />
      <input name="time" type="time" value={formData.time} onChange={handleChange} required />
      <input name="noOfSeats" placeholder="No of seats required" type="text" value={formData.noOfSeats} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <button type="submit">Add Show</button>
    </form>
  );
};

export default AddShowForm;
