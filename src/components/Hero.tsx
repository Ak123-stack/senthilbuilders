import React from 'react';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Building Your Dreams Into Reality
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Professional construction services led by ER. Thamarai Selvan B.E
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            'Expert Construction Management',
            'Quality Craftsmanship',
            'Timely Project Delivery',
          ].map((point) => (
            <div key={point} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900">{point}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}