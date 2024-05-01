import { useState } from "react";
import React, { useReducer } from "react";
import "../style/BookingForm.css";
import { useNavigate } from 'react-router-dom';



const initializeTimes = () => [
    { id: 1, name: "17:00", disabled: false },
    { id: 2, name: "18:00", disabled: false },
    { id: 3, name: "19:00", disabled: false },
    { id: 4, name: "20:00", disabled: false },
    { id: 5, name: "21:00", disabled: false },
    { id: 6, name: "22:00", disabled: false },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_Time":
        const updateTimes = (options, time) =>
          options.map((option) =>
            option.name === time
              ? { ...option, disabled: true }
              : option
          );
        return updateTimes(state, action.payload);
      default:
        return state;
    }
  };

function BookingForm(){

    const [date,setDate]=useState('');
    const [time, setTime] = useState("");
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value);
      }

      const handleGuestsChange = (e) => {
        setGuests(e.target.value);
      }

      const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
      }

    const allTimeSelected = availableTimes.every((option) => option.disabled);

    const navigate = useNavigate();

    const handleButtonClick = (e) => {
        e.preventDefault();
        dispatch({ type: "SELECT_Time", payload: time });
        if(guests>=1){
            navigate('/ConfirmedBooking', { state: { time, date, guests,occasion } });

        }else{
            // alert('Please enter a valid number of people.');
            return ;
        };
        setTime("");
        setDate('');
      };

    return(
        <>
        <section className="booking-layer">
        <form className="form-booking" onSubmit={handleButtonClick}>

            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="res-date" value={date} onChange={handleDateChange} required />

            <label htmlFor="res-time">Choose time</label>
            <select
            id="res-time"
            name="res-time"
            value={time}
            onChange={handleTimeChange} required>
                <option value="">-- Available times --</option>
                {availableTimes.map((option) => (
                <option key={option.id} value={option.name} disabled={option.disabled}>
                {option.name}
                </option>
            ))}
            </select>
            {allTimeSelected && <p className="time-selected">Sorry, all Time options have been selected.</p>}


            <label htmlFor="guests">Number of guests</label>
            <input className="guests-nu" type="number" placeholder="0" min="0" max="10" id="guests" name="guests" value={guests} onChange={handleGuestsChange} required />
            {(guests === "0" || guests < 0 || guests > 10) && (<p className="time-selected">Please enter a valid number of people!</p>
            )}
            <label htmlFor="occasion">Occasion</label>
            <select className="occasion" id="occasion" name="occasion" value={occasion} onChange={handleOccasionChange} required>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
            </select>

            <input   className="submit-btn"  type="submit" value="Make Your reservation" />
        </form>
        <section className="section-p">
            <h2 className="h-booking">MAKE YOUR RESERVATION</h2>
            <p className="p-booking">Welcome to our restaurant! Our expert chefs use fresh
                ingredients to create unforgettable dishes that will leave you
                wanting more. Join us for a memorable meal today.
            </p>
        </section>
        </section>
        </>
    );
}
export default BookingForm;