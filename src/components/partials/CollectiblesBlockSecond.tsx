/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CollectiblesBlockSecond = () => {
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
        staggerChildren: 0.25,
      },
    },
  };

  const CardItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div className="h-full bg-[#282828]" variants={CardContainer} initial="hidden" animate={controls} ref={ref}>
      <motion.div className="mx-auto flex flex-row flex-wrap justify-around sm:flex-nowrap 3xl:w-2/3 4xl:w-3/4">
        <motion.div className="flex flex-1 flex-col" variants={CardItem}>
          <img src="/elements/skult-support-icon.svg" alt="Support Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Support</h4>
          <p className="mx-auto w-[75%] pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Streamers receive a share every time a Leaguer buys one of his cards. Are you a real fan? Then show them
            your love!
          </p>
        </motion.div>
        <motion.div className="flex flex-1 flex-col" variants={CardItem}>
          <img src="/elements/skult-nft-icon.svg" alt="Unique & Counterfeit Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Unique &</h4>
          <h4 className="text-center font-poppins text-[28px] font-semibold text-primary">Counterfeit proof</h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Every card is a non-fungible token (NFT). The blockchain technology ensures its uniqueness and ownership
            security.
          </p>
        </motion.div>
        <motion.div className="flex flex-1 flex-col" variants={CardItem}>
          <img src="/elements/skult-airdrop-icon.svg" alt="Earn Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Earn</h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Coins, cards, rewards and free drops are all for grab! Watch out: you might be ending up winning something!
          </p>
        </motion.div>
      </motion.div>
      <div className="2xl:pb-42 pb-20"></div>
    </motion.div>
  );
};

export default CollectiblesBlockSecond;
