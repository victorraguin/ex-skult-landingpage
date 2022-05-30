/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PresentationBlock = () => {
  const videoVariant = {
    visible: { opacity: 1, transition: { delay: 2, duration: 6 } },
    hidden: { opacity: 0 },
  };
  const openLureurVariant = {
    visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 2 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const openTitleText = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const openLittleTitleText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const lueurVariant = {
    visible: { opacity: 1, scale: [1, 0.9], transition: { duration: 3, yoyo: Number.POSITIVE_INFINITY } },
    hidden: { opacity: 0, scale: 0 },
  };
  const lueurVariantViolet = {
    visible: { opacity: 1, scale: [0.9, 1], transition: { duration: 3, yoyo: Number.POSITIVE_INFINITY } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div className="flex flex-col" ref={ref}>
      <div className="flex flex-col items-center">
        <motion.h3
          className="mx-2 mt-5 text-center font-poppins text-3xl font-light text-[#e7e7e7] xl:mx-0 xl:text-5xl"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openTitleText}
        >
          A world where new gaming experiences
        </motion.h3>
        <motion.h3
          className="mb-32 max-w-max bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text text-center font-poppins text-3xl font-normal text-transparent xl:text-5xl"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openLittleTitleText}
        >
          can come alive.
        </motion.h3>
      </div>
      <div className="relative flex flex-col">
        <div className="z-10 mx-auto rounded-[15px] xl:h-[504px] xl:w-[896px] xl:bg-[#282828] 4xl:w-[1320px]">
          <motion.video
            className="relative z-20 w-[340px] rounded-[15px] sm:w-[480px] md:w-[680px] lg:w-[880px] xl:h-[504px] xl:w-[896px] 4xl:w-[1320px]"
            animate={controls}
            initial={{ opacity: 1 }}
            variants={videoVariant}
            autoPlay
            muted
            controls
          >
            {/* <source src="/valorant.mp4" type="video/mp4" /> */}
          </motion.video>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={controls} variants={openLureurVariant} aria-hidden="true">
          <motion.img
            src="./elements/lueur-1.webp"
            alt="SKULT TV"
            className="absolute  top-[-12%] z-0 blur-3xl md:top-[-30%] xl:left-[1%] xl:top-[-38%] xl:w-[99%] 2xl:left-[5%] 2xl:w-[92%] 3xl:left-[16.5%] 3xl:w-[68%] 4xl:left-[12%] 4xl:top-[-50%] 4xl:w-[80%]"
            animate={controls}
            initial="visible"
            variants={lueurVariant}
          />
          <motion.img
            src="./elements/lueur-2.webp"
            alt="SKULT TV"
            className="absolute top-[-5%] z-0 blur-3xl md:top-[-30%]  xl:left-[1%] xl:top-[-38%] xl:w-[99%] 2xl:left-[5%] 2xl:w-[92%] 3xl:left-[16.5%] 3xl:w-[68%] 4xl:left-[12%] 4xl:top-[-50%] 4xl:w-[80%]"
            animate={controls}
            initial="hidden"
            variants={lueurVariantViolet}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PresentationBlock;
