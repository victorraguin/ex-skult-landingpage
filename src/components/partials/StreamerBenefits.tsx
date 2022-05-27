import visibilityIcon from '../../../public/elements/streamer/visibility.png';
import engageIcon from '../../../public/elements/streamer/engage.png';
import earnCashIcon from '../../../public/elements/streamer/earn-cash.png';
import Image, { StaticImageData } from 'next/image';

export const StreamerBenefits = () => (
  <div className="mx-auto flex max-w-7xl flex-row flex-wrap justify-evenly gap-y-12 pb-16 sm:py-5">
    <Benefit
      icon={visibilityIcon}
      advantage={
        <p>
          Increase your <span className="font-semibold">Visibility</span>
        </p>
      }
    />
    <Benefit
      icon={engageIcon}
      advantage={
        <p>
          <span className="font-semibold">Engage</span> Your Audience
        </p>
      }
    />
    <Benefit
      icon={earnCashIcon}
      advantage={
        <p>
          <span className="font-semibold">Earn</span> cash
        </p>
      }
    />
  </div>
);

const Benefit = ({ icon, advantage }: { icon: StaticImageData; advantage: React.ReactNode }) => (
  <div className="flex flex-col items-center">
    <Image src={icon} width={100} height={100} layout="fixed" />
    <div className="w-52 text-center text-2xl font-extralight 2xl:text-3xl">{advantage}</div>
  </div>
);
