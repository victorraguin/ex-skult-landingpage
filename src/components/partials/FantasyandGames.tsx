/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdArrowForwardIos } from 'react-icons/md';

const FantasyandGamesPart = () => {
  const openStreamerFantasyText = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openImage = {
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openSupportedGamesText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 4.5, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const CardContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      duration: 0.25,
      transition: {
        delayChildren: 1.5,
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
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };
  const GameContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      delay: 10,
      duration: 0.25,
      transition: {
        delayChildren: 5,
        duration: 0.25,
        staggerChildren: 0.5,
      },
    },
  };
  const GameItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };
  const openComingSoonText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 6, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.div className="flex flex-col bg-[#222222]  pb-20 sm:pt-40" ref={ref}>
        <motion.div
          className="mt-12 pb-20 text-center font-poppins text-[26px] font-light text-[#e7e7e7] xl:text-[33px] 2xl:text-[42px]"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openStreamerFantasyText}
        >
          Play Streamer{' '}
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            Fantasy Leagues
          </span>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openImage}
          src="/skult-cards.svg"
          alt="SKULT Cards"
          className="mx-auto scale-[0.8] sm:w-[25rem] sm:pt-10 sm:pb-20"
        />
        <motion.div
          className="mt-20 mb-10 flex flex-row flex-wrap justify-around xl:justify-evenly xl:px-20 2xl:px-40 3xl:px-60"
          variants={CardContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            variants={CardItem}
            className="m-2 w-[160px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] py-6 xl:w-[200px]"
          >
            <h4 className="text-center font-poppins  text-[22px] font-semibold text-primary xl:text-[24px]">
              Collect cards
            </h4>
            <p className="text-center font-poppins font-light text-[#e7e7e7] xl:text-[16px]">of your favorites</p>
            <p className="text-center font-poppins  font-light text-[#e7e7e7] xl:text-[16px]">Streamers</p>
          </motion.div>
          <motion.div className="my-auto hidden xl:inline-block" variants={CardItem}>
            <MdArrowForwardIos className=" text-2xl text-primary" />
          </motion.div>
          <motion.div
            variants={CardItem}
            className="m-2 w-[160px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] pt-6 xl:w-[200px]"
          >
            <h4 className="text-center font-poppins  text-[22px] font-semibold text-primary xl:text-[24px]">Build</h4>
            <p className="text-center font-poppins  font-light text-[#e7e7e7] xl:text-[16px]">your own</p>
            <p className="text-center font-poppins  font-light  text-[#e7e7e7] xl:text-[16px]">Team</p>
          </motion.div>
          <motion.div className="my-auto hidden xl:inline-block" variants={CardItem}>
            <MdArrowForwardIos className=" text-2xl text-primary" />
          </motion.div>
          <motion.div
            variants={CardItem}
            className="m-2 w-[160px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] py-6 xl:w-[200px]"
          >
            <h4 className="text-center font-poppins  text-[22px] font-semibold text-primary xl:text-[24px]">Draft</h4>
            <p className="text-center font-poppins   font-light text-[#e7e7e7] xl:text-[16px]">your Squad</p>
          </motion.div>
          <motion.div className="my-auto hidden xl:inline-block" variants={CardItem}>
            <MdArrowForwardIos className=" text-2xl text-primary" />
          </motion.div>
          <motion.div
            variants={CardItem}
            className="m-2 w-[160px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] py-6 xl:w-[200px]"
          >
            <h4 className="text-center font-poppins  text-[22px] font-semibold text-primary xl:text-[24px]">
              Challenge
            </h4>
            <p className="text-center font-poppins  font-light text-[#e7e7e7] xl:text-[16px]">other Leaguers</p>
          </motion.div>
          <motion.div className="my-auto hidden xl:inline-block" variants={CardItem}>
            <MdArrowForwardIos className=" text-2xl text-primary" />
          </motion.div>
          <motion.div
            variants={CardItem}
            className="m-2 w-[90%] rounded-[15px]  border-[1px] border-[#464646] bg-[#303030] py-6 md:w-[200px] xl:w-[200px]"
          >
            <h4 className="text-center font-poppins  text-[22px] font-semibold text-primary xl:text-[24px]">Win</h4>
            <p className="text-center font-poppins  font-light text-[#e7e7e7] xl:text-[16px]">rewards!</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openSupportedGamesText}
          className="pb-10 text-center font-poppins text-[26px] font-normal text-[#e7e7e7] xl:mt-10 xl:text-[28px] 2xl:text-[28px]"
        >
          Available for
        </motion.div>
        <motion.div
          className="mx-10 flex flex-wrap justify-evenly xl:mx-[25rem] xl:flex-nowrap"
          variants={GameContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.img variants={GameItem} src="/elements/GAME/warzone.svg" alt="Warzone" className="h-[120px]" />
          <motion.img variants={GameItem} src="/elements/GAME/fortnite.svg" alt="Fortnite" className="h-[120px]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openComingSoonText}
          className="font-regular mt-4 pt-20 text-center font-poppins text-[24px] text-[#e7e7e7e7] "
        >
          More coming soon...
        </motion.p>
      </motion.div>
      <img src="/Page_breaker1.svg" alt="Page Breaker" className="w-full" />
    </div>
  );
};

export default FantasyandGamesPart;
