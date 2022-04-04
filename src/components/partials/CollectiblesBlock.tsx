/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const CollectiblesBlock = () => {
  return (
    <div className="border-b-2 border-white">
      <h1>The Collectibles</h1>
      <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />

      <div className="m-auto flex justify-around">
        <div className="flex flex-col">
          <div className=" flex flex-row">
            <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
            <p>
              <p>Collect</p>
              Create your fighting deck by collecting the cards of the best Streamers you can find! You'll need them to
              participate into the Leagues!
            </p>
          </div>
          <div className="flex flex-row">
            <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
            <p>
              <p>Trade</p>
              Trade with other Leaguers across the globe. Sell the cards you won't need: real cash is coming your way!
            </p>
          </div>
          <div className="flex flex-row">
            <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
            <p>
              <p>Compete</p>
              Draft your Squad and enter weekly Leagues. Your final score will depend on the real-world performances of
              your Streamers.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
            <p>
              <p>Support</p>
              Streamers receive a share every time a Leaguer buys one of his cards from SKULT. Are you a real fan? Then
              show them your love!
            </p>
          </div>
          <div className="flex flex-row">
            <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
            <p>
              <p>Unique & Counterfeit proof</p>
              Every card is a non-fungible token (NFT). The blockchain technology ensures its uniqueness and ownership
              security
            </p>
          </div>
          <div className="flex flex-row">
            <img src="https://i.imgur.com/qXZQZQJ.png" alt="Supported Games" />
            <p>
              <p>Earn</p>
              Coins, cards, rewards and free drops are all for grab! Watch out: you might be ending up winning someting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectiblesBlock;
