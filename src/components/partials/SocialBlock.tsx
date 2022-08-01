/* eslint-disable max-len */
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
    <motion.div className="relative h-screen w-full flex-auto bg-[#222222] xl:h-screen" ref={ref}>
      <motion.div
        style={{ backgroundImage: `url("https://cdn.skult.gg/Landing+Page/skult-social.webp")` }}
        className="flex h-full w-full items-end justify-center bg-cover bg-center bg-no-repeat"
        animate={controls}
        initial="hidden"
        variants={lueurVariant}
      >
        <motion.div
          animate={controls}
          variants={container}
          initial="hidden"
          // className="flex justify-center"
        >
          <a
            href="https://discord.gg/fJvrQCJr4W"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <motion.img
              animate={controls}
              variants={discord}
              className="absolute bottom-32 w-52 cursor-pointer transition duration-100 ease-in-out sm:w-60 xl:bottom-[8rem]  2xl:w-60 3xl:bottom-48 4xl:w-96"
              src="/elements/logo-discord.webp"
              alt="Discord"
            />
          </a>
          <motion.p
            animate={controls}
            variants={ombre}
            className={`
              absolute inset-x-0 bottom-20 mx-auto w-52 bg-[#040303]
              py-2 text-center blur xl:w-72 2xl:w-60 4xl:w-96
            `}
          ></motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SocialBlock;
