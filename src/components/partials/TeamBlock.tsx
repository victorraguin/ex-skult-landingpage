/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamBlock = () => {
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

  return (
    <motion.div className="h-full bg-[#222222]" variants={CardContainer} initial="hidden" animate={controls} ref={ref}>
      <div>
        <div className="container mx-auto flex justify-center pt-16 pb-20 xl:pt-20 2xl:pt-20 4xl:pt-0">
          <motion.div variants={CardItem}>
            <p className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-3 text-center font-poppins font-bold text-transparent xl:text-[40px] 2xl:text-[42px] ">
              The Dream Team
            </p>
          </motion.div>
        </div>
        <motion.div
          className="w-full bg-[#222222] px-10 xl:px-0 2xl:px-40"
          variants={CardContainer}
          initial="hidden"
          animate={controls}
        >
          <div className="container mx-auto">
            <div className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-evenly">
              <motion.div
                variants={CardItem}
                className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
              >
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img src="/Alex.png" alt="Team" className="h-full w-full rounded-full object-cover shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Alex Larose
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Founder & CEO</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a
                        href="https://www.linkedin.com/in/alexandrelarose/"
                        target="_blank"
                        className="mx-5"
                        rel="noreferrer"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin hover:scale-105"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
                      </a>
                      <a href="https://twitter.com/LaroseAlex" className="mx-5" target="_blank" rel="noreferrer">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter hover:scale-105"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </div>
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
                      <img src="/Raph.png" alt="Team" className="h-full w-full rounded-full object-cover shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Raphael André
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Marketing Project Manager</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a
                        href="https://www.linkedin.com/in/raphael-andre-aa26b022a/"
                        target="_blank"
                        className="mx-5"
                        rel="noreferrer"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin hover:scale-105"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
                      </a>
                      <a href="https://twitter.com/NeViuZ_" className="mx-5" target="_blank" rel="noreferrer">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter hover:scale-105"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </div>
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
                        src="Mohammed.png"
                        alt="Team"
                        className="h-full w-full rounded-full object-cover shadow-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Mohammed Belkamel
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">DevOps & Back-End Developer</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a
                        href="https://www.linkedin.com/in/mohamed-belkamel-a65364183/"
                        className="mx-5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin hover:scale-105"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
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
                      <img src="/Jerem.png" alt="Team" className="h-full w-full rounded-full object-cover shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Jérémie Gauthier
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">FullStack & Blockchain Developer</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a
                        href="https://www.linkedin.com/in/jeremie-gauthier-4141a014a/"
                        target="_blank"
                        className="mx-5"
                        rel="noreferrer"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin hover:scale-105"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
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
                        alt="Team"
                        className="h-full w-full rounded-full object-contain shadow-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Victor Raguin
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Front-End & Blockchain Developer</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a
                        href="https://www.linkedin.com/in/victor-raguin/"
                        className="mx-5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin hover:scale-105"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
                      </a>
                      <a href="https://twitter.com/VictorRaguin" className="mx-5" target="_blank" rel="noreferrer">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter  hover:scale-105"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </div>
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
                        src="/Thibault.jpeg"
                        alt="Team"
                        className="h-full w-full rounded-full object-cover shadow-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Thibaut Lacave
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Technical Advisor</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a
                        href="https://www.linkedin.com/in/lacavethibaut/"
                        className="mx-5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin hover:scale-105"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
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
                        alt="Team"
                        className="h-full w-full rounded-full object-cover shadow-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Didier Boullery
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Gaming & Business Advisor</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a
                        href="https://www.linkedin.com/in/didierboullery/"
                        className="mx-5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin hover:scale-105"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </div>
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
  );
};

export default TeamBlock;
