/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { motion, useAnimation } from 'framer-motion';
import { Trans, useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SpeakOfUs = () => {
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
          <div className="container mx-auto flex justify-center pt-8 pb-20 xl:pt-40 4xl:pt-40">
            <motion.div variants={CardItem}>
              <Trans i18nKey="partners.title" ns="home">
                <p className=" pb-3 text-center font-poppins text-[32px]  font-light text-white xl:text-[48px]">
                  They{' '}
                  <span className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text font-poppins font-normal text-transparent xl:text-[48px]">
                    Speak about Us
                  </span>{' '}
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
                        <img
                          src="/zlataneur.jpg"
                          alt="Alex"
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Zlataneur89
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('partners.creator')}</p>
                      <div className="flex w-full items-center justify-center py-4">
                        <a href="https://youtu.be/V1VjHXJHBQM" target="_blank" className="mx-5" rel="noreferrer">
                          <img
                            src="/elements/social/youtube.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="YouTube"
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
                          src="/fomaw.jpg"
                          alt="Fomaw"
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Fomaw
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('partners.creator')}</p>
                      <div className="flex w-full items-center justify-center py-4">
                        <a href="https://youtu.be/Gr2kK2dxYdo" target="_blank" className="mx-5" rel="noreferrer">
                          <img
                            src="/elements/social/youtube.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="YouTube"
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
                          src="/Yoan.jpg"
                          alt="Yoan Axie"
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                        Yoan Axie
                      </div>
                      <p className="text-md text-center text-[#e7e7e7]">{t('partners.creator')}</p>
                      <div className="flex w-full items-center justify-center py-4">
                        <a href="https://youtu.be/F2jGCrjNhzM" target="_blank" className="mx-5" rel="noreferrer">
                          <img
                            src="/elements/social/youtube.svg"
                            className="h-12 cursor-pointer hover:scale-105 hover:brightness-150"
                            alt="YouTube"
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
      </motion.div>
    </motion.div>
  );
};

export default SpeakOfUs;
