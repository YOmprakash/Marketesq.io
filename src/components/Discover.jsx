// DiscoverSection.jsx
import React from 'react';
import om from '../assets/om.jpg'
import img2 from '../assets/img2.jpg'
const reviews = [
  {
    id: 1,
    name: 'Arjun Raghav',
    rating: 4,
    imageUrl: 'https://via.placeholder.com/50', // Replace with actual image URL
    review: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.',
  },
  {
    id: 2,
    name: 'Anand Solanki',
    rating: 4,
    imageUrl: 'https://via.placeholder.com/50', // Replace with actual image URL
    review: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.',
  },
  {
    id: 3,
    name: 'Arjun Raghav',
    rating: 4,
    imageUrl: 'https://via.placeholder.com/50', // Replace with actual image URL
    review: 'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.',
  },
];

const DiscoverSection = () => {
  return (
    <section className="px-4 py-12 mt-12 text-center bg-white">
      <h2 className="mb-8 text-3xl font-bold">Discover</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="w-full max-w-sm p-6 text-left bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4 sh">
              <img
                src={om}
                alt={`${review.name}`}
                className="object-cover w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{review.name}</h3>
                <div className="text-yellow-500">⭐⭐⭐⭐</div>
              </div>
            </div>
            <p className="text-gray-600">
              {review.review.substring(0, 150)}...{' '}
              <a href="/" className="text-blue-600">
                read more
              </a>
            </p>
          </div>
        ))}
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src={img2} // Replace with actual image URL
            alt="Ladakh Landscape"
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Anand Solanki</h3>
            <div className="mb-2 text-yellow-500">⭐⭐⭐⭐</div>
            <p className="text-gray-600">
              I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right
              from picking us up at the airport to dropping us back there after a month, Urgan was
              very responsible and took good care of my friends and me.
              <a href="/" className="text-blue-600"> read more</a>
            </p>
          </div>
        </div>
       
      </div>
     
    </section>
  );
};

export default DiscoverSection;
