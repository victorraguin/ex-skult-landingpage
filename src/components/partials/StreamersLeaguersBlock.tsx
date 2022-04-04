/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const StreamersLeaguersBlock = () => {
  return (
    <div className="border-b-2 border-white">
      <h1 className="m-auto">Nobody is Left Behind!</h1>
      <div className="m-auto flex justify-around">
        <div className="bg-slate-900">
          <h2>Any Streamer</h2>
          <p>Develop you Community</p>
          <p>Get discovered thanks to a level-based League system: any Streamer can get an audience!</p>
          <p>Boost Engagement</p>
          <p> Grow your fan base and increase interactions with your followers. </p>
          <p>Earn Cash</p>
          <p>From your collectibles and your in-game actions. The better you play, the more valuable you are!</p>
          <button>I'm a Streamer!</button>
        </div>
        <div className="bg-slate-900">
          <h2>Leaguers</h2>
          <p>Get fun while watching Streams</p>
          <p>Discover the best Streamers and enroll them in your Team through their collectibles</p>
          <p>Play & Earn Rewards</p>
          <p>Draft your Squad weekly, challenge other Leaguers, and get rewarded</p>
          <p>Earn Cash</p>
          <p>Keep you team strong and sell other Streamers you don't need: earn cash from collectible trading</p>
          <button>I'm a Leaguer!</button>
        </div>
      </div>
    </div>
  );
};

export default StreamersLeaguersBlock;
