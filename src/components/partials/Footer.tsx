/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ContactForm } from './ContactForm';

const Footer = () => {
  const { pathname } = useRouter();
  const isOnStreamerPage = pathname === '/streamer';

  return (
    <div className="mx-1 flex flex-row flex-wrap justify-around py-5">
      <div className="hidden flex-col items-center justify-center md:flex">
        <Link href="#top" passHref>
          <img className="mx-4 h-[38px] cursor-pointer" src="./elements/SKULT.png" alt="SKULT" />
        </Link>
        <div className="relative w-[140px]">
          <p className="absolute right-0 top-0 w-32 text-center font-poppins text-xs text-[#a9a9a9]">© 2022 - SKULT</p>
        </div>
      </div>
      <div
        className={`my-auto flex flex-row py-8 lg:max-w-xl lg:flex-1 lg:py-0 xl:mx-0 ${
          isOnStreamerPage && 'hidden lg:invisible lg:flex'
        }`}
      >
        <ContactForm inputClassname="!w-full" />
      </div>
      <div className="my-auto flex flex-row flex-wrap gap-x-1 xl:gap-x-2">
        {socialIcons.map(({ linkTo, uri, alt }) => (
          <a href={linkTo} target="_blank" rel="noopener noreferrer" key={alt}>
            <img
              src={uri}
              className="h-[38px] cursor-pointer transition duration-100 ease-in-out  hover:brightness-150 "
              alt={alt}
            />
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
