/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Landing.module.css';
import { motion } from 'framer-motion';
import DiscordButton from './images/DiscordButton';

const StartBlock = () => {
  return (
    <div
      className="bg-[#222222] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/elements/bckground-1.webp")`,
      }}
      id="top"
    >
      <div className="flex flex-row flex-wrap px-10 sm:flex-nowrap md:py-10 xl:px-[12rem] xl:pt-[9rem] xl:pb-[10rem] 3xl:px-[24rem] 3xl:pb-[15rem] 3xl:pt-[13rem] 4xl:px-[35rem]">
        <div className="flex flex-col sm:w-1/2">
          <motion.h1
            className={`${styles.HomeTitle} pb-3 leading-none`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Let's go
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className={`${styles.HomeLittleTitle}`}
          >
            beyond Gameplay
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-2 font-poppins text-[18px] font-light text-[#e7e7e7] xl:text-[24px]"
          >
            Streams can be much more than just a video!
          </motion.h2>
          <div className="">
            <a href="https://discord.gg/fJvrQCJr4W" target="_blank" rel="noreferrer" className="group">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className={`mt-5 rounded-full
                bg-gradient-to-br from-[#FFCC00]  to-[#ED713C] p-0.5 text-sm shadow-[0_0_15px_-3px_#ffcc00cf] transition duration-200 ease-in-out hover:bg-gradient-to-b hover:shadow-[0_0_25px_-3px_#ffcc00cf] md:scale-[0.7]  xl:scale-[0.9] 2xl:scale-[1]`}
              >
                <motion.div className="group relative flex flex-row rounded-full bg-[#262626] px-6 pt-2">
                  <DiscordButton fill="#fff" />
                  <motion.div
                    className={`hidden pt-1 pl-2 font-poppins text-[20px] font-light text-[#a9a9a9] group-hover:brightness-150 sm:flex sm:pt-1.5`}
                  >
                    Join the Discord
                  </motion.div>
                </motion.div>
              </motion.button>
            </a>
          </div>
        </div>
        <div className="my-auto sm:w-1/2">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            src="https://cdn.skult.gg/Landing+Page/skult-streamer-cards.png"
            alt="SKULT Streamer Cards"
            className="xl:mt-[5rem] xl:scale-[90%] 3xl:mt-[3rem] 3xl:ml-10 3xl:scale-[90%]"
          />
        </div>
      </div>
      <img src="/elements/header-footer.webp" alt="Header Footer" className="relative z-20 w-screen" />
    </div>
  );
};

export default StartBlock;
