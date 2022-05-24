/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mx-1 flex flex-row flex-wrap justify-around 2xl:mx-5 3xl:xl:mx-10">
      <div className="mx-auto hidden w-[15rem] flex-col sm:mx-4 md:inline lg:mx-0 xl:py-4 2xl:mx-0 3xl:mx-4">
        <Link href="#top" passHref>
          <img className=" m-4 mb-0 h-[3rem] cursor-pointer hover:scale-105" src={`./elements/SKULT.png`} alt="SKULT" />
        </Link>
        <p className="pt-2 text-center font-poppins text-[15px] text-white ">© 2022 - SKULT</p>
      </div>
      <div className="flex flex-row pb-5 lg:pt-10 xl:mx-0">
        <form>
          <input
            className="mx-4 hidden w-40 rounded-lg border-b border-[#a9a9a9] bg-[#222222] p-2 pb-2 font-light text-[#a9a9a9] focus:outline-none sm:inline-block md:w-80 xl:w-80"
            type="email"
            name="email"
            placeholder="Subscribe to our Newsletter"
          />
          <input
            className=" mx-4 w-40 rounded-lg border-b border-[#a9a9a9] bg-[#222222] p-2 pb-2 font-light text-[#a9a9a9] focus:outline-none sm:hidden md:w-80 xl:w-80"
            type="email"
            name="email"
            placeholder=" Our Newsletter"
          />
          <input
            type="submit"
            value="Subscribe"
            className="mx-4 cursor-pointer rounded-full border border-[#a9a9a9] bg-[#222222] p-2 px-4 font-light text-[#a9a9a9] hover:scale-105 hover:brightness-150"
          />
        </form>
      </div>
      <div className="my-auto flex flex-row flex-wrap pb-5">
        <a href="https://discord.gg/fJvrQCJr4W" target="_blank" rel="noopener noreferrer">
          <img
            src="./elements/social/discord.svg"
            className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem] "
            alt="Discord"
          />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100075407260088" target="_blank" rel="noopener noreferrer">
          <img
            src="./elements/social/facebook.svg"
            className="m-auto mx-1 h-[3rem]  cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
            alt="Facebook"
          />
        </a>
        <a href="https://www.instagram.com/skult.gg/" target="_blank" rel="noopener noreferrer">
          <img
            src="./elements/social/instagram.svg"
            className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
            alt="Instagram"
          />
        </a>
        <a href="https://www.reddit.com/r/Skult_gg/" target="_blank" rel="noopener noreferrer">
          <img
            src="./elements/social/reddit.svg"
            className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
            alt="Reddit"
          />
        </a>
        <a href="https://twitter.com/SKULT_gg" target="_blank" rel="noopener noreferrer">
          <img
            src="./elements/social/twitter-circled.svg"
            className="m-auto mx-1 h-12 cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-12"
            alt="Twitter"
          />
        </a>
        <a href="https://www.linkedin.com/company/skultgg/" target="_blank" rel="noopener noreferrer">
          <img
            src="./elements/social/linkedin-circled.svg"
            className="m-auto mx-1 h-12 cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-12"
            alt="LinkedIn"
          />
        </a>
        {/* <img
          src="./elements/social/medium.svg"
          className="m-auto mx-1 h-[3rem] cursor-pointer hover:scale-105 hover:brightness-150 xl:mx-2 xl:h-[3rem]"
          alt="Medium"
        /> */}
      </div>
    </div>
  );
};

export default Footer;
