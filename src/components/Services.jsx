import React from 'react';

const ServicesSection = () => (
  <section id="services" className="py-8 px-6 bg-gray-100">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Services</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        "High Speed Internet",
        "Healthy Meals",
        "Homestay",
        "Transportation",
        "Food Delivery",
        "Tourist Guide",
        "Library",
        "Job Assistance"
      ].map(service => (
        <div key={service} className="bg-white p-4 shadow rounded-lg">
          <h3 className="font-bold text-gray-700">{service}</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
