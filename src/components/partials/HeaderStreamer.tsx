/* eslint-disable max-len */
import React from 'react';
import DiscordButton from './images/DiscordButton';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed z-50">
      <motion.img
        src="./elements/header.webp"
        alt="header"
        className="z-1 relative inset-0 h-32 w-screen md:top-[-5px] xl:top-[-20px] xl:h-auto xl:w-screen 3xl:top-[-55px] 4xl:top-[-90px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 1, type: 'spring', stiffness: 70 }}
        className="absolute top-[15px] left-7 z-20 sm:top-[26px] sm:left-20"
      >
        <Link href="/" passHref>
          <motion.button
            className={` group  bottom-0
            left-10 scale-[0.7] rounded-full bg-gradient-to-br from-[#FFCC00] to-[#ED713C] p-0.5 shadow-[0_0_15px_-3px_#ffcc00cf] transition transition  duration-200 duration-100 ease-in-out ease-in-out hover:bg-gradient-to-b hover:shadow-[0_0_25px_-3px_#ffcc00cf] sm:scale-[0.9]`}
          >
            <motion.div className=" flex flex-row rounded-full bg-[#262626] px-3 py-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#262626"
                stroke="#A9A9A9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-left-circle group-hover:stroke-white"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 8 8 12 12 16"></polyline>
                <line x1="16" y1="12" x2="8" y2="12"></line>
              </svg>
            </motion.div>
          </motion.button>
        </Link>
      </motion.div>
      <div className="z-2 absolute inset-0">
        <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ type: 'spring', stiffness: 40 }}>
          <Link href="#top" passHref>
            <img
              className=" mx-auto mt-6 h-8 cursor-pointer transition  duration-100 ease-in-out  md:mx-auto md:mt-5 xl:mx-auto xl:mt-7 xl:h-12 2xl:h-14 4xl:h-16"
              src={`./elements/SKULT.png`}
              alt="SKULT"
            />
          </Link>
        </motion.div>
        <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 1, type: 'spring', stiffness: 70 }}>
          <a href="https://discord.gg/fJvrQCJr4W" target="_blank" rel="noopener noreferrer">
            <motion.button
              className={`group absolute top-[-2.25rem] right-[1.5rem] scale-[0.8] rounded-full bg-gradient-to-br from-[#FFCC00] to-[#ED713C] p-0.5 text-sm shadow-[0_0_15px_-3px_#ffcc00cf]  transition duration-200 ease-in-out hover:bg-gradient-to-b hover:shadow-[0_0_25px_-3px_#ffcc00cf] sm:right-[-2rem] md:right-[0rem]  md:scale-[0.7]  xl:top-[-3.3rem]
              xl:right-20 xl:scale-[0.8] 2xl:scale-[0.9] 3xl:scale-[0.95]`}
            >
              <motion.div className="relative flex flex-row rounded-full bg-[#262626] px-3 pt-2">
                <DiscordButton fill="" className="fill-[#A9A9A9] group-hover:fill-white" />
                <motion.div
                  className={`hidden pt-1.5 pl-2 font-poppins text-[20px] font-light text-[#a9a9a9] group-hover:brightness-150 sm:flex`}
                >
                  Join the Discord
                </motion.div>
              </motion.div>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
