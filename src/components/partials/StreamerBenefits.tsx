import visibilityIcon from '../../../public/elements/streamer/visibility.svg';
import engageIcon from '../../../public/elements/streamer/engage.svg';
import earnCashIcon from '../../../public/elements/streamer/earn-cash.svg';
import Image, { StaticImageData } from 'next/image';

export const StreamerBenefits = () => (
  <div className="mx-auto flex max-w-7xl flex-row flex-wrap justify-evenly gap-y-12 pb-16 sm:py-5">
    <Benefit
      icon={visibilityIcon}
      advantage={
        <p>
          Increase your <span className="font-semibold">visibility</span>
        </p>
      }
      shadowColor="shadow-[#9E30FE]"
    />
    <Benefit
      icon={engageIcon}
      advantage={
        <p>
          <span className="font-semibold">Engage</span> your audience
        </p>
      }
      shadowColor="shadow-[#ED713C]"
    />
    <Benefit
      icon={earnCashIcon}
      advantage={
        <p>
          <span className="font-semibold">Earn</span> cash
        </p>
      }
      shadowColor="shadow-[#FFC000]"
    />
  </div>
);

const Benefit = ({
  icon,
  advantage,
  shadowColor,
}: {
  icon: StaticImageData;
  advantage: React.ReactNode;
  shadowColor: string;
}) => (
  <div className="flex flex-col items-center gap-y-6">
    <div
      className={`
        rounded-lg
        shadow-[0_0_10px_5px_rgba(0,0,0,0.3)] ${shadowColor} flex h-14 w-14 items-center justify-center xl:h-20 xl:w-20
      `}
    >
      <Image src={icon} width={42} height={42} layout="intrinsic" />
    </div>
    <div className="w-52 text-center text-2xl font-extralight 2xl:text-3xl">{advantage}</div>
  </div>
);
