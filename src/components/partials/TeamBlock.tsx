/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });
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
    <motion.div className="h-full bg-[#222222] " variants={CardContainer} initial="hidden" animate={controls} ref={ref}>
      <div>
        <div className="container mx-auto flex justify-center pt-16">
          <div>
            <p className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-3 text-center font-poppins text-[32px] font-bold text-transparent ">
              Building Team
            </p>
          </div>
        </div>
        <div className="w-full bg-[#222222]   px-10 pt-10">
          <div className="container mx-auto">
            <div className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between">
              <div className="relative mt-16 mb-32 transition duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img src="/Alex.png" alt className="h-full w-full rounded-full object-cover shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Alex Larose
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Founder & CEO</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-github hover:scale-105"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-instagram hover:scale-105"
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img src="/Raph.png" alt className="h-full w-full rounded-full object-cover shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Raphael André
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Marketing Project Manager</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-github  hover:scale-105"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-instagram  hover:scale-105"
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                        alt
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-github  hover:scale-105"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-instagram  hover:scale-105"
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img src="/Jerem.png" alt className="h-full w-full rounded-full object-cover shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Jérémie Gauthier
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">FullStack & Blockchain Developer</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-github  hover:scale-105"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-instagram  hover:scale-105"
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img src="/Victor.png" alt className="h-full w-full rounded-full object-contain shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Victor Raguin
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Front-End & Blockchain Developer</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-github  hover:scale-105"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-instagram  hover:scale-105"
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                        alt
                        className="h-full w-full rounded-full object-cover shadow-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Nicolas Schalow
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Graphic Designer & UX/UI</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-github  hover:scale-105"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-instagram  hover:scale-105"
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img src="/Thibault.jpeg" alt className="h-full w-full rounded-full object-cover shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Thibaut Lacave
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Technical Advisor</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-github  hover:scale-105"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-instagram  hover:scale-105"
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-16 mb-32 transition  duration-300 ease-in-out hover:shadow-xl sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-[#303030] shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img src="/Didier.jpeg" alt className="h-full w-full rounded-full object-cover shadow-md" />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="bg-gradient-to-tr from-[#FFCC00] to-[#ED713C] bg-clip-text pb-1 text-center text-3xl font-bold text-transparent">
                      Didier Boullery
                    </div>
                    <p className="text-center text-sm text-[#e7e7e7]">Gaming & Business Advisor</p>
                    <div className="flex w-full justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-github  hover:scale-105"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
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
                      <a href="javascript:void(0)" className="mx-5">
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
                            className="feather feather-instagram  hover:scale-105"
                          >
                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamBlock;
