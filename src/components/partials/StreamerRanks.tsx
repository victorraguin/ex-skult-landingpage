import { GradientText } from './GradientText';
import RookieIcon from '../../../public/elements/streamer/1stars.png';
import HeroIcon from '../../../public/elements/streamer/2stars.png';
import LegendIcon from '../../../public/elements/streamer/3stars.png';
import Image from 'next/image';

export const StreamerRanks = () => (
  <div className="flex h-[70vh] flex-col gap-y-28 py-10">
    <Title />
    <p className="text-center font-medium text-[#989898]">
      Streamer Ranks Based on Your Popularity
      <br />
      For Every Card you Sold You get:
    </p>

    <div className="mx-auto flex w-full max-w-7xl flex-row flex-wrap items-center justify-evenly gap-y-8">
      {ranks.map(({ icon, name, royalties }) => (
        <div key={name} className="flex flex-col items-center">
          <Image src={icon} layout="fixed" width={200} height={100} />
          <p className="text-lg font-semibold text-[#f3bf00]">{name}</p>
          <p>
            <span className="font-medium text-[#989898]">Get</span> {royalties}%
          </p>
        </div>
      ))}
    </div>

    <p className="mx-auto max-w-md text-center">
      Our games are designed for any Streamer to get an audience and for any Player to get rewarded
    </p>
  </div>
);

const Title = () => (
  <p className="text-center text-3xl text-[#e7e7e7]">
    The More You Go <GradientText>Up the Ladder</GradientText> The <GradientText>More you Earn</GradientText>
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
