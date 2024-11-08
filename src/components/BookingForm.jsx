import { useState } from "react";

import {Link} from 'react-router-dom'
import { FaMinus, FaPlus } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
const BookingForm = () => {
  const [rooms, setRooms] = useState(1);

  // Function to handle room count
  const handleRoomChange = (value) => {
    setRooms((prev) => Math.max(1, prev + value));
  };
  return (
    <div className="left-1/2 transform -translate-x-1/2 absolute flex items-center justify-between w-full px-8 py-6 mt-8 space-x-8 bg-white rounded-lg shadow-lg max-w-[900px] -bottom-12 ">
      <div className="relative flex flex-col items-center">
        <label className="text-lg font-semibold text-gray-700">CHECK-IN</label>
        <input
          type="date"
          className="mt-1 text-sm font-bold text-gray-700 focus:outline-none"
        />
      </div>
      <div className="border-l-2 border-gray-300 h-[100px]"></div>

      <div className="flex flex-col items-center">
        <label className="text-lg font-semibold text-gray-700">CHECK-OUT</label>
        <input
          type="date"
          className="mt-1 text-sm font-bold text-gray-700 focus:outline-none"
        />
      </div>
      <div className="border-l-2 border-gray-300 h-[100px]"></div>

      <div className="flex flex-col items-center">
        <label className="mb-1 text-lg font-semibold text-gray-700">ROOMS</label>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleRoomChange(-1)} className="outline-none">
            {<CiCircleMinus size={24}/>}
            </button>
          <span className="px-2 text-lg font-semibold text-gray-700">{rooms}</span>
          <button
            onClick={() => handleRoomChange(1)} className="outline-none">
            {<FaCirclePlus size={22} />}
            </button>
        </div>
      </div>
      <Link to='/booking'>
        <button className="px-12 py-4 font-semibold text-white bg-[#2667a8] rounded-lg hover:bg-blue-700">
          BOOK
        </button>
      </Link>
      
    </div>
  );
};

export default BookingForm;
