/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CollectiblesBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
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
        staggerChildren: 0.5,
      },
    },
  };

  const CardItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div className="h-full bg-[#222222]" variants={CardContainer} initial="hidden" animate={controls} ref={ref}>
      <motion.div className="mx-60 flex  flex-row justify-around">
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-collecte-icon-.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="text-center text-[28px] font-bold text-primary">Collect</h4>
          <p className="mx-auto w-2/3 pt-4 text-center text-[18px] font-medium text-[#b8b8b8]">
            Create your fighting deck by collecting the cards of the best Streamers you can find! You'll need them to
            participate into the Leagues!
          </p>
        </motion.div>
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-trade-icon.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="text-center text-[28px] font-bold text-primary">Trade</h4>
          <p className="mx-auto w-2/3 text-center text-[18px] font-medium text-[#b8b8b8]">
            Trade with other Leaguers across the globe. Sell the cards you won't need: real cash is coming your way!
          </p>
        </motion.div>
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-compete-icon.svg" alt="Collect Icon" className="h-[125px] scale-125" />
          <h4 className="text-center text-[28px] font-bold text-primary">Compete</h4>
          <p className="mx-auto w-2/3 text-center text-[18px] font-medium  text-[#b8b8b8]">
            Draft your Squad and enter weekly Leagues. Your final score will depend on the real-world performances of
            your Streamers.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="mx-60 mt-20 flex flex-row justify-around">
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-support-icon.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="text-center text-[28px] font-bold text-primary">Support</h4>
          <p className="mx-auto w-2/3 text-center text-[18px] font-medium  text-[#b8b8b8]">
            Streamers receive a share every time a Leaguer buys one of his cards from SKULT. Are you a real fan? Then
            show them your love!
          </p>
        </motion.div>
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-nft-icon.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="text-center text-[28px] font-bold text-primary">Unique &</h4>
          <h4 className="text-center text-[28px] font-bold text-primary">Counterfeit proof</h4>
          <p className="mx-auto w-2/3 text-center text-[18px] font-medium  text-[#b8b8b8]">
            Every card is a non-fungible token (NFT). The blockchain technology ensures its uniqueness and ownership
            security.
          </p>
        </motion.div>
        <motion.div className="mr-8 flex flex-col" variants={CardItem}>
          <img src="/elements/skult-airdrop-icon.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="text-center text-[28px] font-bold text-primary">Earn</h4>
          <p className="mx-auto w-2/3 text-center text-[18px] font-medium  text-[#b8b8b8]">
            Coins, cards, rewards and free drops are all for grab! Watch out: you might be ending up winning something!
          </p>
        </motion.div>
      </motion.div>
      <div className="pb-40"></div>
    </motion.div>
  );
};

export default CollectiblesBlock;