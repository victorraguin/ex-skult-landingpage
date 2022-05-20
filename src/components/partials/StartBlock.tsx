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
      <div className="relative px-10 pb-[18rem] md:py-10 xl:px-[10%] xl:py-60 2xl:px-[18%] 3xl:px-[18%] 3xl:pb-[25rem] 3xl:pt-[15rem] 4xl:px-[25%]">
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
      <img src="/elements/header-footer.webp" alt="Header Footer" className="relative z-20 w-screen" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }}>
        <motion.img
          src="./elements/skyrroz.svg"
          alt="Skyrroz"
          className="absolute top-[14rem] right-[3.5rem] z-30 h-80 scale-50 transition duration-200 ease-in-out md:top-[1rem] md:scale-[0.6] lg:top-0 xl:top-60 xl:right-60 xl:scale-100 2xl:top-[14rem] 2xl:right-[20rem] 3xl:top-[18rem] 3xl:right-[31rem] 4xl:right-[39rem]"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.5 }}>
        <img
          src="./elements/natasha.svg"
          alt="Natasha"
          className="absolute top-[15rem] right-[-1rem] z-20 h-80  rotate-[18deg] scale-50 transition duration-200 ease-in-out md:top-[2rem] md:scale-[0.6] xl:top-60 xl:right-[8rem] xl:scale-100 2xl:right-[13rem] 3xl:top-[20rem] 3xl:right-[23rem] 4xl:right-[31rem]"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 0.5 }}>
        <img
          src="./elements/waartex.svg"
          alt="Waartex"
          className="absolute top-[16rem] right-[8rem] z-10 h-80 rotate-[350deg] scale-50 transition duration-200 ease-in-out md:top-[2rem] md:scale-[0.6] xl:top-60 xl:right-[22rem] xl:scale-100 2xl:right-[28rem] 3xl:top-[21rem] 3xl:right-[39rem] 4xl:right-[47rem]"
        />
      </motion.div>
    </div>
  );
};

export default StartBlock;
