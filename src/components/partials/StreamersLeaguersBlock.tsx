/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StreamersLeaguersBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const openTitleText = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openStreamerLogoShadow = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  const openStreamerLueur = {
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
    hidden: { opacity: 0 },
  };

  const openStreamerLogo = {
    visible: { opacity: 1, transition: { delay: 2, duration: 1 } },
    hidden: { opacity: 0 },
  };

  const openAnyStreamerText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 3, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openLeaguerLogoShadow = {
    visible: { opacity: 1, transition: { delay: 3, duration: 1 } },
    hidden: { opacity: 0 },
  };

  const openLeaguerLueur = {
    visible: { opacity: 1, transition: { delay: 4, duration: 1 } },
    hidden: { opacity: 0 },
  };

  const openLeaguerLogo = {
    visible: { opacity: 1, transition: { delay: 5, duration: 1 } },
    hidden: { opacity: 0 },
  };

  const openAnyLeaguerText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 6, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openCommunityBlock = {
    visible: { opacity: 1, transition: { delay: 7, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openFunBlock = {
    visible: { opacity: 1, transition: { delay: 7.5, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openEngagementBlock = {
    visible: { opacity: 1, transition: { delay: 8, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openRewardsBlock = {
    visible: { opacity: 1, transition: { delay: 8.5, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openEarnCashStreamersBlock = {
    visible: { opacity: 1, transition: { delay: 9, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openEarnCashLeaguersBlock = {
    visible: { opacity: 1, transition: { delay: 9.5, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openButtonStreamerBlock = {
    visible: { opacity: 1, transition: { delay: 10, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openButtonLeaguerBlock = {
    visible: { opacity: 1, transition: { delay: 10.5, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div className="relative flex flex-col  bg-[#262626] pt-20 2xl:pt-20 3xl:pt-20" ref={ref}>
      <img src="/elements/haut.webp" alt="Streamer" className="absolute right-0 top-[-2rem] w-full" />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openTitleText}
        className="relative mx-auto flex flex-row font-poppins text-[48px] font-semibold text-primary"
      >
        Nobody
        <p className="pl-2 text-center text-[48px] font-light text-[#e7e7e7]"> is Left Behind!</p>
      </motion.h1>
      <div className="m-auto flex justify-around pt-[4.5rem] 2xl:pt-[6rem]">
        <div className="pr-[323px]">
          <div className="relative right-[-30%]">
            <div className="pb-[15rem] 2xl:pb-[17rem]">
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openStreamerLueur}
                  src="/elements/lueur-streamer.webp"
                  alt="Streamer"
                  className="absolute z-10 3xl:top-[-4rem] 3xl:w-full"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openStreamerLogoShadow}
                  src="/elements/skult-streamer-icon-2.svg"
                  alt="Streamer"
                  className="absolute z-10 ml-[25%] w-[50%] 3xl:ml-[31%] 3xl:w-[40%]"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openStreamerLogo}
                  src="/elements/skult-streamer-icon-1.svg"
                  alt="Streamer"
                  className="absolute z-10 ml-[25%] w-[50%] 3xl:ml-[31%] 3xl:w-[40%]"
                />
              </div>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={controls}
              variants={openAnyStreamerText}
              className=" bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text pb-10 text-center font-poppins text-[48px] font-semibold text-transparent"
            >
              Any Streamer
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openCommunityBlock}>
              <p className="text-[18px] font-medium text-primary">Develop you Community</p>
              <p className="pb-5 text-[18px] font-medium text-[#b8b8b8]">
                Get discovered thanks to a level-based League system: any Streamer can get an audience!
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openEngagementBlock}>
              <p className="text-[18px] font-medium text-[#f49124]">Boost Engagement</p>
              <p className="pb-5 text-[18px] font-medium text-[#b8b8b8] ">
                {' '}
                Grow your fan base and increase interactions with your followers.{' '}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openEarnCashStreamersBlock}>
              <p className="text-[18px] font-medium text-[#ed713c]">Earn Cash</p>
              <p className="mb-10 pb-5 text-[18px] font-medium text-[#b8b8b8]">
                From your collectibles and your in-game actions. The better you play, the more valuable you are!
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openButtonStreamerBlock}>
              <button
                className={`relative scale-105 rounded-full bg-gradient-to-r from-[#FFCC00] to-[#ED713C] p-0.5 text-sm hover:scale-110`}
              >
                <div className="relative flex flex-row rounded-full bg-[#262626] px-6 pt-3">
                  <div className={`pb-3 text-[20px] text-[#a9a9a9]`}>I'm a Streamer!</div>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="bg-[#222222] pl-80 pb-96">
          <div className="relative left-[-30%]">
            <div className="pb-[15rem] 2xl:pb-[17rem]">
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openLeaguerLueur}
                  src="/elements/lueur-leaguers.webp"
                  alt="leaguers"
                  className="absolute z-10 3xl:top-[-4rem] 3xl:w-full"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openLeaguerLogoShadow}
                  src="/elements/skult-leaguers-icon-1.svg"
                  alt="Streamer"
                  className="absolute z-10 ml-[25%] w-[50%] 3xl:ml-[31%] 3xl:w-[40%]"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openLeaguerLogo}
                  src="/elements/skult-leaguers-icon-2.svg"
                  alt="Streamer"
                  className="absolute z-10 ml-[25%] w-[50%] 3xl:ml-[31%] 3xl:w-[40%]"
                />
              </div>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={controls}
              variants={openAnyLeaguerText}
              className="bg-gradient-to-r from-[#7517F8] to-[#E323FF] bg-clip-text pb-10 text-center font-poppins text-[48px] font-semibold text-transparent"
            >
              Leaguers
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openFunBlock}>
              <p className="text-[18px] font-medium text-[#a80cfb]">Get fun while watching Streams</p>
              <p className="pb-5 text-[18px] font-medium text-[#b8b8b8] ">
                Discover the best Streamers and enroll them in your Team through their collectibles
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openRewardsBlock}>
              <p className="text-[18px] font-medium text-[#C820FD]">Play & Earn Rewards</p>
              <p className="pb-5 text-[18px] font-medium text-[#b8b8b8] ">
                Draft your Squad weekly, challenge other Leaguers, and get rewarded
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openEarnCashLeaguersBlock}>
              <p className="text-[18px] font-medium text-[#e323ff] ">Earn Cash</p>
              <p className="mb-10 pb-5 text-[18px] font-medium text-[#b8b8b8] ">
                Keep you team strong and sell other Streamers you don't need: earn cash from collectible trading
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openButtonLeaguerBlock}>
              <button
                className={`relative scale-105 rounded-full bg-gradient-to-l from-[#7517F8] to-[#E323ff] p-0.5 text-sm hover:scale-110`}
              >
                <div className="relative flex flex-row rounded-full bg-[#262626] px-6 pt-3">
                  <div className={` pb-3 text-[20px] text-[#a9a9a9]  `}>Let's Play</div>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative top-[-8rem] flex flex-row justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 15, duration: 1 }}
          // onClick={() => console.log('Bravo!')}
          aria-hidden="true"
        >
          <motion.img
            src="./elements/skult-nft-icon.svg"
            alt="header"
            className=" absolute right-[48.35%] z-20 mx-auto h-20 cursor-pointer transition duration-300 ease-in-out hover:scale-125 hover:invert"
          />
        </motion.div>
        <motion.img
          src="./elements/skyrroz.svg"
          alt="header"
          className="absolute z-30 mx-auto origin-bottom cursor-grab transition duration-[800ms] ease-in-out"
          drag
          dragElastic={1}
          whileTap={{ cursor: 'grabbing' }}
          dragConstraints={{ right: 100, left: 100, top: 100, bottom: 100 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        />
        <img
          src="./elements/natasha.svg"
          alt="header"
          className="absolute left-[47%] z-20 origin-bottom rotate-[18deg] transition duration-[800ms] ease-in-out hover:rotate-[28deg]"
        />
        <img
          src="./elements/waartex.svg"
          alt="header"
          className="absolute right-[47%] z-10 origin-bottom rotate-[350deg] transition duration-[800ms] ease-in-out hover:rotate-[345deg]"
        />
      </div>
      <img src="/elements/bas.webp" alt="Streamer" className="relative left-0 bottom-0 w-full" />
    </motion.div>
  );
};

export default StreamersLeaguersBlock;