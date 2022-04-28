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
  // const openSupportedGamesText = {
  //   visible: { opacity: 1, scale: 1, transition: { delay: 3, duration: 0.5 } },
  //   hidden: { opacity: 0, scale: 0 },
  // };
  const CardContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      delay: 3,
      duration: 0.25,
      transition: {
        delayChildren: 0.5,
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
  // const GameContainer = {
  //   hidden: { opacity: 1, scale: 0 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     delay: 10,
  //     duration: 0.25,
  //     transition: {
  //       delayChildren: 3.5,
  //       duration: 0.25,
  //       staggerChildren: 0.5,
  //     },
  //   },
  // };
  // const GameItem = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.25,
  //       ease: 'easeInOut',
  //     },
  //   },
  // };
  // const openComingSoonText = {
  //   visible: { opacity: 1, scale: 1, transition: { delay: 8, duration: 1 } },
  //   hidden: { opacity: 0, scale: 0 },
  // };
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div className="flex flex-col bg-[#282828] pt-10 pb-20" ref={ref}>
      <motion.div
        className="mt-12 text-center font-poppins text-[26px] font-medium text-[#e7e7e7] xl:text-[32px] 2xl:text-[48px]"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openStreamerFantasyText}
      >
        Streamer Fantasy Leagues
      </motion.div>
      <motion.div
        className="mt-10 mb-10 flex flex-row flex-wrap justify-around xl:justify-evenly 3xl:px-60"
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
          <h4 className="text-center font-poppins  text-[22px] font-semibold text-primary xl:text-[24px]">Challenge</h4>
          <p className="text-center font-poppins  font-light text-[#e7e7e7] xl:text-[16px]">other Leaguers</p>
        </motion.div>
        <motion.div className="my-auto hidden xl:inline-block" variants={CardItem}>
          <MdArrowForwardIos className=" text-2xl text-primary" />
        </motion.div>
        <motion.div
          variants={CardItem}
          className="m-2 w-[90%] rounded-[15px]  border-[1px] border-[#464646] bg-[#303030] py-6 md:w-[400px] xl:w-[200px]"
        >
          <h4 className="text-center font-poppins  text-[22px] font-semibold text-primary xl:text-[24px]">Win</h4>
          <p className="text-center font-poppins  font-light text-[#e7e7e7] xl:text-[16px]">rewards!</p>
        </motion.div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openSupportedGamesText}
        className="text-center font-poppins text-[26px] font-normal text-[#a8a8a8] xl:mt-5 xl:text-[32px] 2xl:text-[48px]"
      >
        Supported games
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-evenly xl:mx-[18rem] xl:flex-nowrap"
        variants={GameContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.img variants={GameItem} src="/elements/GAME/warzone.svg" alt="Warzone" className="h-[100px]" />
        <motion.img variants={GameItem} src="/elements/GAME/fortnite.svg" alt="Fortnite" className="h-[100px]" />
        <motion.img variants={GameItem} src="/elements/GAME/APEX.svg" alt="APApexEX" className="h-[100px]" />
        <motion.img variants={GameItem} src="/elements/GAME/valorant.svg" alt="Valorant" className="h-[100px]" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openComingSoonText}
        className="font-regular mt-4 mb-20 text-center font-poppins text-[24px] text-[#585858]"
      >
        And more coming soon!
      </motion.p> */}
    </motion.div>
  );
};

export default FantasyandGamesPart;
