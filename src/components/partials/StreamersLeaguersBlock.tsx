/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion, AnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Modal } from '@mui/material';
import DiscordButton from './images/DiscordButton';

const StreamersLeaguersBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const openTitleText = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const [isLeaguerModalOpen, setIsLeaguerModalOpen] = React.useState(false);
  const closeLeaguerModal = () => setIsLeaguerModalOpen(false);

  return (
    <>
      <motion.div className="relative flex flex-col flex-wrap bg-[#282828] pt-20 2xl:pt-20 3xl:pt-20" ref={ref}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openTitleText}
          id="Streamer-Anybody"
          className="relative mx-auto flex flex-row bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-poppins text-[32px] font-normal text-transparent xl:text-[36px] 2xl:text-[48px]"
        >
          Nobody
          <p className="pl-2 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[36px] 2xl:text-[48px]">
            {' '}
            is Left Behind!
          </p>
        </motion.h1>
        <div className="mx-5 flex flex-row flex-wrap justify-around gap-y-20 pt-[4.5rem] xl:mx-0 xl:flex-nowrap 2xl:pt-[8rem] 4xl:pt-[12rem]">
          <Streamer controls={controls} />
          <Leaguer controls={controls} setIsLeaguerModalOpen={setIsLeaguerModalOpen} />
        </div>
        <div className="pb-20 2xl:pb-40"></div>
      </motion.div>

      <LeaguerModal open={isLeaguerModalOpen} handleClose={closeLeaguerModal} />
    </>
  );
};

export default StreamersLeaguersBlock;

const LeaguerModal = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => (
  <Modal open={open} onClose={handleClose} onBackdropClick={handleClose}>
    <div className="absolute inset-0 m-auto h-max w-96 items-center space-y-8 rounded-xl bg-[#222] p-8 text-white">
      <h2 className="bg-gradient-to-r from-[#7517F8] to-[#E323FF] bg-clip-text text-center text-2xl font-semibold text-transparent">
        Join our Discord!
      </h2>
      <div className="space-y-1">
        <p>Hey, thanks for your interest!</p>
        <p>We're COMING SOON!</p>
        <p>To be updated, join our Discord</p>
      </div>
      <div>
        <a href="https://discord.gg/fJvrQCJr4W" target="_blank" rel="noopener noreferrer" className="font-semibold">
          <div className="flex flex-shrink flex-row items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-[#7517F8] to-[#E323FF] pt-2 hover:brightness-110">
            <DiscordButton fill="white" />
            <span className="pb-1">SKULT Community</span>
          </div>
        </a>
      </div>
    </div>
  </Modal>
);

