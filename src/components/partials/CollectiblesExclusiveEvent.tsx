/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const CollectiblesExclusiveEvent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const openStreamerFantasyText = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

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

  const events = [
    {
      image: '/iryanne.png',
      name: 'Community RAID : World of Warcraft',
      description:
        '" I need 10 mates for the Onyxia Lair Raid! The first 10 to check-in can team-up with me and we GO! "',
      social: 'https://www.twitch.tv/iryanne',
    },
    {
      image: '/skult_rocketleague_training.jpg',
      name: 'Community TRAINING with eSport Player : Rocket League',
      description:
        '" Join us for the first ever eSport training session with Rocket League! We will be playing against each other and we will be playing with the best players in the world! "',
    },
    {
      image: '/skult-lol.jpg',
      name: 'Community FIGHT : League Of Legend',
      description:
        '" Join us for the first ever League of Legends tournament! We will be playing against each other and we will be playing with the best players in the world! "',
    },
  ];

  function Item(props) {
    return (
      <div>
        <div className="flex flex-row">
          <img src={props.item.image} alt={props.item.name} className="h-[13rem] w-[13rem] rounded-xl" />
          <div className="m-10 flex flex-col">
            <h2 className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text text-[24px] font-bold text-transparent">
              {props.item.name}
            </h2>
            <p className="text-[#e7e7e7]">{props.item.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div className="h-full bg-[#282828]" variants={CardContainer} initial="hidden" animate={controls} ref={ref}>
      <motion.div
        className="pb-10 text-center font-poppins text-[26px] font-medium text-[#e7e7e7] xl:text-[32px] 2xl:text-[40px]"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openStreamerFantasyText}
      >
        Exclusive{' '}
        <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text text-transparent">Events</span>
      </motion.div>
      <motion.div
        className="mx-auto w-2/3 pb-10 text-center font-poppins text-[22px] font-medium text-[#e7e7e7]"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={openStreamerFantasyText}
      >
        Drops, giveaways, exclusive content, in real life events… Everything is possible!{' '}
        <h4>Streamers can create any kind of exeperiences they want and make their community participate to them!</h4>
        <h4 className="pt-5">Only collectible holders can enter!</h4>
      </motion.div>
      <motion.div className="" initial={{ opacity: 0 }} animate={controls} variants={openStreamerFantasyText}>
        <Carousel className="mx-auto w-1/2" duration={1000} interval={6000} navButtonsAlwaysVisible={true}>
          {events.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default CollectiblesExclusiveEvent;
