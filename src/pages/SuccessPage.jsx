// pages/SuccessPage.js
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  const bookingData = useSelector((state) => state.booking);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-white ">
      {/* Top Section: Booking Details and Success Message */}
      <div className="flex flex-col items-center justify-between w-full p-6 bg-gray-100 md:flex-row md:p-10">
        {/* Left Section: User Details */}
        <div className="flex flex-col w-full space-y-2 md:w-1/2">
          <h2 className="text-xl font-bold text-gray-800">
            {bookingData.name}
          </h2>
          <p className="text-gray-600">+91 - {bookingData.phone}</p>
          <p className="text-gray-600">{bookingData.email}</p>
          <p className="text-gray-600">
            {bookingData.adults} Adult{bookingData.adults > 1 ? "s" : ""} and{" "}
            {bookingData.children} Child{bookingData.children > 1 ? "ren" : ""}
          </p>
        </div>

        {/* Right Section: Order Complete */}
        <div className="flex items-center w-full text-center md:w-1/2">
          <div className="flex items-center">
            <FaCheckCircle className="mb-2 text-green-500 text-8xl" />
            <div className="flex flex-col ml-4 text-left">
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                Order Complete
              </h3>
              <span>Have questions? </span>
              <a href="#" className="text-blue-500 ">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Booking Summary Section */}
      <div className="flex items-center justify-between w-full max-w-4xl p-6 -mt-6 bg-white rounded-lg shadow-lg md:p-8">
        {/* Check-In Date */}
        <div className="flex flex-col items-center text-center">
          <span className="text-sm text-gray-500">CHECK-IN</span>
          <span className="text-lg font-semibold text-gray-800">
            {bookingData.checkInDate}
          </span>
        </div>

        {/* Check-Out Date */}
        <div className="flex flex-col items-center px-8 text-center border-l border-r">
          <span className="text-sm text-gray-500">CHECK-OUT</span>
          <span className="text-lg font-semibold text-gray-800">
            {bookingData.checkOutDate}
          </span>
        </div>

        {/* Number of Rooms */}
        <div className="flex flex-col items-center text-center">
          <span className="text-sm text-gray-500">ROOMS</span>
          <span className="text-lg font-semibold text-gray-800">
            {bookingData.rooms}
          </span>
        </div>

        {/* Total Amount */}
        <div className="flex flex-col items-center px-6 py-3 text-center text-white bg-blue-500 rounded-md">
          <span className="text-lg font-semibold">₹ {bookingData.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
