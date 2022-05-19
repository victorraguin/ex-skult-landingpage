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
    <div className="h-full w-full bg-[#222222] pt-40">
      <div className="mx-auto flex flex-row justify-center pt-20">
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
      <div className="mx-auto flex flex-row flex-wrap justify-evenly pt-20 pb-20 sm:flex-nowrap">
        <div className="">
          <div className="flex h-[12rem] w-[15rem] flex-col rounded-xl  border-[2px] p-4 pt-2 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[32px] 2xl:text-[36px]">
            Increase your
            <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
              {' '}
              Visibility
            </span>
          </div>
        </div>
        <div className=" flex h-[12rem] w-[15rem] flex-col  rounded-xl  border-[2px] p-4 pt-2">
          <div className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text text-center font-poppins text-[32px] font-normal text-transparent xl:text-[32px] 2xl:text-[36px]">
            Engage
            <span className="font-light text-white"> Your Audience</span>
          </div>
        </div>
        <div className=" flex h-[12rem] w-[15rem] flex-col  rounded-xl  border-[2px] p-4 pt-2">
          <div className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text pt-4 text-center font-poppins text-[32px] font-normal text-transparent xl:text-[32px] 2xl:text-[36px]">
            Earn
            <div className="pt-4 font-light text-white">Cash</div>
          </div>
        </div>
      </div>
      <div className="mx-40 flex flex-row flex-wrap justify-evenly pt-20 pb-20 sm:flex-nowrap">
        <div className="mx-auto flex w-[33%] flex-col flex-wrap pt-20 pb-20 sm:flex-nowrap">
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
        <div className="mx-auto flex w-[33%] flex-col flex-wrap pt-20 pb-20 sm:flex-nowrap">
          <div className="pb-20 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[32px] 2xl:text-[36px]">
            Play &
            <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
              {' '}
              Earn{' '}
            </span>
          </div>
          <img
            src="https://skult-assets.s3.eu-west-3.amazonaws.com/skult-event-ticket.svg"
            alt="SKULT Logo"
            className="mb-20 h-[120px] rotate-[-12deg] px-5 "
          />
          <p className="font-base mx-auto pb-10 text-center font-poppins text-[22px] font-light text-[#e7e7e7]">
            Let your audience <span className="text-primary"> play games</span> while your streaming! Our first game:
            <span className="text-primary"> Fantasy Leagues</span>! Entertain your community with{' '}
            <span className="text-primary"> your in-game actions</span> and boost their score with crazy performances!
            <span className="text-primary"> Show them who’s the best!</span>
          </p>
        </div>
      </div>
      <div className="pt-20 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[36px] 2xl:text-[48px]">
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
      <div className="mx-40 flex flex-row flex-wrap justify-evenly pt-20 sm:flex-nowrap">
        <div className="mx-auto flex w-[45%] flex-col flex-wrap pt-20 sm:flex-nowrap">
          <div className="text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[32px] 2xl:text-[36px]">
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
            className="px-5 "
          />
        </div>
        <div className="mx-auto flex w-[33%] flex-col flex-wrap pt-20 pb-20 sm:flex-nowrap">
          <div className="pb-20 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[32px] 2xl:text-[36px]">
            For Every Card you Sold
            <div className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
              {' '}
              You Get:{' '}
            </div>
          </div>
          <p className="font-base mx-auto text-left font-poppins text-[28px] font-light text-[#e7e7e7]">
            <span className="text-primary">Legend:</span> 25% 🔥 🔥 🔥
            <br /> <span className="text-primary">Hero:</span> 15% 🔥 🔥
            <br />
            <span className="text-primary">Rookie:</span> 10% 🔥
          </p>
        </div>
      </div>
      <p className="font-base mx-auto pb-10 text-center font-poppins text-[22px] font-light text-[#e7e7e7]">
        Our games however, are designed for any Streamer to get an audience and for any Player to get rewarded
      </p>
      <div className="mx-auto flex flex-col justify-center pt-40">
        <div className="text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[36px] 2xl:text-[48px]">
          Come and Play With
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            {' '}
            Us
          </span>
        </div>
        <img
          src="https://skult-assets.s3.eu-west-3.amazonaws.com/SKULT_logo.png"
          alt="SKULT Logo"
          className="mx-auto w-[20%] pb-20"
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
                className="mx-4 hidden w-40 rounded-lg border-b border-[#a9a9a9] bg-[#222222] p-2 pb-2 font-light text-[#a9a9a9] focus:outline-none sm:inline-block md:w-80 xl:w-80"
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
