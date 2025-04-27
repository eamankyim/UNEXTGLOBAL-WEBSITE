import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // Import the calendar styles

const CalendarModal = ({ isOpen, closeModal, handleDateTimeSelection }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      handleDateTimeSelection(selectedDate, selectedTime);
      closeModal();
    } else {
      alert('Please select both a date and a time.');
    }
  };

  return (
    isOpen && (
      <div className="calendar-modal-overlay">
        <div className="calendar-modal">
          <div className="calendar-modal-header">
            <button className="close-button" onClick={closeModal}>X</button>
          </div>

          <h3>Select a date and time</h3>

          {/* Calendar Component */}
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />

          <h4>Select Time</h4>
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
          />

          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    )
  );
};

export default CalendarModal;
