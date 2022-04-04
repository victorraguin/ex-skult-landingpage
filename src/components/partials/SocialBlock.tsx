import React from 'react';

const SocialBlock = () => {
  return (
    <div className="flex-auto border-b-2 border-white">
      <img className="m-auto h-40" src={`./skult-white.png`} alt="User" />
      <div className="flex justify-between">
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Social" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Social" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Social" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Social" />
      </div>
    </div>
  );
};

export default SocialBlock;
