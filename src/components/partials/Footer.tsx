import React from 'react';

const Footer = () => {
  return (
    <div className="flex-auto border-b-2 border-white">
      <img className="h-20" src={`./skult-white.png`} alt="User" />
      <div className="flex justify-between">
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Social" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Social" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Social" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Social" />
        <div className="flex-col">
          <p>Enter your email</p>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
