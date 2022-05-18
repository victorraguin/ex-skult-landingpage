/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CollectiblesUseCaseBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const openStreamerFantasyText = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const CardContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      duration: 0.7,
      transition: {
        delayChildren: 0.7,
        duration: 0.7,
        staggerChildren: 0.5,
      },
    },
  };

  const CardItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div className=" bg-gradient-to-r from-[#FFCC00] to-[#ED713C] py-[2px]">
      <motion.div
        className="h-full bg-[#222222] xl:pt-10"
        variants={CardContainer}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div
          className="mt-10 pb-20 text-center font-poppins text-[26px] font-medium text-[#e7e7e7] xl:text-[32px] 2xl:text-[42px]"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openStreamerFantasyText}
        >
          What can you do with your Collectibles ?
        </motion.div>
        <motion.div className="flex flex-row flex-wrap justify-around sm:flex-nowrap 2xl:mx-60">
          <motion.div className=" flex flex-col" variants={CardItem}>
            <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-white">
              Participate in
              <h4 className="text-primary">Exclusive Experiences</h4>
            </h4>
            <img
              src="/skult-event-ticket.svg"
              alt="SKULT Event"
              className="mx-auto w-[20rem] rotate-[-8deg] pt-20 pb-5"
            />
            <p className="mx-auto w-2/3 pt-10 text-center font-poppins text-[18px]  font-medium text-[#b8b8b8]">
              Your cards can unlock exclusive events created by your favorite Streamers !
            </p>
          </motion.div>
          <motion.div className=" flex flex-col" variants={CardItem}>
            <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-white">
              Play
              <span className="text-primary"> & Earn</span>
            </h4>
            <img src="/skult-cards.svg" alt="SKULT Event" className="mx-auto w-[20rem] scale-[0.8] pt-[73px]" />
            <p className="mx-auto w-2/3 pt-10 text-center font-poppins text-[18px]  font-medium text-[#b8b8b8]">
              Play your cards on SKULT Fantasy Leagues and earn fantastic rewards !
            </p>
          </motion.div>
        </motion.div>
        <div className="xl:pb-20 2xl:pb-40"></div>
      </motion.div>
    </motion.div>
  );
};

export default CollectiblesUseCaseBlock;
