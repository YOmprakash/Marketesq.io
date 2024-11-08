// pages/BookingPage.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBookingData } from "../store/slices/bookingSlice";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";

const BookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookingData = useSelector((state) => state.booking);

  const [name, setName] = useState(bookingData.name);
  const [email, setEmail] = useState(bookingData.email);
  const [phone, setPhone] = useState(bookingData.phone);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [amount, setAmount] = useState(12430);

  // Helper functions
  const updateAdults = (delta) => {
    setAdults((prev) => Math.max(1, prev + delta)); // Minimum 1 adult
  };

  const updateChildren = (delta) => {
    setChildren((prev) => Math.max(0, prev + delta)); // Minimum 0 children
  };

  const updateRooms = (delta) => {
    setRooms((prev) => Math.max(1, prev + delta)); // Minimum 1 room
  };

  const handleCheckInDateChange = (e) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);

    // Ensure check-out date is not earlier than check-in date
    if (checkOutDate && selectedDate >= checkOutDate) {
      setCheckOutDate("");
    }
  };

  const handleCheckOutDateChange = (e) => {
    const selectedDate = e.target.value;
    if (!checkInDate || selectedDate > checkInDate) {
      setCheckOutDate(selectedDate);
    } else {
      alert("Check-out date must be after the check-in date.");
    }
  };

  // Calculate the total amount
  useEffect(() => {
    const basePrice = 10000;
    const adultPrice = 2000 * adults;
    const childPrice = 1000 * children;
    const roomPrice = 3000 * rooms;
    setAmount(basePrice + adultPrice + childPrice + roomPrice);
  }, [adults, children, rooms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setBookingData({
        name,
        email,
        phone,
        adults,
        children,
        amount,
        rooms,
        checkInDate,
        checkOutDate,
      })
    );
    navigate("/success"); // Replace with actual route as needed
  };

  return (
    <div className="flex justify-center h-full bg-white">
      <div className="w-full p-8 max-w-[1200px] bg-gray-100">
        <form onSubmit={handleSubmit} className="relative pb-12 space-y-6">
          {/* Personal Information Section */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="p-4 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="p-4 bg-white rounded-lg focus:outline-none"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
              className="p-4 bg-white rounded-lg focus:outline-none"
            />

            {/* Adults and Children Controls */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center w-full p-4 bg-white rounded-lg">
                <button type="button" onClick={() => updateAdults(-1)}>
                  <CiCircleMinus />
                </button>
                <span className="px-2 text-lg font-semibold">{adults}</span>
                <button type="button" onClick={() => updateAdults(1)}>
                  <FaCirclePlus />
                </button>
                <span className="ml-2 text-gray-700">
                  Adult{adults > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center w-full p-4 bg-white rounded-lg">
                <button type="button" onClick={() => updateChildren(-1)}>
                  <CiCircleMinus />
                </button>
                <span className="px-2 text-lg font-semibold">{children}</span>
                <button type="button" onClick={() => updateChildren(1)}>
                  <FaCirclePlus />
                </button>
                <span className="ml-2 text-gray-700">Children</span>
              </div>
            </div>
          </div>

          {/* Dates and Rooms */}
          <div className="absolute flex items-center justify-between w-full max-w-[900px] py-8 px-8 transform -translate-x-1/2 bg-white rounded-lg shadow left-1/2">
            <div>
              <label className="block font-semibold text-gray-700">
                CHECK-IN
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={handleCheckInDateChange}
                required
                className="px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                CHECK-OUT
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
                required
                className="px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="text-center">
              <label className="block font-semibold text-gray-700">ROOMS</label>
              <div className="flex items-center justify-center mt-1 space-x-2">
                <button type="button" onClick={() => updateRooms(-1)}>
                  <CiCircleMinus />
                </button>
                <span>{rooms}</span>
                <button type="button" onClick={() => updateRooms(1)}>
                  <FaCirclePlus />
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center justify-center w-full py-3 mt-4 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                ₹ {amount}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
