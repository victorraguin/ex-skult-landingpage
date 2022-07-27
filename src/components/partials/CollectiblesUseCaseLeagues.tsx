import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { GradientText } from './GradientText';

export const CollectiblesUseCaseLeagues = () => {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-1 justify-center bg-[#222222] pb-4 pt-8 sm:pt-44">
      <div className="flex max-w-xs flex-col gap-y-16 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
        <Title />
        <Description />
        <HowTo />

        <GradientText className="text-center text-2xl font-bold">
          {t('collectiblesUseCases.fantasyLeagues.catchphrase')}
        </GradientText>
      </div>
    </div>
  );
};

const Title = () => {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-row items-center justify-center">
      <h3 className="text-3xl font-semibold text-[#FCC000]">{t('collectiblesUseCases.fantasyLeagues.title')}</h3>
    </div>
  );
};

const Description = () => {
  const { t } = useTranslation('home');

  return <p className="h-36 text-[#B8B8B8]">{t('collectiblesUseCases.fantasyLeagues.description')}</p>;
};

const HowTo = () => (
  <Image
    src="https://cdn.skult.gg/Landing+Page/league.svg"
    alt="league rules"
    layout="intrinsic"
    height={384}
    width={384}
  />
);
