/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

const Footer = () => {
  return (
    <div className="mx-1 flex flex-row flex-wrap justify-around 2xl:mx-5 3xl:xl:mx-10">
      <div className="mx-auto flex hidden w-[15rem] flex-col md:inline xl:py-4 2xl:mx-0 3xl:mx-4">
        <img className="m-4 mb-0 h-[3rem]" src={`./elements/logo-skult.png`} alt="User" />
        <p className="pt-2 text-center font-poppins text-[15px] text-white ">© 2022 - SKULT</p>
      </div>
      <p className="my-auto cursor-pointer pt-2 text-center text-primary underline md:pt-0">We're hiring !</p>
      <div className="flex flex-row pt-10 pb-5 xl:mx-0">
        <form>
          <input
            className="mx-4 w-40 border-b border-[#a9a9a9] bg-[#222222] pb-2 font-light text-[#a9a9a9] focus:outline-none md:w-80 xl:w-80"
            type="email"
            name="email"
            defaultValue="Subscribe to our Newsletter"
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
