import { GradientText } from './GradientText';
import Image from 'next/image';

export const StreamerRanks = () => (
  <div className="flex flex-col gap-y-28 pt-10 pb-32 text-lg 2xl:text-xl">
    <Title />
    <p className="mx-auto max-w-xs text-center text-2xl font-medium text-[#e7e7e7] md:max-w-xl">
      Streamer Ranks based on your popularity
    </p>

    <div className="mx-auto flex w-full max-w-7xl flex-row flex-wrap items-center justify-evenly gap-y-8">
      {ranks.map(({ icon, name }) => (
        <div key={name} className="flex flex-col items-center">
          <Image src={icon} layout="fixed" width={200} height={100} />
          <p className="text-xl font-semibold text-[#f3bf00] 2xl:text-2xl">{name}</p>
        </div>
      ))}
    </div>
    <p className="mx-auto max-w-xs text-center md:max-w-xl">
      <span className=" text-2xl text-primary">
        The more you rank, the more you earn. <br />
      </span>
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
    icon: 'https://cdn.skult.gg/Landing+Page/1stars.png',
    name: 'ROOKIE',
  },
  {
    icon: 'https://cdn.skult.gg/Landing+Page/2stars.png',
    name: 'HERO',
  },
  {
    icon: 'https://cdn.skult.gg/Landing+Page/3stars.png',
    name: 'LEGEND',
  },
];
