import Image from 'next/image';
import LeagueRules from '../../public/elements/collectiblesUseCase/league.svg';

export const CollectiblesUseCaseLeagues = () => {
  return (
    <div className="flex flex-1 justify-center bg-[#282828] pb-12 sm:pt-28">
      <div className="flex max-w-xs flex-col gap-y-8 lg:max-w-md xl:max-w-xl 2xl:max-w-4xl">
        <Title />
        <Description />
        <HowTo />
      </div>
    </div>
  );
};

const Title = () => (
  <div className="flex flex-row items-center justify-center">
    {/* <img alt="img here" /> */}
    <h3 className="text-3xl font-semibold text-[#FCC000]">Play Streamer Fantasy Leagues</h3>
  </div>
);

const Description = () => (
  <p className="text-[#B8B8B8]">
    Drops, giveaways, exclusive content, in real life events... Everything is possible! Streamers can create any kind of
    experiences they want and make their commu- nity participate to them! Your cards can unlock exclusive events created
    by your favorite Streamers!
  </p>
);

const HowTo = () => <Image src={LeagueRules} alt="league rules" layout="intrinsic" width={381} height={672} />;
