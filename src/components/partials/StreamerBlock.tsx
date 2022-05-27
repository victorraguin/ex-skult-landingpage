import React from 'react';
import { StreamerBenefits } from './StreamerBenefits';
import { StreamerExperiences } from './StreamerExperience';
import { StreamerInvitation } from './StreamerInvitation';
import { StreamerRanks } from './StreamerRanks';

const StreamerBlock = () => {
  return (
    <div className="h-full w-full bg-[#282828] pt-40 font-poppins sm:pt-60">
      <div className="min-h-full md:h-[60vh]">
        <Title />
        <StreamerBenefits />
      </div>

      <img src="/Page_breaker2.svg" alt="Page Breaker" className="w-full" />
      <StreamerExperiences />
      <img src="/Page_breaker1.svg" alt="Page Breaker" className="w-full" />
      <StreamerRanks />
      <div className="bg-gradient-to-r from-[#FFCC00] to-[#E323ff] pt-[4px]" />
      <StreamerInvitation />
    </div>
  );
};

export default StreamerBlock;

const Title = () => (
  <div className="flex flex-row flex-wrap items-baseline justify-center gap-x-2 pb-16">
    <img src="https://skult-assets.s3.eu-west-3.amazonaws.com/SKULT_logo.png" alt="SKULT Logo" className="h-10" />
    <div className="text-center font-poppins text-5xl font-light leading-none text-[#A9A9A9]">
      for
      <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text leading-none text-transparent">
        {' '}
        streamers
      </span>
    </div>
  </div>
);
