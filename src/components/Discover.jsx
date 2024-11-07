import React from 'react';

const DiscoverSection = () => (
  <section id="discover" className="py-8 px-6 bg-white">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Discover</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <h3 className="font-bold text-gray-800">Ayan Raghaav</h3>
        <p className="text-gray-600">I’m exploring the rich beauty...</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <h3 className="font-bold text-gray-800">Anand Solanki</h3>
        <p className="text-gray-600">My experience in Ladakh...</p>
      </div>
    </div>
  </section>
);

export default DiscoverSection;
