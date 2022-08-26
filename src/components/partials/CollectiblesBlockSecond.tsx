/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';

const CollectiblesBlockSecond = () => {
  const { t } = useTranslation('home');
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const CardContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      duration: 0.25,
      transition: {
        delayChildren: 0.25,
        duration: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const CardItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="h-full bg-[#282828] pt-8"
      variants={CardContainer}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <motion.div className="mx-auto flex flex-col flex-wrap justify-around gap-y-8 sm:flex-nowrap md:flex-row xl:w-2/3 4xl:w-3/4">
        <motion.div className="flex flex-1 flex-col" variants={CardItem}>
          <img src="/elements/skult-support-icon.svg" alt="Support Icon" className="h-[125px]" />
          <h4 className="pt-2 text-center font-poppins text-3xl font-semibold text-primary md:pt-5">
            {t('collectiblesSecond.support.title')}
          </h4>
          <p className="mx-auto w-[75%] pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            {t('collectiblesSecond.support.description')}
          </p>
        </motion.div>
        {/* <motion.div className="flex flex-1 flex-col" variants={CardItem}>
          <img src="/elements/skult-nft-icon.svg" alt="Unique & Counterfeit Icon" className="h-[125px]" />
          <h4 className="pt-2 text-center font-poppins text-3xl font-semibold text-primary md:pt-5">
            {t('collectiblesSecond.unique.titleFirst')}
          </h4>
          <h4 className="text-center font-poppins text-3xl font-semibold text-primary">
            {t('collectiblesSecond.unique.titleLast')}
          </h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            {t('collectiblesSecond.unique.description')}
          </p>
        </motion.div> */}
        <motion.div className="flex flex-1 flex-col" variants={CardItem}>
          <img src="/elements/skult-airdrop-icon.svg" alt="Earn Icon" className="h-[125px]" />
          <h4 className="pt-2 text-center font-poppins text-3xl font-semibold text-primary md:pt-5">
            {t('collectiblesSecond.earn.title')}
          </h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            {t('collectiblesSecond.earn.description')}
          </p>
        </motion.div>
      </motion.div>
      <div className="2xl:pb-42 pb-20"></div>
    </motion.div>
  );
};

export default CollectiblesBlockSecond;
