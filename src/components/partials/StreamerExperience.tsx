import { Trans, useTranslation } from 'next-i18next';
import Image from 'next/image';
import { GradientText } from './GradientText';

export const StreamerExperiences = () => {
  const { t } = useTranslation('streamers');

  return (
    <div className="flex min-h-[70vh] flex-1 bg-[#222222] pb-20">
      <div
        className={`
        m-auto flex max-w-xs flex-1 flex-col items-center justify-around
        gap-y-16 gap-x-8 md:max-w-xl md:flex-row lg:max-w-7xl lg:gap-x-0
      `}
      >
        <Experience
          icon="https://cdn.skult.gg/Landing+Page/EVENTS.png"
          title={
            <Trans i18nKey="experience.events.title" ns="streamers">
              <span>
                Create <GradientText className="font-semibold">exclusive</GradientText> events
              </span>
            </Trans>
          }
          description={t('experience.events.description')}
        />
        <Experience
          icon="https://cdn.skult.gg/Landing+Page/CARD-PLAY-EARN.png"
          title={
            <Trans i18nKey="experience.title" ns="streamers">
              <span>
                Play & <GradientText className="font-semibold">Earn</GradientText>
              </span>
            </Trans>
          }
          description={t('experience.earn.description')}
        />
      </div>
    </div>
  );
};

const Experience = ({ icon, title, description }: { icon: string; title: React.ReactNode; description: string }) => (
  <div className="flex max-w-sm flex-1 flex-col items-center gap-y-4 2xl:gap-y-16">
    <Image src={icon} layout="fixed" width={150} height={150} />
    <h2 className="text-center text-3xl font-medium">{title}</h2>
    <p className="pt-4 text-center text-lg text-[#B8B8B8] 2xl:text-xl">{description}</p>
  </div>
);
