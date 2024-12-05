import React from 'react';
import { Phone, Instagram, Facebook, MessageCircle, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <div className="space-y-4">
              {[
                {
                  icon: <Phone className="h-5 w-5" />,
                  text: '+91 9566749964',
                  href: 'tel:+919566749964',
                },
                {
                  icon: <MessageCircle className="h-5 w-5" />,
                  text: 'WhatsApp',
                  href: 'https://wa.me/919566749964',
                },
                {
                  icon: <Instagram className="h-5 w-5" />,
                  text: 'Follow on Instagram',
                  href: 'https://instagram.com/senthil__builders',
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  text: 'senthilbuildersnamakkal@gmail.com',
                  href: 'mailto:senthilbuildersnamakkal@gmail.com',
                },
              ].map((contact) => (
                <a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.icon}
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Office Address</h3>
            <p className="text-gray-600">
              4/103E, Anna Nagar<br />
              Reddipatty (PO)<br />
              Namakkal (DT)<br />
              Tamil Nadu - 637001
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}