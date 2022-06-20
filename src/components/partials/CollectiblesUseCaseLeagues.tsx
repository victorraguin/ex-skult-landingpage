import Image from 'next/image';
import { GradientText } from './GradientText';

export const CollectiblesUseCaseLeagues = () => {
  return (
    <div className="flex flex-1 justify-center bg-[#222222] pb-4 pt-8 sm:pt-44">
      <div className="flex max-w-xs flex-col gap-y-16 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
        <Title />
        <Description />
        <HowTo />

        <GradientText className="text-center text-2xl">Will you have what it takes?</GradientText>
      </div>
    </div>
  );
};

const Title = () => (
  <div className="flex flex-row items-center justify-center">
    <h3 className="text-3xl font-semibold text-[#FCC000]">Streamers Fantasy Leagues</h3>
  </div>
);

const Description = () => (
  <p className="h-36 text-[#B8B8B8]">
    Every week, participate alongside other Leaguers in SKULT Fantasy Leagues by drafting your Dream Squad! The in-game
    actions of the Streamers you have chosen will contribute to your final score! At the end of the week, earn rewards
    based on the number of points you have!
  </p>
);

const HowTo = () => (
  <Image
    src="https://cdn.skult.gg/Landing+Page/league.svg"
    alt="league rules"
    layout="intrinsic"
    height={384}
    width={384}
  />
);
