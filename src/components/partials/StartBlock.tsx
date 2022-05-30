/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Landing.module.css';
import { motion } from 'framer-motion';
import DiscordButton from './images/DiscordButton';
import Link from 'next/link';

const StartBlock = () => {
  return (
    <div
      className="bg-[#222222] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/elements/bckground-1.webp")`,
      }}
    >
      <div className="flex flex-row flex-wrap">
        <div className="flex  flex-col">
          <div id="top" className="relative md:py-10 xl:py-60 3xl:pb-[25rem] 3xl:pt-[15rem]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
              <h1 className={`${styles.HomeTitle} pb-3 leading-none`}>Let's go</h1>
            </motion.div>
            <div className="xl:w-1/2">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
                <h1 className={`${styles.HomeLittleTitle}`}>beyond Gameplay</h1>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
              <div className="mt-2 font-poppins text-[18px] font-light text-[#e7e7e7] xl:text-[24px]">
                Streams can be much more than just a video!
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}>
              <a href="https://discord.gg/fJvrQCJr4W" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className={`mt-4 scale-[0.6] rounded-full bg-gradient-to-br from-[#FFCC00] to-[#ED713C] p-0.5 text-sm hover:scale-[0.65] md:scale-[0.7] md:hover:scale-[0.75] xl:scale-[0.8] xl:hover:scale-[0.85] 2xl:scale-[0.9] 2xl:hover:scale-[0.95] 3xl:scale-[0.95] 3xl:hover:scale-[1] 4xl:hover:scale-[1.05]`}
                >
                  <motion.div className="group relative flex flex-row rounded-full bg-[#262626] px-6 pt-2">
                    <DiscordButton fill="#fff" />
                    <motion.div
                      className={`pt-1.5 pl-2 font-poppins text-[20px] font-light text-[#a9a9a9] group-hover:brightness-150`}
                    >
                      Join the Discord
                    </motion.div>
                  </motion.div>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          src="/skult-streamer-cards.png"
          alt="SKULT Streamer Cards"
          className="my-auto mx-auto h-[210px] w-[321px]"
        />
      </div>
      <img src="/elements/header-footer.webp" alt="Header Footer" className="relative z-20 w-screen" />
    </div>
  );
};

export default StartBlock;
