/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { motion, useAnimation } from 'framer-motion';
import { Trans, useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TeamBlock = () => {
  const { t } = useTranslation('home');
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
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
        staggerChildren: 0.2,
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
    <motion.div className="bg-gradient-to-r from-[#FFCC00] to-[#E323ff] pt-[4px]">
      <motion.div
        className="h-full bg-[#222222] sm:mb-0"
        variants={CardContainer}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <div>
          <div className="container mx-auto flex justify-center pt-16 pb-20 xl:pt-40 2xl:pt-40 4xl:pt-40">
            <motion.div variants={CardItem}>
              <Trans i18nKey="team.title" ns="home">
                <p className=" pb-3 text-center font-poppins text-[32px]  font-light text-white xl:text-[48px]">
                  The{' '}
                  <span className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text font-poppins font-normal text-transparent xl:text-[48px]">
                    dream
                  </span>{' '}
                  team
                </p>
              </Trans>
            </motion.div>
          </div>
          <motion.div
            className=" w-full bg-[#222222] px-10 xl:px-0 3xl:px-60 4xl:px-[32rem]"
            variants={CardContainer}
            initial="hidden"
            animate={controls}
          >
            <div className="container mx-auto">
              <div className="flex-wrap items-center sm:mx-2 sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-evenly">
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img src="/Alex.png" alt="Alex" className="h-full w-full rounded-full object-cover shadow-md" />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Alex Larose
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.alex')}</p>
                      <div className="flex w-full items-center justify-center py-4">
                        <a
                          href="https://www.linkedin.com/in/alexandrelarose/"
                          target="_blank"
                          className="mx-5"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                        <a href="https://twitter.com/LaroseAlex" className="mx-5" target="_blank" rel="noreferrer">
                          <img
                            src="/elements/social/twitter.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="Twitter"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img src="/Raph.png" alt="Raph" className="h-full w-full rounded-full object-cover shadow-md" />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Raphael André
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.raph')}</p>
                      <div className="flex w-full items-center justify-center py-4">
                        <a
                          href="https://www.linkedin.com/in/raphael-andre-aa26b022a/"
                          target="_blank"
                          className="mx-5"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                        <a href="https://twitter.com/NeViuZ_" className="mx-5" target="_blank" rel="noreferrer">
                          <img
                            src="/elements/social/twitter.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="Twitter"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="/Quentin.png"
                          alt="Quentin"
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Quentin Morin
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.quentin')}</p>
                      <div className="flex w-full items-center justify-center py-4">
                        <a
                          href="https://www.linkedin.com/in/quentinmorin/"
                          target="_blank"
                          className="mx-5"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                        <a href="https://twitter.com/Artkorino" className="mx-5" target="_blank" rel="noreferrer">
                          <img
                            src="/elements/social/twitter.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="Twitter"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="Mohamed.png"
                          alt="Mohamed"
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Mohamed Belkamel
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.simo')}</p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        <a
                          href="https://www.linkedin.com/in/mohamed-belkamel-a65364183/"
                          className="mx-5"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="/Jerem.png"
                          alt="Jérémie"
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Jérémie Gauthier
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.jerem')}</p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        <a
                          href="https://www.linkedin.com/in/jeremie-gauthier-4141a014a/"
                          target="_blank"
                          className="mx-5"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="/Victor.png"
                          alt="Victor"
                          className="h-full w-full rounded-full object-contain shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Victor Raguin
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.vic')}</p>
                      <div className="flex w-full items-center justify-center py-4">
                        <a
                          href="https://www.linkedin.com/in/victor-raguin/"
                          className="mx-5"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                        <a href="https://twitter.com/VictorRaguin" className="mx-5" target="_blank" rel="noreferrer">
                          <img
                            src="/elements/social/twitter.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="Twitter"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="container mx-auto flex justify-center pb-20 sm:pt-16 xl:pt-20 2xl:pt-20 4xl:pt-0">
                  <motion.div variants={CardItem}>
                    <p className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-3 text-center font-poppins text-[32px] font-normal text-transparent xl:text-[48px]">
                      {t('team.advisors')}
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="/Thibault.jpeg"
                          alt="Thibault"
                          className="h-full w-full rounded-full object-cover shadow-md grayscale"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Thibaut Lacave
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.thib')}</p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        <a
                          href="https://www.linkedin.com/in/lacavethibaut/"
                          className="mx-5"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="/Didier.jpeg"
                          alt="Didier"
                          className="h-full w-full rounded-full object-cover shadow-md grayscale"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Didier Boullery
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.didier')}</p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        <a
                          href="https://www.linkedin.com/in/didierboullery/"
                          className="mx-5"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={CardItem}
                  className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="/skult-joachim-gillet.png"
                          alt="Didier"
                          className="h-full w-full rounded-full object-cover shadow-md grayscale"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Joachim Gillet
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('team.joachim')}</p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        <a
                          href="https://www.linkedin.com/in/joachim-gillet-b91099133/"
                          className="mx-5"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/elements/social/linkedin.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="LinkedIn"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-1 justify-center py-6 pb-40">
          <button className="group relative rounded-full bg-gradient-to-r from-[#FFCC00] to-[#ED713C] p-0.5 text-sm shadow-[0_0_15px_-3px_#ffcc00cf] transition duration-200  ease-in-out hover:shadow-[0_0_25px_-3px_#ffcc00cf] ">
            <div className="relative flex flex-row rounded-full bg-[#262626] px-6 pt-3 ">
              <a
                target="_blank"
                className="cursor-pointer pb-3 font-poppins text-xl font-light text-[#a9a9a9] group-hover:brightness-150"
                href="https://vivid-tadpole-074.notion.site/Job-Board-a686e214017142d08fb73cf1f83ca4ad"
                rel="noopener noreferrer"
              >
                {t('team.cta')}
              </a>
            </div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamBlock;
