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
      <div className="relative px-10 pb-[18rem] xl:py-40 xl:px-40 3xl:px-96 3xl:pb-[18rem] 3xl:pt-[15rem]">
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
      </div>
      <img src="/elements/header-footer.webp" alt="header" className="relative z-20 w-screen" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }}>
        <motion.img
          src="./elements/skyrroz.svg"
          alt="header"
          className="absolute top-[14rem] right-[3.5rem] z-30 h-80 scale-75 transition duration-200 ease-in-out xl:top-60 xl:right-96 xl:scale-110 3xl:top-[18rem] 3xl:right-[31rem]"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.5 }}>
        <img
          src="./elements/natasha.svg"
          alt="header"
          className="absolute top-[15rem] right-[-1rem] z-20 h-80  rotate-[18deg] scale-75 transition duration-200 ease-in-out xl:right-[16rem] xl:scale-110 3xl:top-[20rem] 3xl:right-[23rem]"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 0.5 }}>
        <img
          src="./elements/waartex.svg"
          alt="header"
          className="absolute top-[16rem] right-[8rem] z-10 h-80 rotate-[350deg] scale-75 transition duration-200 ease-in-out xl:right-[32rem] xl:scale-110 3xl:top-[21rem] 3xl:right-[39rem]"
        />
      </motion.div>
    </div>
  );
};

export default StartBlock;
