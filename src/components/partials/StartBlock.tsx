/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Landing.module.css';
import { motion } from 'framer-motion';

const StartBlock = () => {
  return (
    <div
      className="flex flex-col bg-[#222222] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/elements/bckground-1.webp")`,
      }}
    >
      <div className="relative py-40 px-40 3xl:px-96 3xl:pb-[18rem] 3xl:pt-[15rem]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}>
          <h1 className={`${styles.HomeTitle} pb-3 leading-none`}>Let's go</h1>
        </motion.div>
        <div className="w-1/2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5, duration: 1 }}>
            <h1 className={`${styles.HomeLittleTitle}`}>beyond Gameplay</h1>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
          <div className="mt-2 font-poppins text-[24px] font-light text-[#e7e7e7]">
            Streams can be much more than just a video!
          </div>
        </motion.div>
      </div>
      <img src="/elements/header-footer.webp" alt="header" className="relative z-20 w-screen" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 1 }}>
        <motion.img
          src="./elements/skyrroz.svg"
          alt="header"
          className="absolute right-96 top-60 z-30 h-80 scale-110 transition duration-200 ease-in-out 3xl:top-[18rem] 3xl:right-[31rem]"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6, duration: 1 }}>
        <img
          src="./elements/natasha.svg"
          alt="header"
          className="absolute right-[16rem] top-[17rem] z-20 h-80 rotate-[18deg] scale-110 transition duration-200 ease-in-out 3xl:top-[20rem] 3xl:right-[23rem]"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.5, duration: 1 }}>
        <img
          src="./elements/waartex.svg"
          alt="header"
          className="absolute right-[32rem] top-[18rem] z-10 h-80 rotate-[350deg] scale-110 transition duration-200 ease-in-out 3xl:top-[21rem] 3xl:right-[39rem]"
        />
      </motion.div>
    </div>
  );
};

export default StartBlock;
