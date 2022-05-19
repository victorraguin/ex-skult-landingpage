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
      variants={CardContainer}
      initial="hidden"
      animate={controls}
      ref={ref}
      className="h-full bg-[#282828] sm:pt-20 xl:pt-60"
    >
      <motion.div className="relative top-[-5rem] hidden flex-row justify-center sm:flex sm:pt-10 xl:top-[-15rem] 4xl:pb-20">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          src="./elements/skyrroz.svg"
          alt="Skyrroz"
          className="absolute top-[-3rem] z-30 mx-auto origin-bottom scale-[0.45] md:top-0 md:scale-[0.8] xl:top-[10rem] xl:scale-[90%] 4xl:top-[17rem]"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          src="./elements/natasha.svg"
          alt="Natasha"
          className="absolute left-[21%] top-[-2rem] z-20 origin-bottom rotate-[18deg] scale-[0.45] md:top-0 md:left-[35%] md:scale-[0.8] xl:left-[47%] xl:top-[12rem] xl:scale-[90%] 4xl:top-[18rem]"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          src="./elements/waartex.svg"
          alt="Waartex"
          className="absolute right-[21%] top-[-2rem] z-10 origin-bottom rotate-[350deg] scale-[0.45] md:top-0 md:right-[37%] md:scale-[0.8] xl:right-[47%] xl:top-[12rem] xl:scale-[90%] 4xl:top-[18rem]"
        />
      </motion.div>
      <motion.div
        className="h-full bg-[#282828] pt-20 sm:pt-80"
        variants={CardContainer}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div className="mx-auto flex flex-row flex-wrap justify-around sm:flex-nowrap 3xl:w-2/3 4xl:w-3/4">
          <motion.div className=" flex flex-col" variants={CardItem}>
            <img src="/elements/skult-collecte-icon-.svg" alt="Collect Icon" className="h-[125px]" />
            <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Collect</h4>
            <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              Create your deck by collecting the cards of the best Streamers you can find! You'll need them to
              participate into their exclusive events & our Fantasy Leagues!
            </p>
          </motion.div>
          <motion.div className="flex flex-col" variants={CardItem}>
            <img src="/elements/skult-trade-icon.svg" alt="Collect Icon" className="h-[125px]" />
            <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Trade</h4>
            <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              Trade with other Leaguers across the globe. Sell the cards you won't need: real cash is coming your way!
            </p>
          </motion.div>
          <motion.div className="flex flex-col" variants={CardItem}>
            <img src="/elements/skult-compete-icon.svg" alt="Collect Icon" className="h-[125px]" />
            <h4 className="pt-5 text-center font-poppins text-[28px] font-semibold text-primary">Compete</h4>
            <p className="mx-auto w-2/3 pt-4 text-center font-poppins text-[18px] font-medium text-[#b8b8b8]">
              Draft your Squad and enter weekly Leagues. Your final score will depend on the real-world performances of
              your Streamers.
            </p>
          </motion.div>
        </motion.div>
        <div className="2xl:pb-42 xl:pb-20"></div>
      </motion.div>
    </motion.div>
  );
};

export default CollectiblesBlockFirst;