const Streamer = ({ controls }: { controls: AnimationControls }) => {
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

  const openEarnCashStreamersBlock = {
    visible: { opacity: 1, transition: { delay: 1.8, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openButtonStreamerBlock = {
    visible: { opacity: 1, transition: { delay: 2.1, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openCommunityBlock = {
    visible: { opacity: 1, transition: { delay: 1.2, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openEngagementBlock = {
    visible: { opacity: 1, transition: { delay: 1.5, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <div className="max-w-xl">
      <div className="pb-[44%] xl:pb-[47%] 2xl:pb-[46%] 3xl:pb-[39%] 4xl:pb-[37%]">
        <div className="relative">
          <motion.img
            initial={{ opacity: 0 }}
            animate={controls}
            variants={openStreamerLueur}
            src="/elements/lueur-streamer.webp"
            alt="Streamer Lueur 1"
            className="absolute z-10 w-full 3xl:top-[-4rem]"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={controls}
            variants={openStreamerLogoShadow}
            src="/elements/skult-streamer-icon-2.svg"
            alt="Streamer Icon Shadow"
            className="absolute z-10 ml-[25%] w-[50%] md:top-[4rem] md:ml-[31%] md:w-[40%] xl:top-0 xl:ml-[25%] xl:w-[50%] 3xl:ml-[29%] 3xl:w-[40%]"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={controls}
            variants={openStreamerLogo}
            src="/elements/skult-streamer-icon-1.svg"
            alt="Streamer Icon"
            className="absolute z-10 ml-[25%] w-[50%] md:top-[4rem] md:ml-[31%] md:w-[40%] xl:top-0 xl:ml-[25%] xl:w-[50%] 3xl:ml-[29%] 3xl:w-[40%]"
          />
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openAnyStreamerText}
        className=" bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text pt-5 pb-10 text-center font-poppins text-[32px] font-semibold text-transparent 2xl:text-[48px]"
      >
        Any Streamer
      </motion.h2>
      <div className="h-96 space-y-4 sm:space-y-8">
        <motion.div initial={{ opacity: 0 }} animate={controls} variants={openCommunityBlock} className="xl:h-20">
          <p className="font-poppins text-[18px] font-medium text-primary">Develop your Community</p>
          <p className="font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Get discovered thanks to level-based games: any Streamer can get an audience!
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={controls} variants={openEngagementBlock} className="xl:h-20">
          <p className="font-poppins text-[18px] font-medium text-[#f49124]">Boost Engagement</p>
          <p className="font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Grow your fan base and increase interactions with your followers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openEarnCashStreamersBlock}
          className="xl:h-20"
        >
          <p className="font-poppins text-[18px] font-medium text-[#ed713c]">Earn Cash</p>
          <p className="font-poppins text-[18px] font-medium text-[#b8b8b8]">
            From your cards and your in-game actions. The better you play and the best you entertain your fans, the more
            valuable you are!
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openButtonStreamerBlock}
        className="xl:pt-8 xl:pb-0 2xl:pt-2 3xl:pt-0"
      >
        <button
          className={`group relative rounded-full bg-gradient-to-r from-[#FFCC00] to-[#ED713C] p-[3px] text-sm transition duration-100 ease-in-out hover:scale-105`}
        >
          <div className="relative flex flex-row rounded-full bg-[#262626] px-6 pt-3">
            <Link href="/streamer" passHref>
              <div className="pb-3 font-poppins text-[20px] text-[#a9a9a9] group-hover:brightness-150">
                I'm a Streamer!
              </div>
            </Link>
          </div>
        </button>
      </motion.div>
    </div>
  );
};

const Leaguer = ({
  controls,
  setIsLeaguerModalOpen,
}: {
  controls: AnimationControls;
  setIsLeaguerModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  const openFunBlock = {
    visible: { opacity: 1, transition: { delay: 1.2, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openRewardsBlock = {
    visible: { opacity: 1, transition: { delay: 1.5, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openEarnCashLeaguersBlock = {
    visible: { opacity: 1, transition: { delay: 1.8, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openButtonLeaguerBlock = {
    visible: { opacity: 1, transition: { delay: 2.1, duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <div className="max-w-xl">
      <div className="xl:left-[-20%] xl:mx-0">
        <div className="pb-[44%] md:pb-[46%] xl:pb-[47%] 2xl:pb-[46%] 3xl:pb-[39%] 4xl:pb-[37%]">
          <div className="relative">
            <motion.img
              initial={{ opacity: 0 }}
              animate={controls}
              variants={openLeaguerLueur}
              src="/elements/lueur-leaguers.webp"
              alt="Anyone"
              className="absolute z-10 w-full 3xl:top-[-4rem] "
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={controls}
              variants={openLeaguerLogoShadow}
              src="/elements/skult-leaguers-icon-1.svg"
              alt="Anyone Icon Shadow"
              className="absolute z-10 ml-[25%] w-[50%] md:top-[5rem] md:ml-[31%] md:w-[40%] xl:top-0 xl:ml-[25%] xl:w-[50%] 3xl:ml-[29%] 3xl:w-[40%]"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={controls}
              variants={openLeaguerLogo}
              src="/elements/skult-leaguers-icon-2.svg"
              alt="Anyone Icon"
              className="absolute z-10 ml-[25%] w-[50%] md:top-[5rem] md:ml-[31%] md:w-[40%] xl:top-0 xl:ml-[25%] xl:w-[50%] 3xl:ml-[29%] 3xl:w-[40%]"
            />
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openAnyLeaguerText}
          className="bg-gradient-to-r from-[#E323FF] to-[#7517F8] bg-clip-text pt-5 pb-10 text-center font-poppins text-[32px] font-semibold text-transparent 2xl:text-[48px]"
        >
          Anyone
        </motion.h2>
        <div className="xl:ml-10">
          <div className="h-96 space-y-4 sm:space-y-8">
            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openFunBlock} className="xl:h-20">
              <p className="font-poppins text-[18px] font-medium  text-[#e323ff]">
                Get fun while following your favorite Streamers
              </p>
              <p className="font-poppins text-[18px] font-medium text-[#b8b8b8] ">
                Enroll Streamers in your Team through their cards and participate in their exclusive and personalized
                events!
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={controls} variants={openRewardsBlock} className="xl:h-20">
              <p className="font-poppins text-[18px] font-medium text-[#C820FD]">Play & Earn Rewards</p>
              <p className="font-poppins text-[18px] font-medium text-[#b8b8b8] ">
                Challenge other participants in SKULT immersive games, and get rewarded. Our first game is a Fantasy
                League!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={controls}
              variants={openEarnCashLeaguersBlock}
              className="xl:h-20"
            >
              <p className="font-poppins text-[18px] font-medium text-[#a80cfb] ">Earn Cash</p>
              <p className="font-poppins text-[18px] font-medium text-[#b8b8b8] ">
                Keep your team strong and sell other Streamers you don't need: earn cash from card trading
              </p>
            </motion.div>
          </div>
          <motion.div
            className="pt-5 xl:pt-8 xl:pb-0 2xl:pt-2 3xl:pt-0"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={openButtonLeaguerBlock}
          >
            <button
              onClick={() => setIsLeaguerModalOpen(true)}
              className={`group relative rounded-full bg-gradient-to-l from-[#7517F8] to-[#E323ff] p-[3px] text-sm transition  duration-100 ease-in-out hover:scale-105`}
            >
              <div className="relative flex flex-row rounded-full bg-[#262626] px-6 pt-3">
                <div className="pb-3 font-poppins text-[20px] text-[#a9a9a9] group-hover:brightness-150">
                  Let's Play
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
