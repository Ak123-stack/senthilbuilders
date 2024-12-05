import React from 'react';

const designs = [
  {
    title: 'Modern Villa Design',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Contemporary luxury villa with open floor plan',
  },
  {
    title: 'Traditional Home',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Classic design with modern amenities',
  },
  {
    title: 'Apartment Complex',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-unit residential building',
  },
];

export function Designs() {
  return (
    <section id="designs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Designs</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <div key={design.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                <p className="text-gray-600">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}