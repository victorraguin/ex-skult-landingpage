/* eslint-disable max-len */
import React from 'react';
import styles from './Landing.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed z-50">
      <motion.img
        src="./elements/header.webp"
        alt="header"
        className="z-1 relative h-32 w-screen xl:h-48 2xl:h-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="z-2 absolute inset-0">
        <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ type: 'spring', stiffness: 40 }}>
          <Link href="#top" passHref>
            <img
              className="mx-10 mt-6 h-8 cursor-pointer transition  duration-100 ease-in-out  hover:scale-[1.05] md:mx-auto md:mt-5 xl:mx-auto xl:mt-7 xl:h-12 2xl:h-14 4xl:h-16"
              src={`./elements/SKULT.png`}
              alt="SKULT"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 1, type: 'spring', stiffness: 70 }}
          className="group"
        >
          <Link href="/streamer" passHref>
            <motion.button
              className={`
                ${styles.HeaderJoinDiscord} absolute top-[-2.6rem] right-[-2rem] scale-[0.6] rounded-full
                bg-gradient-to-br from-[#FFCC00] to-[#ED713C] p-0.5 text-sm
                transition
                duration-100 ease-in-out group-hover:scale-[0.65]
                md:right-[0rem] md:scale-[0.7] md:group-hover:scale-[0.75] xl:top-[-3rem]
                xl:right-20 xl:scale-[0.8]
                xl:group-hover:scale-[0.8] 2xl:scale-[0.9]
                2xl:group-hover:scale-[0.95] 3xl:scale-[0.95]
                3xl:group-hover:scale-[1] 4xl:scale-[1]  4xl:group-hover:scale-[1.05]
              `}
            >
              <motion.div className="relative flex flex-row rounded-full bg-[#262626] px-6 py-[8px]">
                <motion.div className="py-[6px] font-poppins text-[20px] font-light text-[#a9a9a9] group-hover:text-white">
                  I&apos;m a Streamer
                </motion.div>
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
