import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Landing.module.css';

const SocialBlock = () => {
  const lueurVariant = {
    visible: { opacity: 1, transition: { duration: 4 } },
    hidden: { opacity: 0 },
  };
  const lueurVariantViolet = {
    visible: { opacity: [1, 0.1], transition: { delay: 1, duration: 0.1, yoyo: 3 } },
    hidden: { opacity: 0 },
  };

  const container = {
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
    hidden: { opacity: 0 },
  };

  const discord = {
    visible: { translateY: 7, transition: { delay: 1, duration: 0.7, yoyo: Number.POSITIVE_INFINITY } },
    hidden: { opacity: 0 },
  };

  const ombre = {
    visible: { scale: [1, 0.95], transition: { delay: 1, duration: 0.7, yoyo: Number.POSITIVE_INFINITY } },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div className={`h-screen flex-auto`} ref={ref}>
      <motion.div
        style={{
          backgroundImage: `url("/elements/social-1.webp")`,
        }}
        className="h-full w-full bg-cover bg-center bg-no-repeat"
        animate={controls}
        initial="visible"
        variants={lueurVariant}
      >
        <motion.div
          style={{
            backgroundImage: `url("/elements/social-2OK.webp")`,
          }}
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          animate={controls}
          initial="hidden"
          variants={lueurVariantViolet}
        ></motion.div>
      </motion.div>
      <motion.div animate={controls} variants={container} initial="hidden">
        <motion.p animate={controls} variants={discord} className={`${styles.floatingDiscordButton}`}>
          Discord
        </motion.p>
        <motion.p animate={controls} variants={ombre} className={`${styles.floatingOmberButton}`}></motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SocialBlock;
