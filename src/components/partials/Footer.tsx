/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

const Footer = () => {
  return (
    <div className="mx-1 flex flex-row flex-wrap justify-around 2xl:mx-5 3xl:xl:mx-10">
      <div className="mx-auto hidden w-[15rem] flex-col sm:mx-4 md:inline lg:mx-0 xl:py-4 2xl:mx-0 3xl:mx-4">
        <img className="m-4 mb-0 h-[3rem]" src={`./elements/logo-skult.png`} alt="User" />
        <p className="pt-2 text-center font-poppins text-[15px] text-white ">© 2022 - SKULT</p>
      </div>
      <a
        target="_blank"
        className="my-auto cursor-pointer pt-4 text-primary hover:underline"
        href="https://vivid-tadpole-074.notion.site/Job-Board-a686e214017142d08fb73cf1f83ca4ad"
        rel="noopener noreferrer"
      >
        <p className=" text-center text-primary md:pt-0">Oh, and by the way, we're hiring! Check this out!</p>
      </a>
      <div className="flex flex-row pb-5 lg:pt-10 xl:mx-0">
        <form>
          <input
            className="mx-4 hidden w-40 border-b border-[#a9a9a9] bg-[#222222] pb-2 font-light text-[#a9a9a9] focus:outline-none sm:inline-block md:w-80 xl:w-80"
            type="email"
            name="email"
            defaultValue="Subscribe to our Newsletter"
          />
          <input
            className=" mx-4 w-40 border-b border-[#a9a9a9] bg-[#222222] pb-2 font-light text-[#a9a9a9] focus:outline-none sm:hidden md:w-80 xl:w-80"
            type="email"
            name="email"
            defaultValue="Our Newsletter"
          />
          <input
            type="submit"
            value="Subscribe"
            className="mx-4 cursor-pointer rounded-full border border-[#a9a9a9] bg-[#222222] p-2 px-4 font-light text-[#a9a9a9] hover:scale-105 hover:brightness-150"
          />
        </form>
      </div>
      <div className="flex flex-row flex-wrap pb-5">
        <img
          src="./elements/social/discord.svg"
          className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem] "
          alt="Discord"
        />
        <img
          src="./elements/social/facebook.svg"
          className="m-auto mx-1 h-[3rem]  cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
          alt="Facebook"
        />
        <img
          src="./elements/social/instagram.svg"
          className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
          alt="Instagram"
        />
        <img
          src="./elements/social/reddit.svg"
          className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
          alt="Reddit"
        />
        <img
          src="./elements/social/twitter-test.svg"
          className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
          alt="Twitter"
        />
        <img
          src="./elements/social/medium.svg"
          className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
          alt="Medium"
        />
      </div>
    </div>
  );
};

export default Footer;
