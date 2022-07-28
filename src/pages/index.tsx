import React from 'react';
import type { NextPage } from 'next';
import Seo from '../components/Seo';
import Header from '../components/partials/Header';
import StartBlock from '../components/partials/StartBlock';
import PresentationBlock from '../components/partials/PresentationBlock';
import StreamersLeaguersBlock from '../components/partials/StreamersLeaguersBlock';
import CollectiblesBlockFirst from '../components/partials/CollectiblesBlockFirst';
// import CollectiblesBlockSecond from '../components/partials/CollectiblesBlockSecond';
import CollectiblesUseCaseBlock from '../components/partials/CollectiblesUseCaseBlock';
import TeamBlock from '../components/partials/TeamBlock';
import SpeakOfUs from '../components/partials/SpeakOfUs';
import { motion } from 'framer-motion';
import SocialBlock from '../components/partials/SocialBlock';
import Footer from '../components/partials/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return (
    <div className="bg-[#282828]">
      <Seo title={'Fantasy Gaming & Streaming'} />
      <Header />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <StartBlock />
        <PresentationBlock />
        <CollectiblesBlockFirst />
        {/* <CollectiblesBlockSecond /> */}

        <img src="/Page_breaker2-1.svg" alt="Page Breaker" className="hidden w-screen sm:flex" />
        <img src="/Page_breaker2-1_mobile.svg" alt="Page Breaker Mobile" className="flex w-screen sm:hidden" />
        <CollectiblesUseCaseBlock />
        <img src="/Page_breaker2-2.svg" alt="Page Breaker " className="hidden w-screen sm:flex" />
        <img src="/Page_breaker1.svg" alt="Page Breaker Mobile" className="flex w-screen sm:hidden" />

        <StreamersLeaguersBlock />
        <TeamBlock />
        <SpeakOfUs />
        <SocialBlock />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: { locale: 'en' | 'fr' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});
