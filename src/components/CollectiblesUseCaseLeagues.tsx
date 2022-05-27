import Image from 'next/image';
import { GradientText } from './partials/GradientText';
import Step1 from '../../public/elements/collectiblesUseCase/1.svg';
import Step2 from '../../public/elements/collectiblesUseCase/2.svg';
import Step3 from '../../public/elements/collectiblesUseCase/3.svg';
import Step4 from '../../public/elements/collectiblesUseCase/4.svg';

export const CollectiblesUseCaseLeagues = () => {
  return (
    <div className="flex flex-1 justify-center bg-[#282828] pb-12 sm:pt-28">
      <div className="flex max-w-xs flex-col gap-y-8 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
        <Title />
        <Description />
        <HowTo />
      </div>
    </div>
  );
};

const Title = () => (
  <div className="flex flex-row items-center justify-center">
    <img alt="img here" />
    <h3 className="text-3xl">
      Play Streamer <GradientText>Fantasy Leagues</GradientText>
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

const HowTo = () => (
  <div className="flex flex-col items-center gap-y-4">
    <div className="flex flex-1 flex-row justify-center gap-x-4 ">
      <Step imgSrc={Step1} legend="Lorem Ipsum" />
      <Step imgSrc={Step2} legend="Lorem Ipsum" />
    </div>
    <div className="flex flex-1 flex-row justify-center gap-x-4">
      <Step imgSrc={Step3} legend="Lorem Ipsum" />
      <Step imgSrc={Step4} legend="Lorem Ipsum" />
    </div>
  </div>
);

const Step = ({ imgSrc, legend }: { imgSrc: string; legend: string }) => (
  <div className="flex flex-col items-center gap-y-2">
    <Image src={imgSrc} layout="intrinsic" width={250} height={250} />
    <h4 className="text-xl">{legend}</h4>
  </div>
);
