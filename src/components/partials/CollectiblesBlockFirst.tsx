/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CollectiblesBlockFirst = () => {
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
    <motion.div className="mt-[20rem] h-full bg-[#282828]">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="https://cdn.skult.gg/Landing+Page/skult-streamer-cards.png"
        alt="SKULT Streamer Cards"
        className="mx-auto mb-12 hidden h-72 sm:flex lg:h-80 xl:h-96"
      />
      <motion.div
        className="h-full bg-[#282828]"
        variants={CardContainer}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div className="mx-auto flex flex-col flex-wrap justify-around gap-y-8 sm:flex-nowrap md:flex-row 2xl:w-3/4 4xl:w-3/4">
          <motion.div className="flex flex-1 flex-col" variants={CardItem}>
            <img src="/elements/skult-collecte-icon-.svg" alt="Collect Icon" className="h-[125px]" />
            <h4 className="pt-2 text-center font-poppins text-3xl font-semibold text-primary md:pt-5">
              {t('collectiblesFirst.collect.title')}
            </h4>
            <p className="mx-auto w-3/4 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              {t('collectiblesFirst.collect.description')}
            </p>
          </motion.div>
          <motion.div className="flex flex-1 flex-col" variants={CardItem}>
            <img src="/elements/skult-trade-icon.svg" alt="Trade Icon" className="h-[125px]" />
            <h4 className="pt-2 text-center font-poppins text-3xl font-semibold text-primary md:pt-5">
              {t('collectiblesFirst.trade.title')}
            </h4>
            <p className="mx-auto w-3/4 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              {t('collectiblesFirst.trade.description')}
            </p>
          </motion.div>
          <motion.div className="flex flex-1 flex-col" variants={CardItem}>
            <img src="/elements/skult-compete-icon.svg" alt="Compete Icon" className="h-[125px]" />
            <h4 className="pt-2 text-center font-poppins text-3xl font-semibold text-primary md:pt-5">
              {t('collectiblesFirst.compete.title')}
            </h4>
            <p className="mx-auto w-3/4 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              {t('collectiblesFirst.compete.description')}
            </p>
          </motion.div>
        </motion.div>
        <div className="xl:pb-10 2xl:pb-10"></div>
      </motion.div>
    </motion.div>
  );
};

export default CollectiblesBlockFirst;
