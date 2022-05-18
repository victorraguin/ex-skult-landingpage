/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CollectiblesBlockFirst = () => {
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
    <motion.div
      className="h-full bg-[#282828] pt-20 xl:mx-0 xl:pt-40 2xl:mx-[12rem] 3xl:mx-0 4xl:mr-40"
      variants={CardContainer}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className="relative flex flex-row justify-center pt-10 xl:top-[-20rem] 4xl:pb-20">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 15, duration: 1 }}
          // onClick={() => console.log('Bravo!')}
          aria-hidden="true"
        >
          <motion.img
            src="./elements/skult-nft-icon.svg"
            alt="header"
            className=" absolute right-[39.5%] top-[8.5rem] z-20 mx-auto h-20 cursor-pointer transition duration-300 ease-in-out hover:scale-125 hover:invert xl:top-0 xl:right-[48.35%]"
          />
        </motion.div> */}
        <motion.img
          src="./elements/skyrroz.svg"
          alt="header"
          className="absolute top-[-3rem] z-30 mx-auto origin-bottom scale-50 md:top-0 md:scale-[0.8] xl:top-[10rem] xl:scale-[90%] 4xl:top-[17rem]"
        />
        <img
          src="./elements/natasha.svg"
          alt="header"
          className="absolute left-[21%] top-[-2rem] z-20 origin-bottom rotate-[18deg] scale-50 md:top-0 md:left-[35%] md:scale-[0.8] xl:left-[47%] xl:top-[12rem] xl:scale-[90%] 4xl:top-[18rem]"
        />
        <img
          src="./elements/waartex.svg"
          alt="header"
          className="absolute right-[21%] top-[-2rem] z-10 origin-bottom rotate-[350deg] scale-50 md:top-0 md:right-[37%] md:scale-[0.8] xl:right-[47%] xl:top-[12rem] xl:scale-[90%] 4xl:top-[18rem]"
        />
      </div>
      <motion.div className="mx-auto flex flex-row flex-wrap justify-around pt-[15rem] sm:flex-nowrap 3xl:mx-[18rem] 3xl:w-2/3 4xl:mx-auto 4xl:w-3/4">
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-collecte-icon-.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Collect</h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Create your deck by collecting the cards of the best Streamers you can find! You'll need them to participate
            into their exclusive events & our Fantasy Leagues!
          </p>
        </motion.div>
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-trade-icon.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Trade</h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Trade with other Leaguers across the globe. Sell the cards you won't need: real cash is coming your way!
          </p>
        </motion.div>
        <motion.div className=" flex flex-col" variants={CardItem}>
          <img src="/elements/skult-compete-icon.svg" alt="Collect Icon" className="h-[125px]" />
          <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Compete</h4>
          <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
            Draft your Squad and enter weekly Leagues. Your final score will depend on the real-world performances of
            your Streamers.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CollectiblesBlockFirst;
