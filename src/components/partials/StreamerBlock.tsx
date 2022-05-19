/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StreamerBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const CardContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      duration: 0.25,
      transition: {
        delayChildren: 0.25,
        duration: 0.25,
        staggerChildren: 0.5,
      },
    },
  };

  const CardItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="h-full w-full bg-[#222222] px-10 pt-40 sm:px-0">
      <div className="mx-auto  flex flex-row flex-wrap justify-center sm:pt-20">
        <img
          src="https://skult-assets.s3.eu-west-3.amazonaws.com/SKULT_logo.png"
          alt="SKULT Logo"
          className="h-[60px] px-5"
        />
        <div className="mt-1 pb-20 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[36px] 2xl:text-[48px]">
          For
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            {' '}
            Streamers
          </span>
        </div>
      </div>
      <div className="mx-auto flex flex-row flex-wrap justify-evenly pb-20 sm:flex-nowrap sm:pt-20">
        <div className="my-5 flex h-[12rem] w-[15rem] flex-col  rounded-[15px] border-[1px] border-[#464646]  p-4  pt-6 text-center font-poppins text-[32px] font-light text-[#e7e7e7] shadow-md  shadow-black sm:my-0 sm:pt-2 xl:text-[32px] 2xl:text-[36px]">
          Increase your
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            {' '}
            Visibility
          </span>
        </div>
        <div className=" my-5 flex h-[12rem] w-[15rem] flex-col rounded-[15px] border-[1px] border-[#464646] p-4 pt-[3rem] shadow-md shadow-black sm:my-0 sm:pt-2">
          <div className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text text-center font-poppins text-[32px] font-normal text-transparent xl:text-[32px] 2xl:text-[36px]">
            Engage
            <span className="font-light text-white"> Your Audience</span>
          </div>
        </div>
        <div className=" my-5 flex h-[12rem] w-[15rem] flex-col rounded-[15px] border-[1px] border-[#464646] p-4 pt-4 shadow-md shadow-black sm:my-0">
          <div className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text pt-4 text-center font-poppins text-[32px] font-normal text-transparent  xl:text-[32px] 2xl:text-[36px] ">
            Earn
            <div className="pt-4 font-light text-white">Cash</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly pb-20 sm:mx-40 sm:flex-nowrap sm:pt-10">
        <div className="mx-auto flex flex-col flex-wrap pt-20 pb-20 sm:w-[33%] sm:flex-nowrap">
          <div className="pb-20 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[32px] 2xl:text-[36px]">
            Create
            <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
              {' '}
              Exclusive{' '}
            </span>
            Events
          </div>
          <img
            src="https://skult-assets.s3.eu-west-3.amazonaws.com/skult-event-ticket.svg"
            alt="SKULT Logo"
            className="mb-20 h-[120px] rotate-[-12deg] px-5 "
          />
          <p className="font-base mx-auto pb-10 text-center font-poppins text-[22px] font-light text-[#e7e7e7]">
            We will provide you with the toolbox<span className="text-primary"> to generate unique events</span> for
            your community. <span className="text-primary">YOU</span> decide who can join the events that{' '}
            <span className="text-primary">YOU</span> created! <span className="text-primary">Reward</span> your
            loyaliest fans with engaging and interactive experiences.
          </p>
        </div>
        <div className="mx-auto flex flex-col flex-wrap pt-20 pb-20 sm:w-[33%] sm:flex-nowrap">
          <div className="pb-10 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[32px] 2xl:text-[36px]">
            Play &
            <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
              {' '}
              Earn{' '}
            </span>
          </div>
          <img src="/skult-play-earn.svg" alt="SKULT Logo" className="mb-20 h-[150px] px-5 " />
          <p className="font-base mx-auto pb-10 text-center font-poppins text-[22px] font-light text-[#e7e7e7]">
            Let your audience <span className="text-primary"> play games</span> while your streaming! Our first game:
            <span className="text-primary"> Fantasy Leagues</span>! Entertain your community with{' '}
            <span className="text-primary"> your in-game actions</span> and boost their score with crazy performances!
            <span className="text-primary"> Show them who’s the best!</span>
          </p>
        </div>
      </div>
      <div
        id="cash"
        className="text-center font-poppins text-[32px] font-light text-[#e7e7e7] sm:pt-20 xl:text-[36px] 2xl:text-[48px]"
      >
        The More You Go
        <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
          {' '}
          Up the Ladder{' '}
        </span>
        The
        <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
          {' '}
          More you Earn
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly sm:mx-40 sm:flex-nowrap">
        <div className="flex flex-col flex-wrap pt-20 sm:mx-auto sm:w-[45%] sm:flex-nowrap">
          <div className="text-center font-poppins text-[28px] font-light text-[#e7e7e7] sm:mx-10 xl:text-[32px] 2xl:text-[36px]">
            Streamer
            <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
              {' '}
              Ranks{' '}
            </span>
            Based on{' '}
            <div className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
              {' '}
              Your Popularity
            </div>
          </div>
          <img
            src="https://skult-assets.s3.eu-west-3.amazonaws.com/SKULT_rank.svg"
            alt="SKULT Logo"
            className="scale-125 sm:px-5"
          />
        </div>
        <div className="mx-auto flex flex-col flex-wrap pb-20 sm:w-[33%] sm:flex-nowrap sm:pt-20 xl:w-[45%] 2xl:w-[33%]">
          <div className="pb-10 pt-10 text-center  font-poppins text-[28px] font-light text-[#e7e7e7] sm:pt-0 sm:pb-0 xl:text-[32px] 2xl:text-[36px]">
            For Every Card you Sold
            <div className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
              {' '}
              You Get:{' '}
            </div>
          </div>
          <p className="font-base mx-auto text-left font-poppins text-[28px] font-light text-[#e7e7e7]">
            <div className="my-2 rounded-[15px] border-[1px] border-[#464646] p-2  text-center text-[35px] shadow-sm shadow-black">
              <span className="text-[28px] text-primary">Legend:</span> 25%
            </div>
            <div className="my-2 rounded-[15px] border-[1px] border-[#464646] p-2  text-center text-[32px] shadow-sm shadow-black">
              <span className="text-[28px] text-primary ">Hero:</span> 15%
            </div>
            <div className="my-2 w-60 rounded-[15px] border-[1px] border-[#464646] p-2 text-center text-[28px] shadow-sm shadow-black">
              <span className="text-[28px] text-primary ">Rookie:</span> 10%
            </div>
          </p>
        </div>
      </div>
      <p className="font-base mx-auto text-center font-poppins text-[22px] font-light text-[#e7e7e7] sm:pb-10">
        Our games however, are designed for any Streamer to get an audience and for any Player to get rewarded
      </p>
      <div className="mx-auto flex flex-col justify-center pt-40">
        <div className="text-center font-poppins text-[38px] font-light text-[#e7e7e7] xl:text-[36px] 2xl:text-[48px]">
          Come and Play With
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            {' '}
            Us
          </span>
        </div>
        <img
          src="https://skult-assets.s3.eu-west-3.amazonaws.com/SKULT_logo.png"
          alt="SKULT Logo"
          className="mx-auto scale-90 pb-20 sm:w-[20%]"
        />
        <div className="text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[32px]">
          Wanna know more about it ?
          <div className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            {' '}
            Enter your email!
          </div>
          <div className="pb-40">
            <form>
              <input
                className="mx-4 w-60 rounded-lg border-b border-[#a9a9a9] bg-[#222222] p-2 pb-2 font-light text-[#a9a9a9] sm:w-80 sm:w-40  md:w-80 xl:w-80"
                type="email"
                name="email"
                defaultValue="Your Email"
              />
              <input
                type="submit"
                value="Bonjour"
                className="pfont-light mx-4 mt-4 cursor-pointer rounded-full border border-[#a9a9a9] bg-[#222222] py-1 px-4 text-[#a9a9a9] hover:scale-105 hover:brightness-150"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamerBlock;
