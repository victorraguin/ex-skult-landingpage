/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ContactForm } from './ContactForm';

const StreamerBlock = () => {
  return (
    <div className="h-full w-full bg-[#222222] pt-40 sm:pt-60">
      <div className="flex flex-row flex-wrap items-baseline justify-center gap-x-2 pb-20">
        <img
          src="https://skult-assets.s3.eu-west-3.amazonaws.com/SKULT_logo.png"
          alt="SKULT Logo"
          className="h-[40px]"
        />
        <div className="text-center font-poppins text-3xl font-light leading-none text-[#e7e7e7] xl:text-[36px] 2xl:text-[48px]">
          For
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal leading-none text-transparent">
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
            alt="SKULT Exclusive Events"
            className="mb-20 h-[120px] w-[95%] rotate-[-12deg] scale-90 px-5 sm:w-[100%] sm:scale-100 "
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
          <img
            src="https://skult-assets.s3.eu-west-3.amazonaws.com/SKULT-play-earn.svg"
            alt="SKULT Play and Earn"
            className="mb-20 h-[150px] px-5 "
          />
          <p className="font-base mx-auto pb-10 text-center font-poppins text-[22px] font-light text-[#e7e7e7]">
            Let your audience <span className="text-primary"> play games</span> while your streaming! Our first game:
            <span className="text-primary"> Fantasy Leagues</span>! Entertain your community with{' '}
            <span className="text-primary"> your in-game actions</span> and boost their score with crazy performances!
            <span className="text-primary"> Show them who’s the best!</span>
          </p>
        </div>
      </div>

      <img src="/Page_breaker1.svg" alt="Page Breaker" className="w-full" />
      <div className="bg-[#282828]">
        <div
          id="cash"
          className="text-center font-poppins text-[32px] font-light text-[#e7e7e7] sm:pt-10 xl:text-[36px] 2xl:text-[48px]"
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
              className="sm:scale-125 sm:px-5"
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
          Our games are designed for any Streamer to get an audience and for any Player to get rewarded
        </p>
      </div>
      <img src="/Page_breaker2.svg" alt="Page Breaker" className="w-full" />
      <div className="mx-auto flex flex-col justify-center pt-20 pb-40">
        <div className="text-center font-poppins text-[38px] font-light text-[#e7e7e7] xl:text-[36px] 2xl:text-[48px]">
          Come and
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            {' '}
            Play{' '}
          </span>
          With Us
        </div>
        <img
          src="https://skult-assets.s3.eu-west-3.amazonaws.com/SKULT_logo.png"
          alt="SKULT Logo"
          className="mx-auto scale-90 pb-20 sm:w-[20%]"
        />
        <div className="flex flex-col items-center space-y-4 font-poppins font-light text-[#e7e7e7]">
          <p className="text-4xl xl:text-3xl">Wanna know more about it?</p>
          <div className="my-auto flex max-w-2xl flex-row justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamerBlock;
