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
        staggerChildren: 0.5,
      },
    },
  };

  const CardItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="h-full bg-[#282828] pt-20 xl:mx-20 xl:pt-40 2xl:mx-[12rem] 3xl:mx-0 4xl:mr-40"
      variants={CardContainer}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <motion.div className="mx-auto flex flex-row flex-wrap justify-around sm:flex-nowrap 3xl:mx-[18rem] 3xl:w-2/3 4xl:mx-auto 4xl:w-3/4">
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-collecte-icon-.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Collect</h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Create your deck by collecting the cards of the best Streamers you can find! You'll need them to participate
            into their exclusive events & our Fantasy Leagues!
          </p>
        </motion.div>
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-trade-icon.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Trade</h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Trade with other Leaguers across the globe. Sell the cards you won't need: real cash is coming your way!
          </p>
        </motion.div>
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-compete-icon.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Compete</h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Draft your Squad and enter weekly Leagues. Your final score will depend on the real-world performances of
            your Streamers.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CollectiblesBlockFirst;
