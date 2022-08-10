/* eslint-disable max-len */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FlagIcon } from 'react-flag-kit';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const router = useRouter();
  const { t: tCommon } = useTranslation('common');
  return (
    <div className="fixed z-50">
      <motion.img
        src="/elements/header.webp"
        alt="header"
        className="z-1 relative h-32 w-screen xl:h-48 2xl:h-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="z-2 absolute inset-0">
        <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ type: 'spring', stiffness: 40 }}>
          <Link href="#top" passHref>
            <img
              className="mx-10 mt-6 h-8 cursor-pointer transition duration-100 ease-in-out md:mx-auto md:mt-5 xl:mx-auto xl:mt-7 xl:h-12 2xl:h-14 4xl:h-16"
              src={`https://cdn.skult.gg/Landing+Page/SKULT.png`}
              alt="SKULT"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 1, type: 'spring', stiffness: 50 }}
          className="group"
        >
          <Link href="/streamer" passHref>
            <motion.button
              className={`
                absolute top-[-2.6rem] right-[1rem] scale-[0.6] rounded-full
                bg-gradient-to-br from-[#FFCC00] to-[#ED713C] p-0.5 text-sm
                shadow-[0_0_15px_-3px_#ffcc00cf] transition
                duration-200 ease-in-out hover:bg-gradient-to-b hover:shadow-[0_0_25px_-3px_#ffcc00cf]
                md:right-[2rem]
                md:scale-[0.7]
                xl:top-[-3rem] 
                xl:right-40
                xl:scale-[0.8]
                2xl:scale-[0.9]
                3xl:scale-[0.9]
                4xl:scale-[1]
              `}
            >
              <motion.div className="relative flex flex-row rounded-full bg-[#262626] px-6 py-[8px]">
                <motion.div className="py-[6px] font-poppins text-[20px] font-light text-[#a9a9a9] group-hover:text-white">
                  {tCommon('cta.streamer')}
                </motion.div>
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
        {router.locale !== 'fr' && (
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 60 }}
            className="group"
          >
            <motion.button
              onClick={() => router.push(router.pathname, router.pathname, { locale: 'fr' })}
              className={`
                absolute top-[-2.6rem] right-[0rem] scale-[0.6]
                rounded-full
                bg-gradient-to-br from-[#FFCC00] to-[#ED713C] p-0.5 text-sm
                shadow-[0_0_15px_-3px_#ffcc00cf]  transition
                duration-200 ease-in-out hover:bg-gradient-to-b hover:shadow-[0_0_25px_-3px_#ffcc00cf]
                md:right-[0rem]
                md:scale-[0.7]
                xl:top-[-3rem] 
                xl:right-20
                xl:scale-[0.8]
                2xl:scale-[0.9]
                3xl:scale-[0.9]
                4xl:scale-[1]
              `}
            >
              <motion.div className="relative flex flex-row rounded-full bg-[#262626] px-3 py-[8px]">
                <motion.div className="py-[6px] font-poppins text-[20px] font-light text-[#a9a9a9]">
                  <FlagIcon code="FR" size={28} />
                </motion.div>
              </motion.div>
            </motion.button>
          </motion.div>
        )}
        {router.locale !== 'en' && (
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 70 }}
            className="group"
          >
            <motion.button
              onClick={() => router.push(router.pathname, router.pathname, { locale: 'en' })}
              className={`
                absolute top-[-2.6rem] right-[0rem] scale-[0.6] rounded-full
                bg-gradient-to-br from-[#FFCC00] to-[#ED713C] p-0.5 text-sm
                shadow-[0_0_15px_-3px_#ffcc00cf] transition
                duration-200 ease-in-out hover:bg-gradient-to-b hover:shadow-[0_0_25px_-3px_#ffcc00cf]
                md:right-[0rem]
                md:scale-[0.7]
                xl:top-[-3rem] 
                xl:right-20
                xl:scale-[0.8]
                2xl:scale-[0.9]
                3xl:scale-[0.9]
                4xl:scale-[1]
              `}
            >
              <motion.div className="relative flex flex-row rounded-full bg-[#262626] px-3 py-[8px]">
                <motion.div className="py-[6px] font-poppins text-[20px] font-light text-[#a9a9a9]">
                  <FlagIcon code="GB" size={28} />
                </motion.div>
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
