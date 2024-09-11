import React, { useReducer, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { calculateCosts } from '../services/bookingServices';
import ReservationSummary from '../components/ReservationSummary';
import ReservationNumber from '../components/ReservationNumber';
import useReservation from '../hooks/useReservation';
import { FaUser, FaChild } from 'react-icons/fa';
import ErrorMessage from '../components/ErrorMessage';
import HotelInfo from '../components/HotelInfo';
import RoomsInfo from '../components/RoomsInfo';
import useLoadHotelData from '../hooks/useLoadHotelData';
import DateInput from '../components/DateInput';
import NumberInput from '../components/NumberInput';
import useDateValidation from '../hooks/useDateValidation';

const initialState = {
  checkInDate: "",
  checkOutDate: "",
  adults: 2,
  children: 0,
  totalNights: 0,
  totalRoomCost: 0,
  finalTotalCost: 0,
  globalError: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COSTS':
      return {
        ...state,
        totalNights: action.payload.totalNights,
        totalRoomCost: action.payload.totalRoomCost,
        finalTotalCost: action.payload.finalTotalCost,
      };
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_GLOBAL_ERROR':
      return {
        ...state,
        globalError: action.payload,
      };
    default:
      return state;
  }
};

const ReservationReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const hotelId = queryParams.get("hotelId");
  const initialCheckInDate = queryParams.get("checkInDate") || "";
  const initialCheckOutDate = queryParams.get("checkOutDate") || "";
  const initialAdults = parseInt(queryParams.get("adults") || "2");
  const initialChildren = parseInt(queryParams.get("children") || "0");

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    checkInDate: initialCheckInDate,
    checkOutDate: initialCheckOutDate,
    adults: initialAdults,
    children: initialChildren,
  });

  const { hotel, error: hotelError } = useLoadHotelData(hotelId);
  const reservationNumber = useReservation(15 * 1000); // 15 seconds for testing
  const { errors, validate } = useDateValidation();

  // Calculate costs using useMemo
  const calculatedCosts = useMemo(() => {
    if (hotel && !errors.checkInDate && !errors.checkOutDate) {
      try {
        return calculateCosts(state.checkInDate, state.checkOutDate, hotel);
      } catch (err) {
        dispatch({ type: 'SET_GLOBAL_ERROR', payload: err.message });
        return { totalNights: 0, totalRoomCost: 0, finalTotalCost: 0 };
      }
    }
    return { totalNights: 0, totalRoomCost: 0, finalTotalCost: 0 };
  }, [state.checkInDate, state.checkOutDate, hotel, errors.checkInDate, errors.checkOutDate]);

  useEffect(() => {
    dispatch({
      type: 'SET_COSTS',
      payload: calculatedCosts,
    });
  }, [calculatedCosts]);

  // Handle input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    let parsedValue = name === 'adults' || name === 'children' ? parseInt(value) || 0 : value;

    if (name === 'checkInDate' || name === 'checkOutDate') {
      const rules = {};
      if (name === 'checkOutDate') {
        rules.minDate = state.checkInDate;
      }
      if (name === 'checkInDate') {
        rules.maxDate = state.checkOutDate;
      }
      validate(name, parsedValue, rules);
    }

    dispatch({ type: 'UPDATE_FIELD', field: name, value: parsedValue });
  }, [state.checkInDate, state.checkOutDate, validate]);

  // Handle reservation confirmation
  const handleConfirmReservation = () => {
    const reservationDetails = {
      checkInDate: state.checkInDate,
      checkOutDate: state.checkOutDate,
      adults: state.adults,
      children: state.children,
      totalNights: state.totalNights,
      totalRoomCost: state.totalRoomCost,
      finalTotalCost: state.finalTotalCost,
      hotel,
      reservationNumber,
    };
    navigate('/confirmation', { state: reservationDetails });
  };

  return (
    <div className="reservation-review-page">
      <h1 className="title">Review Your Reservation</h1>
      {hotelError && <ErrorMessage error={hotelError} />}
      {state.globalError && <ErrorMessage error={state.globalError} />}
      {hotel ? (
        <>
          <HotelInfo hotel={hotel} />
          {hotel.rooms.length > 0 && !hotelError ? (
            <RoomsInfo rooms={hotel.rooms} />
          ) : (
            !hotelError && <p>No rooms available for this hotel</p>
          )}
          <div className="reservation-details">
            <div className="block">
              <DateInput
                checkInDate={state.checkInDate}
                checkOutDate={state.checkOutDate}
                handleCheckInChange={(e) => handleInputChange({ target: { name: 'checkInDate', value: e.target.value } })}
                handleCheckOutChange={(e) => handleInputChange({ target: { name: 'checkOutDate', value: e.target.value } })}
                showCheckOut={true}
              />
              {errors.checkInDate && <ErrorMessage error={errors.checkInDate} />}
              {errors.checkOutDate && <ErrorMessage error={errors.checkOutDate} />}
            </div>

            <div className="block">
              <NumberInput
                label="Adults"
                name="adults"
                value={state.adults}
                onChange={handleInputChange}
                min="1"
                icon={FaUser}
              />
              <NumberInput
                label="Children"
                name="children"
                value={state.children}
                onChange={handleInputChange}
                min="0"
                icon={FaChild}
              />
            </div>
          </div>

          <ReservationSummary
            checkInDate={state.checkInDate}
            checkOutDate={state.checkOutDate}
            totalNights={state.totalNights}
            roomCostPerNight={hotel.room_cost_per_night}
            totalRoomCost={state.totalRoomCost}
            finalTotalCost={state.finalTotalCost}
            adults={state.adults}
            children={state.children}
          />
        </>
      ) : (
        <p>Loading reservation summary...</p>
      )}
      <ReservationNumber reservationNumber={reservationNumber} />
      <div className="confirm-button-container">
        <button className="confirm-reservation-btn" onClick={handleConfirmReservation}>Confirm Reservation</button>
      </div>
    </div>
  );
};

export default ReservationReviewPage;