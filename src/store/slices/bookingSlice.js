// src/redux/slices/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    name: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0, 
    rooms: 1,    
    checkInDate: '', 
    checkOutDate: '', 
    amount: 12430,

  },
  reducers: {
    setBookingData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
