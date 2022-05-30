import React from 'react';
import { CollectiblesUseCaseEvents } from './CollectiblesUseCaseEvents';
import { CollectiblesUseCaseLeagues } from './CollectiblesUseCaseLeagues';
import { GradientText } from './GradientText';

const CollectiblesUseCaseBlock = () => {
  return (
    <div className="relative flex min-h-[90vh] flex-1 flex-col text-[#E7E7E7] sm:flex-row sm:gap-y-8">
      <h2 className="absolute inset-0 h-max text-center text-5xl">
        What can you do with <GradientText>your Cards</GradientText>?
      </h2>
      <CollectiblesUseCaseEvents />
      <CollectiblesUseCaseLeagues />
    </div>
  );
};

export default CollectiblesUseCaseBlock;
