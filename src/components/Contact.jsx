import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Me</h2>
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-8 mb-4">
            <a
              href="https://github.com/RishabThakur05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href="mailto:rishabthakur665@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaEnvelope className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishab-thakur-a521a124b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="tel:+916387989439"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaPhone className="text-4xl" />
            </a>
          </div>
          <div className="text-gray-700">
            <p className="mb-2">Email: rishabthakur665@gmail.com</p>
            <p>Phone: +91 6387989439</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;