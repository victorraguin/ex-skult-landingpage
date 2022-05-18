/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const StreamersLeaguersBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const openTitleText = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openStreamerLogoShadow = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0 },
  };

  const openStreamerLueur = {
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.3 } },
    hidden: { opacity: 0 },
  };

  const openStreamerLogo = {
    visible: { opacity: 1, transition: { delay: 0.6, duration: 0.3 } },
    hidden: { opacity: 0 },
  };

  const openAnyStreamerText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 0.9, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openLeaguerLogoShadow = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0 },
  };

  const openLeaguerLueur = {
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.3 } },
    hidden: { opacity: 0 },
  };

  const openLeaguerLogo = {
    visible: { opacity: 1, transition: { delay: 0.6, duration: 0.3 } },
    hidden: { opacity: 0 },
  };

  const openAnyLeaguerText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 0.9, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openCommunityBlock = {
    visible: { opacity: 1, transition: { delay: 1.2, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openFunBlock = {
    visible: { opacity: 1, transition: { delay: 1.2, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openEngagementBlock = {
    visible: { opacity: 1, transition: { delay: 1.5, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openRewardsBlock = {
    visible: { opacity: 1, transition: { delay: 1.5, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openEarnCashStreamersBlock = {
    visible: { opacity: 1, transition: { delay: 1.8, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openEarnCashLeaguersBlock = {
    visible: { opacity: 1, transition: { delay: 1.8, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openButtonStreamerBlock = {
    visible: { opacity: 1, transition: { delay: 2.1, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openButtonLeaguerBlock = {
    visible: { opacity: 1, transition: { delay: 2.1, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div className="relative flex flex-col flex-wrap  bg-[#262626] pt-10 2xl:pt-20 3xl:pt-20" ref={ref}>
      {/* <img
        src="/elements/haut.webp"
        alt="Streamer"
        className="invisible absolute right-0 top-[-2rem] w-full xl:visible"
      /> */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openTitleText}
        id="Streamer-Anybody"
        className="relative mx-auto flex flex-row font-poppins text-[32px] font-semibold text-primary xl:text-[32px] 2xl:text-[48px]"
      >
        Nobody
        <p className="pl-2 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[32px] 2xl:text-[48px]">
          {' '}
          is Left Behind!
        </p>
      </motion.h1>
      <div className=" mx-5 flex flex-row flex-wrap justify-around pt-[4.5rem] xl:mx-0 xl:flex-nowrap 2xl:pt-[8rem] 4xl:pt-[12rem]">
        <div className="xl:w-1/3">
          <div className="pb-[44%] xl:pb-[47%] 2xl:pb-[46%] 3xl:pb-[39%] 4xl:pb-[37%]">
            <div className="relative">
              <motion.img
                initial={{ opacity: 0 }}
                animate={controls}
                variants={openStreamerLueur}
                src="/elements/lueur-streamer.webp"
                alt="Streamer"
                className="absolute z-10 w-full 3xl:top-[-4rem]"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={controls}
                variants={openStreamerLogoShadow}
                src="/elements/skult-streamer-icon-2.svg"
                alt="Streamer"
                className="absolute z-10 ml-[25%] w-[50%] md:top-[4rem] md:ml-[31%] md:w-[40%] xl:top-0 xl:ml-[25%] xl:w-[50%] 3xl:ml-[29%] 3xl:w-[40%]"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={controls}
                variants={openStreamerLogo}
                src="/elements/skult-streamer-icon-1.svg"
                alt="Streamer"
                className="absolute z-10 ml-[25%] w-[50%] md:top-[4rem] md:ml-[31%] md:w-[40%] xl:top-0 xl:ml-[25%] xl:w-[50%] 3xl:ml-[29%] 3xl:w-[40%]"
              />
            </div>
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={controls}
            variants={openAnyStreamerText}
            className=" bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text pb-10 text-center font-poppins text-[32px] font-semibold text-transparent 2xl:text-[48px]"
          >
            Any Streamer
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={controls} variants={openCommunityBlock}>
            <p className="font-poppins text-[18px]  font-medium text-primary">Develop your Community</p>
            <p className="pb-5 font-poppins text-[18px] font-medium text-[#b8b8b8]">
              Get discovered thanks to level-based : any Streamer can get an audience!
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={controls} variants={openEngagementBlock} className="pt-[22px]">
            <p className="font-poppins text-[18px] font-medium text-[#f49124]">Boost Engagement</p>
            <p className="pb-5 font-poppins  text-[18px] font-medium text-[#b8b8b8] ">
              {' '}
              Grow your fan base and increase interactions with your followers.{' '}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={openEarnCashStreamersBlock}
            className="pt-[26px]"
          >
            <p className="font-poppins text-[18px] font-medium text-[#ed713c]">Earn Cash</p>
            <p className="mb-10 pb-5 font-poppins text-[18px] font-medium text-[#b8b8b8]">
              From your collectibles and your in-game actions. The better you play, the more valuable you are!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={openButtonStreamerBlock}
            className="xl:pt-8 xl:pb-0 2xl:pt-2 3xl:pt-0"
          >
            <button
              className={`relative rounded-full bg-gradient-to-r from-[#FFCC00] to-[#ED713C] p-0.5 text-sm hover:scale-105`}
            >
              <div className="relative flex flex-row rounded-full bg-[#262626] px-6 pt-3">
                <Link href="/streamer" passHref>
                  <div className={`pb-3 font-poppins text-[20px]  text-[#a9a9a9]`}>I'm a Streamer!</div>
                </Link>
              </div>
            </button>
          </motion.div>
        </div>
        <div className="pt-20 xl:w-1/3 xl:pt-0">
          <div className="relative xl:left-[-20%] xl:mx-0">
            <div className="pb-[44%] md:pb-[46%] xl:pb-[47%] 2xl:pb-[46%] 3xl:pb-[39%] 4xl:pb-[37%]">
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openLeaguerLueur}
                  src="/elements/lueur-leaguers.webp"
                  alt="leaguers"
                  className="absolute z-10 md:w-full 3xl:top-[-4rem] 3xl:w-full "
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openLeaguerLogoShadow}
                  src="/elements/skult-leaguers-icon-1.svg"
                  alt="Streamer"
                  className="absolute z-10 ml-[25%] w-[50%] md:top-[5rem] md:ml-[31%] md:w-[40%] xl:top-0 xl:ml-[25%] xl:w-[50%] 3xl:ml-[29%] 3xl:w-[40%]"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={openLeaguerLogo}
                  src="/elements/skult-leaguers-icon-2.svg"
                  alt="Streamer"
                  className="absolute z-10 ml-[25%] w-[50%] md:top-[5rem] md:ml-[31%] md:w-[40%] xl:top-0 xl:ml-[25%] xl:w-[50%] 3xl:ml-[29%] 3xl:w-[40%]"
                />
              </div>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={controls}
              variants={openAnyLeaguerText}
              className="bg-gradient-to-r from-[#7517F8] to-[#E323FF] bg-clip-text pb-10 text-center font-poppins text-[32px] font-semibold text-transparent 2xl:text-[48px]"
            >
              Anyone
            </motion.h2>
            <div className="xl:ml-10">
              <motion.div initial={{ opacity: 0 }} animate={controls} variants={openFunBlock}>
                <p className="font-poppins text-[18px] font-medium  text-[#a80cfb]">
                  Get fun while following your favorite Streamers
                </p>
                <p className="pb-5 font-poppins text-[18px] font-medium text-[#b8b8b8] ">
                  Enroll Streamer in your Team through their collectibles and participate in their exclusive and
                  personalized events!
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={controls} variants={openRewardsBlock}>
                <p className="font-poppins text-[18px] font-medium text-[#C820FD]">Play & Earn Rewards</p>
                <p className="pb-5 font-poppins text-[18px] font-medium text-[#b8b8b8] ">
                  Challenge other participants in SKULT immersive games, and get rewarded. Our first game is a Fantasy
                  League!
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={controls} variants={openEarnCashLeaguersBlock}>
                <p className="font-poppins text-[18px] font-medium text-[#e323ff] ">Earn Cash</p>
                <p className="mb-10 pb-5 font-poppins text-[18px] font-medium text-[#b8b8b8] ">
                  Keep you team strong and sell other Streamers you don't need: earn cash from collectible trading
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={controls} variants={openButtonLeaguerBlock}>
                <button
                  className={`relative rounded-full bg-gradient-to-l from-[#7517F8] to-[#E323ff] p-[3px] text-sm hover:scale-105`}
                >
                  <div className="relative flex flex-row rounded-full bg-[#262626] px-6 pt-3">
                    <div className={` pb-3  font-poppins text-[20px] text-[#a9a9a9]  `}>Let's Play</div>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-[-8rem] flex flex-row justify-center pt-10 4xl:pb-20">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 15, duration: 1 }}
          // onClick={() => console.log('Bravo!')}
          aria-hidden="true"
        >
          <motion.img
            src="./elements/skult-nft-icon.svg"
            alt="header"
            className=" absolute right-[39.5%] top-[8.5rem] z-20 mx-auto h-20 cursor-pointer transition duration-300 ease-in-out hover:scale-125 hover:invert xl:top-0 xl:right-[48.35%]"
          />
        </motion.div> */}
        <motion.img
          src="./elements/skyrroz.svg"
          alt="header"
          className="absolute top-[-3rem] z-30 mx-auto origin-bottom scale-50 md:top-0 md:scale-[0.8] xl:top-[10rem] xl:scale-[90%] 4xl:top-[17rem]"
        />
        <img
          src="./elements/natasha.svg"
          alt="header"
          className="absolute left-[21%] top-[-2rem] z-20 origin-bottom rotate-[18deg] scale-50 md:top-0 md:left-[35%] md:scale-[0.8] xl:left-[47%] xl:top-[12rem] xl:scale-[90%] 4xl:top-[18rem]"
        />
        <img
          src="./elements/waartex.svg"
          alt="header"
          className="absolute right-[21%] top-[-2rem] z-10 origin-bottom rotate-[350deg] scale-50 md:top-0 md:right-[37%] md:scale-[0.8] xl:right-[47%] xl:top-[12rem] xl:scale-[90%] 4xl:top-[18rem]"
        />
      </div>
      <img
        src="/elements/bas.webp"
        alt="Streamer"
        className="invisible relative left-0 bottom-0 w-full pb-20 xl:visible xl:pb-0"
      />
    </motion.div>
  );
};

export default StreamersLeaguersBlock;
