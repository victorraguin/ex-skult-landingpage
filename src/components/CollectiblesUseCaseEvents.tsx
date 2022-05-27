/* eslint-disable security/detect-object-injection */
/* eslint-disable max-len */
import { GradientText } from './partials/GradientText';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useSwipe } from 'beautiful-react-hooks';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export const CollectiblesUseCaseEvents = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="flex flex-1 justify-center bg-[#222222] pb-12 pt-40 sm:pt-28">
      <div className="flex max-w-xs flex-col gap-y-8 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
        <Title />
        <Description />
        <Carousel activeItem={activeItem} onChange={setActiveItem} />
        <legend className="space-y-4">
          <h4 className="flex h-14 text-center align-middle text-xl">{events[activeItem].name}</h4>
          <p className="h-16 text-[#B8B8B8]">{events[activeItem].description}</p>
        </legend>

        <p className="text-center text-2xl text-[#B8B8B8]">
          Your cards can unlock exclusive events created by your favorite Streamers!
        </p>
      </div>
    </div>
  );
};

const Title = () => (
  <div className="flex flex-row items-center justify-center">
    <img alt="img here" />
    <h3 className="text-3xl">
      Participate in <GradientText>Exclusive Events</GradientText>
    </h3>
  </div>
);

const Description = () => (
  <p className="text-[#B8B8B8]">
    Drops, giveaways, exclusive content, in real life events... Everything is possible! Streamers can create any kind of
    experiences they want and make their commu- nity participate to them! Your cards can unlock exclusive events created
    by your favorite Streamers!
  </p>
);

const Carousel = ({ activeItem, onChange }: { activeItem: number; onChange: Dispatch<SetStateAction<number>> }) => {
  const prevItemIdx = (activeItem === 0 ? events.length : activeItem) - 1;
  const nextItemIdx = (activeItem + 1) % 3;
  const items = [events[prevItemIdx], events[activeItem], events[nextItemIdx]];

  const swipeRef = useRef<HTMLDivElement>(null);
  const swipeState = useSwipe(swipeRef);

  useEffect(() => {
    if (swipeState.swiping) return;

    if (swipeState.direction === 'left') {
      onChange(v => (v + 1) % events.length);
    } else if (swipeState.direction === 'right') {
      onChange(v => (v === 0 ? events.length : v) - 1);
    }
  }, [swipeState]);

  return (
    <div ref={swipeRef} className="relative flex flex-row items-center gap-x-4">
      <button
        onTouchEnd={() => onChange(v => (v === 0 ? events.length : v) - 1)}
        onClick={() => onChange(v => (v === 0 ? events.length : v) - 1)}
      >
        <ArrowBackIosOutlinedIcon className="fill-current text-[#B8B8B8]" />
      </button>
      {items.map((item, idx) => (
        <EventItem key={idx} item={item} isActive={idx === 1} />
      ))}
      <button
        onTouchEnd={() => onChange(v => (v + 1) % events.length)}
        onClick={() => onChange(v => (v + 1) % events.length)}
      >
        <ArrowForwardIosOutlinedIcon className="fill-current text-[#B8B8B8]" />
      </button>
    </div>
  );
};

const EventItem = ({ item, isActive }: { item: Event; isActive: boolean }) => {
  return (
    <div className={`${!isActive ? 'hidden' : 'flex'} flex-col lg:flex`}>
      <Image src={item.image} layout="intrinsic" width={isActive ? 250 : 150} height={isActive ? 250 : 150} />
    </div>
  );
};

type Event = {
  image: string;
  name: string;
  description: string;
  social?: string;
};

const events: Event[] = [
  {
    image: '/rocketleague.webp',
    name: 'Community training  : Rocket League',
    description:
      'Join us for the first ever eSport training session with Rocket League! We will be playing against each others!',
  },
  {
    image: '/iryanne.png',
    name: 'Community raid : World of Warcraft',
    description: 'I need 10 mates for the Onyxia Lair Raid! The first 10 to check-in can team-up with me and we GO!',
    social: 'https://www.twitch.tv/iryanne',
  },
  {
    image: '/sackzi_card.png',
    name: 'Sackzi',
    description: 'Lorem ipsum',
  },
];
