/* eslint-disable max-len */
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-row flex-wrap xl:mx-20 xl:h-[8rem]">
      <div className="mx-auto flex w-[15rem] flex-col xl:mx-4 xl:pt-5">
        <img className="m-4 mb-0 hidden h-[3rem] xl:inline" src={`./elements/logo-skult.png`} alt="User" />
        <p className="hidden pt-2 text-center font-poppins text-[15px] text-white xl:inline">© 2022 - SKULT</p>
      </div>
      <div className="mx-5 flex flex-col pt-10 xl:mx-0 ">
        <form>
          <input
            className="mx-4 border-b border-[#a9a9a9] bg-[#222222] font-light text-[#a9a9a9] focus:bg-[#252525]"
            type="email"
            name="email"
            defaultValue="Your Email..."
          />
          <input
            type="submit"
            value="Subscribe"
            className="mx-4 cursor-pointer rounded-full border border-[#a9a9a9] bg-[#222222] p-2 font-light text-[#a9a9a9] hover:scale-105"
          />
        </form>
      </div>
      <div className="flex flex-row flex-wrap pb-5 2xl:ml-[25%]">
        <img
          src="./elements/social/discord.svg"
          className="m-auto mx-2 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:h-[4rem] "
          alt="Discord"
        />
        <img
          src="./elements/social/facebook.svg"
          className="m-auto mx-2  h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:h-[4rem]"
          alt="Facebook"
        />
        <img
          src="./elements/social/instagram.svg"
          className="m-auto mx-2 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:h-[4rem]"
          alt="Instagram"
        />
        <img
          src="./elements/social/reddit.svg"
          className="m-auto mx-2 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:h-[4rem]"
          alt="Reddit"
        />
        <img
          src="./elements/social/twitter-test.svg"
          className="m-auto mx-2 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:h-[4rem]"
          alt="Twitter"
        />
        <img
          src="./elements/social/medium.svg"
          className="m-auto mx-2 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:h-[4rem]"
          alt="Medium"
        />
      </div>
    </div>
  );
};

export default Footer;
