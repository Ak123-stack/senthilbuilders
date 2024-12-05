import React from 'react';

export function Planning() {
  return (
    <section id="planning" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Construction Planning</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            'Detailed Project Timeline',
            'Cost Estimation',
            'Material Planning',
            'Resource Allocation',
            'Quality Control',
            'Safety Measures',
          ].map((plan) => (
            <div key={plan} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{plan}</h3>
              <p className="text-gray-600">
                Professional planning ensures smooth execution of your construction project.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}