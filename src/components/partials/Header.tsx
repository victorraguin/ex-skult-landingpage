/* eslint-disable max-len */
import React from 'react';
import styles from './Landing.module.css';
import DiscordButton from './images/DiscordButton';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="fixed z-50">
      <motion.img
        src="./elements/header.webp"
        alt="header"
        className="z-1 relative inset-0 h-32 w-screen xl:top-[-12px] xl:h-auto xl:w-screen 3xl:top-[-40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="z-2 absolute inset-0">
        <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ type: 'spring', stiffness: 40 }}>
          <img className="mx-10 mt-6 h-8 xl:mx-auto xl:mt-10 xl:h-14" src={`./elements/logo-skult.png`} alt="SKULT" />
        </motion.div>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.75, type: 'spring', stiffness: 70 }}
        >
          <motion.button
            className={`${styles.HeaderJoinDiscord} absolute top-[-2.6rem] right-[-2rem] scale-[60%] rounded-full bg-gradient-to-br from-[#FFCC00] to-[#ED713C] p-0.5 text-sm hover:scale-105 xl:top-[-3rem] xl:right-20 xl:scale-100`}
          >
            <motion.div className="relative flex flex-row rounded-full bg-[#262626] px-6 pt-[8px]">
              <DiscordButton fill={'#fff'} />
              <motion.div className={`pt-[6px] pl-2 font-poppins text-[20px] font-light text-[#a9a9a9]`}>
                Join the Discord
              </motion.div>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
