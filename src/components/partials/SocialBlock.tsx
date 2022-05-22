import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Landing.module.css';

const SocialBlock = () => {
  const lueurVariant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };
  // const lueurVariantViolet = {
  //   visible: { opacity: [1, 0.4], transition: { delay: 1, duration: 0.1, yoyo: 5 } },
  //   hidden: { opacity: 0 },
  // };

  const container = {
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
    hidden: { opacity: 0 },
  };

  const discord = {
    visible: { translateY: 10, transition: { delay: 1, duration: 0.7, yoyo: Number.POSITIVE_INFINITY } },
    hidden: { opacity: 0 },
  };

  const ombre = {
    visible: { scale: [1, 0.95], transition: { delay: 1, duration: 0.7, yoyo: Number.POSITIVE_INFINITY } },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div className={`relative h-screen w-full flex-auto bg-[#222222] xl:h-screen`} ref={ref}>
      <motion.div
        style={{
          backgroundImage: `url("/elements/social-2OK.webp")`,
        }}
        className="absolute h-full w-full bg-cover bg-center bg-no-repeat"
        animate={controls}
        initial="hidden"
        variants={lueurVariant}
      >
        <motion.div animate={controls} variants={container} initial="hidden">
          <a href="https://discord.gg/fJvrQCJr4W" target="_blank" rel="noopener noreferrer">
            <motion.img
              animate={controls}
              variants={discord}
              className={`${styles.floatingDiscordButton}`}
              src="/elements/logo-discord.webp"
              alt="Discord"
            />
          </a>
          <motion.p animate={controls} variants={ombre} className={`${styles.floatingOmberButton}`}></motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SocialBlock;
