import React from 'react';

const Header = () => {
  return (
    <header className=" border-b-2  border-white bg-black">
      <div className="mx-32 flex h-24 justify-between">
        <img className="h-20" src={`./skult-white.png`} alt="User" />
        <button>I am a streamer!</button>
      </div>
    </header>
  );
};

export default Header;
