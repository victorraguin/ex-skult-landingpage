import { Trans } from 'next-i18next';
import Image, { StaticImageData } from 'next/image';
import earnCashIcon from '../../../public/elements/streamer/earn-cash.svg';
import engageIcon from '../../../public/elements/streamer/engage.svg';
import visibilityIcon from '../../../public/elements/streamer/visibility.svg';

export const StreamerBenefits = () => (
  <div className="mx-auto flex max-w-7xl flex-row flex-wrap justify-evenly gap-y-12 pb-16 sm:py-5">
    <Benefit
      icon={visibilityIcon}
      advantage={
        <Trans i18nKey="benefits.visibility" ns="streamers">
          <p>
            Increase your <span className="font-semibold">visibility</span>
          </p>
        </Trans>
      }
      shadowColor="shadow-[#9E30FE]"
    />
    <Benefit
      icon={engageIcon}
      advantage={
        <Trans i18nKey="benefits.engage" ns="streamers">
          <p>
            <span className="font-semibold">Engage</span> your audience
          </p>
        </Trans>
      }
      shadowColor="shadow-[#ED713C]"
    />
    <Benefit
      icon={earnCashIcon}
      advantage={
        <Trans i18nKey="benefits.earn" ns="streamers">
          <p>
            <span className="font-semibold">Earn</span> cash
          </p>
        </Trans>
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
