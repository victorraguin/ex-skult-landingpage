/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PresentationBlock = () => {
  const videoVariant = {
    visible: { opacity: 1, transition: { delay: 2, duration: 6 } },
    hidden: { opacity: 0 },
  };
  const openLureurVariant = {
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 2 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const openTitleText = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const openLittleTitleText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const openStreamerFantasyText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 3, duration: 3 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const openSupportedGamesText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 3.5, duration: 2 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const lueurVariant = {
    visible: { opacity: 1, scale: [1, 0.9], transition: { duration: 3, yoyo: Number.POSITIVE_INFINITY } },
    hidden: { opacity: 0, scale: 0 },
  };
  const lueurVariantViolet = {
    visible: { opacity: 1, scale: [0.9, 1], transition: { duration: 3, yoyo: Number.POSITIVE_INFINITY } },
    hidden: { opacity: 0, scale: 0 },
  };
  const CardContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      delay: 2.5,
      duration: 1,
      transition: {
        delayChildren: 0.5,
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const CardItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
  const GameContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      delay: 5,
      duration: 1,
      transition: {
        delayChildren: 2.5,
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const GameItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
  const openComingSoonText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 8, duration: 1 } },
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
    <motion.div className="flex flex-col bg-[#282828] shadow-lg shadow-black" ref={ref}>
      <motion.h3
        className="mx-2 mt-5 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:mx-0 xl:text-[36px] 2xl:text-[48px]"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openTitleText}
      >
        Every Game is a step further towards
      </motion.h3>
      <motion.h3
        className="mb-20 text-center font-poppins text-[40px] font-light text-[#FFC000] xl:text-[36px] 2xl:text-[48px]"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openLittleTitleText}
      >
        Victory!
      </motion.h3>
      <div className="relative flex flex-col ">
        <div className="left-[13%] z-10 mx-auto rounded-[15px] xl:relative xl:left-[16%] xl:mx-0 xl:w-[920px] xl:bg-[#282828] 2xl:left-[19%] 3xl:left-[25.5%] 4xl:left-[33%]">
          <motion.video
            className="relative z-20 w-[300px] rounded-[15px] xl:w-[920px]"
            animate={controls}
            initial={{ opacity: 0 }}
            variants={videoVariant}
            autoPlay
            muted
            controls
          >
            {/* <source src="/valorant.mp4" type="video/mp4" /> */}
          </motion.video>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={controls} variants={openLureurVariant} aria-hidden="true">
          <motion.img
            src="./elements/lueur-1.webp"
            alt="SKULT TV"
            className="absolute left-[3%] top-[-48%] z-0 blur-3xl xl:left-[1%] xl:top-[-44%] 2xl:left-[3%] 3xl:left-[12%] 4xl:left-[24%]"
            animate={controls}
            initial="visible"
            variants={lueurVariant}
          />
          <motion.img
            src="./elements/lueur-2.webp"
            alt="SKULT TV"
            className="absolute left-[3%] top-[-48%] z-0 blur-3xl  xl:left-[1%] xl:top-[-44%] 2xl:left-[3%] 3xl:left-[12%] 4xl:left-[24%]"
            animate={controls}
            initial="hidden"
            variants={lueurVariantViolet}
          />
        </motion.div>
      </div>
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
          <h4 className="text-center text-[22px] font-semibold text-primary xl:text-[24px]">Collect cards</h4>
          <p className="text-center font-light text-[#e7e7e7] xl:text-[16px]">of your favorites</p>
          <p className="text-center font-light text-[#e7e7e7] xl:text-[16px]">Streamers</p>
        </motion.div>
        <motion.div
          variants={CardItem}
          className="m-2 w-[160px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] pt-6 xl:w-[200px]"
        >
          <h4 className="text-center text-[22px] font-semibold text-primary xl:text-[24px]">Build</h4>
          <p className="text-center font-light text-[#e7e7e7] xl:text-[16px]">your own</p>
          <p className="text-center font-light  text-[#e7e7e7] xl:text-[16px]">Team</p>
        </motion.div>
        <motion.div
          variants={CardItem}
          className="m-2 w-[160px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] py-6 xl:w-[200px]"
        >
          <h4 className="text-center text-[22px] font-semibold text-primary xl:text-[24px]">Draft</h4>
          <p className="text-center font-light text-[#e7e7e7] xl:text-[16px]">your Squad</p>
        </motion.div>
        <motion.div
          variants={CardItem}
          className="m-2 w-[160px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] py-6 xl:w-[200px]"
        >
          <h4 className="text-center text-[22px] font-semibold text-primary xl:text-[24px]">Challenge</h4>
          <p className="text-center font-light text-[#e7e7e7] xl:text-[16px]">other Leaguers</p>
        </motion.div>
        <motion.div
          variants={CardItem}
          className="m-2 w-[90%]  rounded-[15px] border-[1px] border-[#464646] bg-[#303030] py-6 xl:w-[200px]"
        >
          <h4 className="text-center text-[22px] font-semibold text-primary xl:text-[24px]">Win</h4>
          <p className="text-center font-light text-[#e7e7e7] xl:text-[16px]">rewards!</p>
        </motion.div>
      </motion.div>
      <motion.div
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
        <motion.img variants={GameItem} src="/elements/GAME/apex.svg" alt="APApexEX" className="h-[100px]" />
        <motion.img variants={GameItem} src="/elements/GAME/valorant.svg" alt="Valorant" className="h-[100px]" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openComingSoonText}
        className="font-regular mt-4 mb-20 text-center font-poppins text-[24px] text-[#585858]"
      >
        And more coming soon!
      </motion.p>
    </motion.div>
  );
};

export default PresentationBlock;
