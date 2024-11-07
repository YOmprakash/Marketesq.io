import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold text-[#000000]">Brisphere</div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex text-lg text-[#2e2e2e] font-semibold space-x-6">
          <a href="#home" >
            Discover
          </a>
          <a href="#discover" >
            Services
          </a>
          <a href="#about-us">
            About Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#home" className="block text-gray-700 px-4 py-2">
            Home
          </a>
          <a href="#discover" className="block text-gray-700 px-4 py-2">
            Discover
          </a>
          <a href="#about-us" className="block text-gray-700 px-4 py-2 ">
            About Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
