/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mx-1 flex flex-row flex-wrap justify-around py-2 2xl:mx-5 3xl:xl:mx-10">
      <div className="mx-auto hidden w-[15rem] flex-col sm:mx-4 md:inline lg:mx-0 xl:py-4 2xl:mx-0 3xl:mx-4">
        <Link href="#top" passHref>
          <img className="mx-4 h-12 cursor-pointer hover:scale-105" src={`./elements/SKULT.png`} alt="SKULT" />
        </Link>
        <p className="pt-2 text-center font-poppins text-[15px] text-white ">© 2022 - SKULT</p>
      </div>
      <div className="my-auto flex flex-row xl:mx-0">
        <form
          className="flex flex-row gap-x-4"
          onSubmit={evt => {
            evt.preventDefault();
            // console.log(evt.target[0].value);
          }}
        >
          <input
            className="w-20 border-b border-[#a9a9a9] bg-transparent px-2 pb-2 text-sm font-light text-[#a9a9a9] focus:border-b-2 focus:outline-none sm:inline-block md:w-40"
            name="name"
            placeholder="Name"
          />
          <input
            className="hidden w-32 border-b border-[#a9a9a9] bg-transparent px-2 pb-2 text-sm font-light text-[#a9a9a9] focus:border-b-2 focus:outline-none sm:inline-block md:w-48"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            type="submit"
            value="Subscribe"
            className="cursor-pointer rounded-full border border-[#a9a9a9] bg-[#222222] py-1 px-2 font-light text-[#a9a9a9] hover:scale-105 hover:brightness-150"
          />
        </form>
      </div>
      <div className="my-auto flex flex-row flex-wrap gap-x-1 xl:gap-x-2">
        {socialIcons.map(({ linkTo, uri, alt }) => (
          <a href={linkTo} target="_blank" rel="noopener noreferrer" key={alt}>
            <img src={uri} className="h-12 cursor-pointer hover:scale-105 hover:brightness-150" alt={alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;

const socialIcons = [
  {
    linkTo: 'https://discord.gg/fJvrQCJr4W',
    uri: './elements/social/discord.svg',
    alt: 'Discord',
  },
  {
    linkTo: 'https://www.facebook.com/profile.php?id=100075407260088',
    uri: './elements/social/facebook.svg',
    alt: 'Facebook',
  },
  {
    linkTo: 'https://www.instagram.com/skult.gg/',
    uri: './elements/social/instagram.svg',
    alt: 'Instagram',
  },
  {
    linkTo: 'https://www.reddit.com/r/Skult_gg/',
    uri: './elements/social/reddit.svg',
    alt: 'Reddit',
  },
  {
    linkTo: 'https://twitter.com/SKULT_gg',
    uri: './elements/social/twitter-circled.svg',
    alt: 'Twitter',
  },
  {
    linkTo: 'https://www.linkedin.com/company/skultgg/',
    uri: './elements/social/linkedin-circled.svg',
    alt: 'LinkedIn',
  },
];
