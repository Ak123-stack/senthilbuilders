import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from './ui/Link';

export function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Senthil Builders</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home">Home</Link>
            <Link href="#planning">Planning</Link>
            <Link href="#designs">Designs</Link>
            <Link href="#approval">Plan Approval</Link>
            <Link href="#consulting">Consulting</Link>
            <Link href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}