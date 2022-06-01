/* eslint-disable security/detect-object-injection */
/* eslint-disable max-len */
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useSwipe } from 'beautiful-react-hooks';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { GradientText } from './GradientText';

export const CollectiblesUseCaseEvents = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="flex flex-1 justify-center bg-[#191919] pb-12 pt-48 sm:pt-44">
      <div className="flex max-w-xs flex-col gap-y-16 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
        <Title />
        <Description />
        <div className="h-96">
          <Carousel activeItem={activeItem} onChange={setActiveItem} />
          <legend className="pt-12 text-center">
            <h4 className="flex h-14 justify-center text-center align-middle text-lg sm:text-xl">
              {events[activeItem].name}
            </h4>
            <p className="h-16 text-xs italic text-[#B8B8B8] sm:text-sm">{events[activeItem].description}</p>
          </legend>
        </div>

        <GradientText className="text-center text-2xl">Watching is over. It’s time to participate</GradientText>
      </div>
    </div>
  );
};

const Title = () => (
  <div className="flex flex-row items-center justify-center">
    <h3 className="text-3xl font-semibold text-[#FCC000]">Participate in Exclusive Events</h3>
  </div>
);

const Description = () => (
  <p className="h-36 text-[#B8B8B8]">
    Your cards can unlock immersive events created by your favorite Streamers, exclusively for you! Game sessions,
    drops, giveaways, exclusive content, in real life events... Everything is possible!
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
    <div ref={swipeRef} className="relative flex flex-row items-center justify-center gap-x-4">
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
      <Image
        src={item.image}
        layout="intrinsic"
        width={isActive ? 250 : 150}
        height={isActive ? 250 : 150}
        className="rounded"
        alt="Item"
      />
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
    image: '/wow.png',
    name: 'World of Warcraft - Community raid',
    description:
      '“I need 10 mates for the Black Temple raid in World of Warcraft! Silver Card holders: I need YOU! Come and join me! Let’s play together during my stream session this weekend!”',
    social: 'https://www.twitch.tv/iryanne',
  },
  {
    image: '/rtx3080.png',
    name: 'Graphics card to win!',
    description:
      '“Raffle! I have a RTX 3080 Ti to give to one of my card holders! Enter the raffle and get a chance to bring it home! The winner will be drawn from all those that will check-in with their card!”',
  },
  {
    image: '/worlds.png',
    name: 'Come with me to the Worlds!',
    description:
      '“I’m playing at the League of Legends Worlds and I can bring one person with me! YOU, Gold Card holder! Come with me and follow the event from the backstage!”',
  },
];
