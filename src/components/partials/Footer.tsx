import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ContactForm } from './ContactForm';

const Footer = () => {
  const { pathname } = useRouter();
  const isOnStreamerPage = pathname === '/streamer';

  return (
    <div className="mx-1 flex flex-row flex-wrap justify-around py-2 2xl:mx-5 3xl:xl:mx-10">
      <div className="mx-auto hidden w-[15rem] flex-col sm:mx-4 md:inline lg:mx-0 xl:py-4 2xl:mx-0 3xl:mx-4">
        <Link href="#top" passHref>
          <img className="mx-4 h-12 cursor-pointer hover:scale-105" src={`./elements/SKULT.png`} alt="SKULT" />
        </Link>
        <p className="pt-2 text-center font-poppins text-[15px] text-white ">© 2022 - SKULT</p>
      </div>
      <div className={`my-auto flex flex-row xl:mx-0 ${isOnStreamerPage && 'invisible'}`}>
        <ContactForm />
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
