
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing icons
import img from '../assets/img2.jpg'
const HeroSection = () => (
  <section className="  md:flex  md:justify-between">
    <div className='bg-gray-100 md:w-1/2 pl-6'>
      <h2 className="text-5xl font-normal mt-6 text-black">Work from <br/> ladakh</h2>
      <p className="text-gray-600 py-4">India’s first true digital tourism ecosystem</p>
      <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
        </a>
      </div>
    </div>
    <img src={img} alt='ladakh' className='md:w-1/2 object-contain' />
    
  </section>
);

export default HeroSection;
