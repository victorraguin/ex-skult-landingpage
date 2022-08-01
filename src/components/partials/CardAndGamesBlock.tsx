import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CardAndGamesBlock = () => {
  const openStreamerFantasyText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 2, duration: 4 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const openSupportedGamesText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 5, duration: 4 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const CardContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      delay: 4,
      duration: 1,
      transition: {
        delayChildren: 1,
        duration: 1,
        staggerChildren: 1,
      },
    },
  };
  const CardItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  const GameContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      delay: 5,
      duration: 1,
      transition: {
        delayChildren: 5,
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const GameItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
  const openComingSoonText = {
    visible: { opacity: 1, scale: 1, transition: { delay: 8, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div className="flex flex-col bg-[#282828] shadow-2xl shadow-black" ref={ref}>
      <motion.div
        className="mt-32 text-center font-poppins text-[48px] font-medium text-[#e7e7e7]"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openStreamerFantasyText}
      >
        Streamer Fantasy Leagues
      </motion.div>
      <motion.div
        className="mt-5 mb-10 flex flex-row flex-wrap justify-evenly"
        variants={CardContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          variants={CardItem}
          className="h-[150px] w-[235px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] pt-6 "
        >
          <h4 className="text-center text-[28px] font-semibold text-primary">Collect cards</h4>
          <p className="text-center text-[20px] font-light text-[#e7e7e7]">of your favorites</p>
          <p className="text-center text-[20px] font-light text-[#e7e7e7]">Streamers</p>
        </motion.div>
        <motion.div
          variants={CardItem}
          className="h-[150px] w-[235px] rounded-[15px] border-[1px] border-[#464646] bg-[#303030] pt-6"
        >
          <h4 className="text-center text-[28px] font-semibold text-primary">Build</h4>
          <p className="text-center text-[20px] font-light text-[#e7e7e7]">your own</p>
          <p className="text-center text-[20px]  font-light text-[#e7e7e7]">Team</p>
        </motion.div>
        <motion.div
          variants={CardItem}
          className="h-[150px] w-[235px]  rounded-[15px] border-[1px] border-[#464646] bg-[#303030] pt-6 "
        >
          <h4 className="text-center text-[28px] font-semibold text-primary">Draft</h4>
          <p className="text-center text-[20px]  font-light text-[#e7e7e7]">your Squad</p>
        </motion.div>
        <motion.div
          variants={CardItem}
          className="h-[150px] w-[235px]  rounded-[15px] border-[1px] border-[#464646] bg-[#303030] pt-6"
        >
          <h4 className="text-center text-[28px] font-semibold text-primary">Challenge</h4>
          <p className="text-center text-[20px]  font-light text-[#e7e7e7]">other Leaguers</p>
        </motion.div>
        <motion.div
          variants={CardItem}
          className="h-[150px] w-[235px]  rounded-[15px] border-[1px] border-[#464646] bg-[#303030] pt-6"
        >
          <h4 className="text-center text-[28px] font-semibold text-primary">Win</h4>
          <p className="text-center text-[20px]  font-light text-[#e7e7e7]">rewards!</p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openSupportedGamesText}
        className="mt-5 text-center font-poppins text-[36px] text-[#a8a8a8]"
      >
        Supported games
      </motion.div>
      <motion.div
        className="mx-[18rem] flex justify-evenly"
        variants={GameContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.img variants={GameItem} src="/elements/GAME/warzone.svg" alt="Warzone" className="h-[100px]" />
        <motion.img variants={GameItem} src="/elements/GAME/fortnite.svg" alt="Fortnite" className="h-[100px]" />
        <motion.img variants={GameItem} src="/elements/GAME/apex.svg" alt="APEX" className="h-[100px]" />
        <motion.img variants={GameItem} src="/elements/GAME/valorant.svg" alt="valorant" className="h-[100px]" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openComingSoonText}
        className="mt-4 mb-20 text-center font-poppins text-[24px] text-[#585858]"
      >
        And more coming soon!
      </motion.p>
    </motion.div>
  );
};

export default CardAndGamesBlock;
