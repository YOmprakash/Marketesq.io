
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import BookingForm from "./BookingForm";
import img from "../assets/img2.jpg";

const HeroSection = () => {
 

  return (
    <section className="relative px-12">
      <div className="md:flex md:justify-between">
        {/* Left Section */}
        <div className="block pl-8 bg-gray-100 md:w-1/2">
          <h2 className="text-5xl font-[500] leading-tight text-black mt-7">
            Work from <br /> ladakh
          </h2>
          <p className="py-4 font-semibold text-gray-700">
            India’s first true digital tourism ecosystem
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-4xl text-gray-700 hover:text-blue-800" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="text-[39px] text-gray-700" />
            </a>
          </div>
        </div>
        
        {/* Right Section Image */}
        <img src={img} alt="Ladakh" className="block object-contain md:w-1/2" />
      </div>

      {/* Booking Form */}
      <BookingForm />
      
    </section>
  );
};

export default HeroSection;
