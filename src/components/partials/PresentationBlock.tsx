import React from 'react';

const PresentationBlock = () => {
  return (
    <div className="border-b-2 border-white">
      <h1>Every Game is a step further towards Victory!</h1>

      <div className="m-auto flex justify-around">
        <div className="w-1/2">
          <video controls autoPlay loop src="https://www.youtube.com/embed/dQw4w9WgXcQ">
            <track kind="captions"></track>
          </video>
        </div>
        <ul>
          Streamer Fantasy Leagues
          <li>
            <p>Collect cards of your favorites Streamers</p>
          </li>
          <li>
            <p>Build your own Team</p>
          </li>
          <li>
            <p>Draft your Squad</p>
          </li>
          <li>
            <p>Challenge other Leaguers</p>
          </li>
          <li>
            <p>Win rewards</p>
          </li>
        </ul>
      </div>
      <h2>Supported Games</h2>
      <div className="flex justify-between">
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
        <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
      </div>
      <p>And more coming soon!</p>
    </div>
  );
};

export default PresentationBlock;
