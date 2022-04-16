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
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 2 } },
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
    <motion.div className="flex flex-col bg-[#282828]" ref={ref}>
      <motion.h3
        className="mx-2 mt-5 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:mx-0 xl:text-[36px] 2xl:text-[48px]"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openTitleText}
      >
        Every Game is a step further towards
      </motion.h3>
      <motion.h3
        className="mb-20 text-center font-poppins text-[40px] font-light text-[#FFC000] xl:text-[36px] 2xl:text-[48px]"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openLittleTitleText}
      >
        Victory!
      </motion.h3>
      <div className="relative flex flex-col ">
        <div className="left-[13%] z-10 mx-auto rounded-[15px] xl:relative xl:left-[16%] xl:mx-0 xl:w-[920px] xl:bg-[#282828] 2xl:left-[19%] 3xl:left-[25.5%] 4xl:left-[33%]">
          <motion.video
            className="relative z-20 w-[300px] rounded-[15px] xl:w-[920px]"
            animate={controls}
            initial={{ opacity: 0 }}
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
            className="absolute  top-[-48%] z-0 blur-3xl xl:left-[1%] xl:top-[-44%] 2xl:left-[3%] 3xl:left-[12%] 4xl:left-[24%]"
            animate={controls}
            initial="visible"
            variants={lueurVariant}
          />
          <motion.img
            src="./elements/lueur-2.webp"
            alt="SKULT TV"
            className="absolute top-[-48%] z-0 blur-3xl  xl:left-[1%] xl:top-[-44%] 2xl:left-[3%] 3xl:left-[12%] 4xl:left-[24%]"
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
