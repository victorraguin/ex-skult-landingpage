/* eslint-disable max-len */
import React from 'react';

const Footer = () => {
  return (
    <div className="mx-20 flex h-[8rem] flex-row">
      <div className="mx-4 flex w-[15rem] flex-col justify-center ">
        <img className="m-4 mb-0 h-[3rem]" src={`./elements/logo-skult.png`} alt="User" />
        <p className="pt-2 text-center font-poppins text-[15px] text-white">© 2022 - SKULT</p>
      </div>
      <div className="flex flex-col pt-10">
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
      <div className="flex flex-row justify-between 2xl:ml-[25%]">
        <img
          src="./elements/social/discord.svg"
          className="m-auto mx-2 h-[4rem] cursor-pointer hover:scale-105"
          alt="Discord"
        />
        <img
          src="./elements/social/facebook.svg"
          className="m-auto mx-2  h-[4rem] cursor-pointer hover:scale-105"
          alt="Facebook"
        />
        <img
          src="./elements/social/instagram.svg"
          className="m-auto mx-2 h-[4rem] cursor-pointer hover:scale-105"
          alt="Instagram"
        />
        <img
          src="./elements/social/reddit.svg"
          className="m-auto mx-2 h-[4rem] cursor-pointer hover:scale-105"
          alt="Reddit"
        />
        <img
          src="./elements/social/twitter-test.svg"
          className="m-auto mx-2 h-[4rem] cursor-pointer hover:scale-105"
          alt="Twitter"
        />
        <img
          src="./elements/social/medium.svg"
          className="m-auto mx-2 h-[4rem] cursor-pointer hover:scale-105"
          alt="Medium"
        />
      </div>
    </div>
  );
};

export default Footer;
