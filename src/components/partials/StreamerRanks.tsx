import { GradientText } from './GradientText';
import RookieIcon from '../../../public/elements/streamer/1stars.png';
import HeroIcon from '../../../public/elements/streamer/2stars.png';
import LegendIcon from '../../../public/elements/streamer/3stars.png';
import Image from 'next/image';

export const StreamerRanks = () => (
  <div className="flex flex-col gap-y-28 pt-10 pb-32 text-lg 2xl:text-xl">
    <Title />
    <p className="mx-auto max-w-xs text-center font-medium text-[#e7e7e7] md:max-w-xl">
      Streamer Ranks based on your popularity
      <br />
      For every Card you sell you get:
    </p>

    <div className="mx-auto flex w-full max-w-7xl flex-row flex-wrap items-center justify-evenly gap-y-8">
      {ranks.map(({ icon, name, royalties }) => (
        <div key={name} className="flex flex-col items-center">
          <Image src={icon} layout="fixed" width={200} height={100} />
          <p className="text-xl font-semibold text-[#f3bf00] 2xl:text-2xl">{name}</p>
          <p>
            <span className="font-medium text-[#989898]">Get</span> {royalties}%
          </p>
        </div>
      ))}
    </div>

    <p className="mx-auto max-w-xs text-center md:max-w-xl">
      Our games are designed for any Streamer to get an audience and for any Player to get rewarded
    </p>
  </div>
);

const Title = () => (
  <p className="mx-auto max-w-xs text-center text-3xl text-[#e7e7e7] md:max-w-xl lg:max-w-7xl xl:text-5xl 2xl:text-4xl">
    The more you go <GradientText>up the ladder</GradientText> the <GradientText>more you earn</GradientText>
  </p>
);

const ranks = [
  {
    icon: RookieIcon,
    name: 'ROOKIE',
    royalties: 10,
  },
  {
    icon: HeroIcon,
    name: 'HERO',
    royalties: 15,
  },
  {
    icon: LegendIcon,
    name: 'LEGEND',
    royalties: 25,
  },
];
