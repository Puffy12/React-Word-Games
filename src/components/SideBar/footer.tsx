import React from 'react';

const Footer = () => {
  return (
    <footer className="px-4 text-center text-white bg-gray-700">
      <small className="mb-4 block text-xs">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </small>
      <p className="mb-4 text-s">
        <span className="font-semibold">About this website:</span> built with
        Vite, React.js, CSS, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
}

export default Footer;