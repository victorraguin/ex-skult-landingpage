/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-material-ui-carousel';
import Divider from '@mui/material/Divider';

const CollectiblesUseCaseBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const openCollectiblesTitle = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openTitle = {
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openImage = {
    visible: { opacity: 1, scale: 1, transition: { delay: 1.5, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openDescription = {
    visible: { opacity: 1, scale: 1, transition: { delay: 2, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openCollectibleHolders = {
    visible: { opacity: 1, scale: 1, transition: { delay: 2.5, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const openUseCases = {
    visible: { opacity: 1, scale: 1, transition: { delay: 3, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const CardContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      duration: 0.7,
      transition: {
        delayChildren: 0.7,
        duration: 0.7,
        staggerChildren: 0.5,
      },
    },
  };

  const events = [
    {
      image: '/iryanne.png',
      name: 'Community raid : World of Warcraft',
      description:
        '" I need 10 mates for the Onyxia Lair Raid! The first 10 to check-in can team-up with me and we GO! "',
      social: 'https://www.twitch.tv/iryanne',
    },
    {
      image: '/rocketleague.webp',
      name: 'Community training  : Rocket League',
      description:
        '" Join us for the first ever eSport training session with Rocket League! We will be playing against each others! "',
    },
  ];

  function Item(props: {
    item: {
      image: string;
      name: string;
      description: string;
    };
  }) {
    return (
      <div className="flex flex-row flex-wrap sm:mx-10 sm:flex-nowrap xl:mx-0">
        <img
          src={props.item.image}
          alt={props.item.name}
          className="mx-auto max-h-[13rem] max-w-[18rem] rounded-xl xl:mx-0"
        />
        <div className="m-10 flex flex-col">
          <h2 className="text-[24px] font-normal text-primary sm:pb-5">{props.item.name}</h2>
          <p className="text-[18px] text-[#e7e7e7]">{props.item.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <img src="/Page_breaker2.svg" alt="Page Breaker" className="w-full" />
      <motion.div
        className="h-full bg-[#222222] pt-10"
        variants={CardContainer}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div
          className="pb-20 text-center font-poppins text-[32px] font-light text-[#e7e7e7] xl:text-[36px] 2xl:text-[48px]"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openCollectiblesTitle}
        >
          What can you do with your{' '}
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            Collectibles?
          </span>
        </motion.div>
        <motion.div
          className="pb-20 text-center font-poppins text-[26px] font-light text-[#e7e7e7]  xl:text-[33px] 2xl:text-[42px]"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openTitle}
        >
          Participate in Exclusive{' '}
          <span className="bg-gradient-to-r from-[#FFCC00] to-[#ED713C] bg-clip-text font-normal text-transparent">
            Events
          </span>
        </motion.div>
        <div className="mx-auto w-[75%] rotate-[-8deg] sm:w-fit">
          <motion.img
            initial={{ opacity: 0 }}
            animate={controls}
            variants={openImage}
            src="/skult-event-ticket.svg"
            alt="SKULT Event"
            className="mx-auto w-[25rem] pb-[5rem] sm:pb-[8rem] sm:pt-10"
          />
        </div>
        <motion.div
          className="font-base mx-auto pb-10 text-center font-poppins text-[22px] font-light text-[#e7e7e7] sm:mx-10 4xl:w-full"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={openDescription}
        >
          Drops, giveaways, exclusive content, in real life events…{' '}
          <span className="text-primary">Everything is possible!</span>
          <h4>Streamers can create any kind of exeperiences they want and make their community participate to them!</h4>
        </motion.div>
        <motion.h4
          animate={controls}
          variants={openCollectibleHolders}
          initial={{ opacity: 0 }}
          className="font-base mx-auto pb-20 pt-10 text-center font-poppins text-[22px] font-normal text-primary sm:mx-10 4xl:w-full"
        >
          Your cards can unlock exclusive events created by your favorite Streamers !
        </motion.h4>
        <motion.div initial={{ opacity: 0 }} animate={controls} variants={openUseCases} className="h-[20rem] pb-10">
          <Carousel
            className="mx-auto max-h-[400px] sm:max-h-[200px] xl:w-3/4 2xl:w-1/2 "
            duration={1000}
            interval={6000}
            navButtonsAlwaysVisible={true}
            animation="slide"
          >
            {events.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </motion.div>
        <Divider variant="middle" className="mx-auto mt-60 w-1/4 border-double bg-[#ffcc0065] sm:mt-20" />
      </motion.div>
    </div>
  );
};

export default CollectiblesUseCaseBlock;
