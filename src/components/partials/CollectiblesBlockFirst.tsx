/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CollectiblesBlockFirst = () => {
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
    <motion.div variants={CardContainer} initial="hidden" animate={controls} ref={ref} className="h-full bg-[#282828]">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="/skult-streamer-cards.png"
        alt="SKULT Streamer Cards"
        className="mx-auto hidden scale-[0.9] sm:flex 3xl:scale-[0.45]"
      />
      <motion.div
        className="h-full bg-[#282828] pt-40 sm:pt-0"
        variants={CardContainer}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div className="mx-auto flex flex-col flex-wrap justify-around gap-y-8 sm:flex-nowrap md:flex-row 3xl:w-2/3 4xl:w-3/4">
          <motion.div className="flex flex-1 flex-col" variants={CardItem}>
            <img src="/elements/skult-collecte-icon-.svg" alt="Collect Icon" className="h-[125px]" />
            <h4 className="pt-2 text-center font-poppins text-[28px] font-semibold text-primary md:pt-5">Collect</h4>
            <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              Create your deck by collecting the cards of the best Streamers you can find! You'll need them to
              participate into their exclusive events & our Fantasy Leagues!
            </p>
          </motion.div>
          <motion.div className="flex flex-1 flex-col" variants={CardItem}>
            <img src="/elements/skult-trade-icon.svg" alt="Trade Icon" className="h-[125px]" />
            <h4 className="pt-2 text-center font-poppins text-[28px] font-semibold text-primary md:pt-5">Trade</h4>
            <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              Trade with other members of the SKULT Community across the globe. Sell the cards you won't need: real cash
              is coming your way!
            </p>
          </motion.div>
          <motion.div className="flex flex-1 flex-col" variants={CardItem}>
            <img src="/elements/skult-compete-icon.svg" alt="Compete Icon" className="h-[125px]" />
            <h4 className="pt-2 text-center font-poppins text-[28px] font-semibold text-primary md:pt-5">Compete</h4>
            <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              Draft your Squad and enter weekly Leagues. Your final score will depend on the real-world performances of
              your Streamers.
            </p>
          </motion.div>
        </motion.div>
        <div className="2xl:pb-42 xl:pb-20"></div>
      </motion.div>
    </motion.div>
  );
};

export default CollectiblesBlockFirst;
