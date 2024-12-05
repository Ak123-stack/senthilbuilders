import React from 'react';
import { CheckCircle } from 'lucide-react';

const approvalPoints = [
  'Complete documentation assistance for building permits',
  'Compliance with local building codes and regulations',
  'Coordination with municipal authorities',
  'Fast-track approval process',
  'Technical drawing preparation',
  'Structural stability certification',
];

export function PlanApproval() {
  return (
    <section id="approval" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Plan Approval Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {approvalPoints.map((point) => (
            <div key={point} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}