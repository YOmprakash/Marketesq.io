// pages/SuccessPage.js
import { useSelector } from "react-redux";

const SuccessPage = () => {
  const bookingData = useSelector((state) => state.booking);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-green-600">Booking Successful!</h1>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Booking Details</h2>
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Email:</strong> {bookingData.email}</p>
        <p><strong>Phone:</strong> {bookingData.phone}</p>
        <p><strong>Adults:</strong> {bookingData.adults}</p>
        <p><strong>Children:</strong> {bookingData.children}</p>
        <p><strong>Rooms:</strong> {bookingData.rooms}</p>
        <p><strong>Check-In Date:</strong> {bookingData.checkInDate}</p>
        <p><strong>Check-Out Date:</strong> {bookingData.checkOutDate}</p>
        <p><strong>Total Amount:</strong> ₹{bookingData.amount}</p>
      </div>
    </div>
  );
};

export default SuccessPage;
