import React from 'react';
import { Building2, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Senthil Builders</span>
            </div>
            <p className="mt-4 text-gray-400">
              Building trust through quality construction since 2000
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#planning" className="text-gray-400 hover:text-white">Planning</a></li>
              <li><a href="#designs" className="text-gray-400 hover:text-white">Designs</a></li>
              <li><a href="#approval" className="text-gray-400 hover:text-white">Plan Approval</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic space-y-2">
              4/103E, Anna Nagar<br />
              Reddipatty (PO)<br />
              Namakkal (DT)<br />
              Tamil Nadu - 637001<br />
              <a href="tel:+919566749964" className="hover:text-white flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 9566749964
              </a>
              <a href="mailto:senthilbuildersnamakkal@gmail.com" className="hover:text-white flex items-center gap-2">
                <Mail className="h-4 w-4" />
                senthilbuildersnamakkal@gmail.com
              </a>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Senthil Builders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}