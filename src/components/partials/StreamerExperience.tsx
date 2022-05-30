import Image, { StaticImageData } from 'next/image';
import eventIcon from '../../../public/elements/streamer/EVENTS.png';
import cardPlayEarnIcon from '../../../public/elements/streamer/CARD-PLAY-EARN.png';
import { GradientText } from './GradientText';

export const StreamerExperiences = () => (
  <div className="flex min-h-[70vh] flex-1 bg-[#222222] pb-20">
    <div
      className={`
        m-auto flex max-w-xs flex-1 flex-col items-center justify-around
        gap-y-16 gap-x-8 md:max-w-xl md:flex-row lg:max-w-7xl lg:gap-x-0
      `}
    >
      <Experience
        icon={eventIcon}
        title={
          <span>
            Create <GradientText className="font-semibold">Exclusive</GradientText> Events
          </span>
        }
        description={`
          We will provide you with the toolbox to generate unique events for your community.
          YOU decide who can join the events that YOU created!
          Reward you loyaliest fans with engaging and interactive experiences.
        `}
      />
      <Experience
        icon={cardPlayEarnIcon}
        title={
          <span>
            Play & <GradientText className="font-semibold">Earn</GradientText>
          </span>
        }
        description={`
          Let your audience play games while you're streaming!
          Our first game: Fantasy Leagues!
          Entertain your community with your in-game actions and boost their score with crazy performances!
          Show them who's the best!
        `}
      />
    </div>
  </div>
);

const Experience = ({
  icon,
  title,
  description,
}: {
  icon: StaticImageData;
  title: React.ReactNode;
  description: string;
}) => (
  <div className="flex max-w-sm flex-1 flex-col items-center 2xl:gap-y-16">
    <Image src={icon} layout="fixed" width={150} height={150} />
    <p className="text-xl font-medium 2xl:text-3xl">{title}</p>
    <p className="pt-4 text-center text-lg text-[#B8B8B8] 2xl:text-xl">{description}</p>
  </div>
);