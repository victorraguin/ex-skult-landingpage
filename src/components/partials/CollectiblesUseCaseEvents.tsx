/* eslint-disable security/detect-object-injection */
/* eslint-disable max-len */
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useSwipe } from 'beautiful-react-hooks';
import { useTranslation } from 'next-i18next';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { GradientText } from './GradientText';

export const CollectiblesUseCaseEvents = () => {
  const [activeItem, setActiveItem] = useState(1);
  const { t } = useTranslation('home');

  const events: Event[] = [
    {
      image: 'https://cdn.skult.gg/Landing+Page/wow.png',
      name: t('collectiblesUseCases.events.iryanne.name'),
      description: t('collectiblesUseCases.events.iryanne.description'),
      social: 'https://www.twitch.tv/iryanne',
      quote: '- Iryanne, WoW Streamer'
    },
    {
      image: 'https://cdn.skult.gg/Landing+Page/rtx3080.png',
      name: t('collectiblesUseCases.events.gpu.name'),
      description: t('collectiblesUseCases.events.gpu.description'),
      quote: '- WaieNot, Mutligaming Streamer'
    },
    {
      image: 'https://cdn.skult.gg/Landing+Page/worlds.png',
      name: t('collectiblesUseCases.events.worlds.name'),
      description: t('collectiblesUseCases.events.worlds.description'),
      quote: '- Midbeast, LoL Streamer'
    },
  ];

  return (
    <div className="flex flex-1 justify-center bg-[#191919] pb-12 pt-48 sm:pt-44">
      <div className="flex max-w-xs flex-col gap-y-16 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
        <Title />
        <Description />
        <div className="h-96">
          <Carousel activeItem={activeItem} onChange={setActiveItem} events={events} />
          <legend className="pt-12 text-center">
            <h4 className="flex h-14 justify-center text-center align-middle text-lg sm:text-xl">
              {events[activeItem].name}
            </h4>
            <p className="h-16 text-xs italic text-[#B8B8B8] sm:text-sm">{events[activeItem].description}</p>
            <p className="h-16 text-xs italic text-[#B8B8B8] sm:text-sm">{events[activeItem].quote}</p>
          </legend>
        </div>

        <GradientText className="text-center text-2xl font-bold">{t('collectiblesUseCases.catchphrase')}</GradientText>
      </div>
    </div>
  );
};

const Title = () => {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-row items-center justify-center">
      <h3 className="text-3xl font-semibold text-[#FCC000]">{t('collectiblesUseCases.events.title')}</h3>
    </div>
  );
};

const Description = () => {
  const { t } = useTranslation('home');

  return <p className="h-36 text-[#B8B8B8]">{t('collectiblesUseCases.events.description')}</p>;
};

const Carousel = ({
  activeItem,
  onChange,
  events,
}: {
  activeItem: number;
  onChange: Dispatch<SetStateAction<number>>;
  events: Event[];
}) => {
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

type Event = {
  image: string;
  name: string;
  description: string;
  social?: string;
  quote: string;
};

const EventItem = ({ item, isActive }: { item: Event; isActive: boolean }) => {
  return (
    <div className={`${!isActive ? 'hidden' : 'flex'} flex-col lg:flex`}>
      <img
        src={item.image}
        width={isActive ? 250 : 150}
        height={isActive ? 250 : 150}
        className="rounded-3xl shadow-[0_0_10px_-3px_#ffcc00cf] "
        alt="Item"
      />
    </div>
  );
};
