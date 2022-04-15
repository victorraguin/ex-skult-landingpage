import React from 'react';
import type { NextPage } from 'next';
import Seo from '../components/Seo';
import Header from '../components/partials/Header';
import StartBlock from '../components/partials/StartBlock';
import PresentationBlock from '../components/partials/PresentationBlock';
import StreamersLeaguersBlock from '../components/partials/StreamersLeaguersBlock';
import CollectiblesBlock from '../components/partials/CollectiblesBlock';
import { motion } from 'framer-motion';
import SocialBlock from '../components/partials/SocialBlock';
import Footer from '../components/partials/Footer';

const Home: NextPage = () => {
  return (
    <div className="bg-[#222222]">
      <Seo title={'Hello'} />
      <Header />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <StartBlock />
        <PresentationBlock />
        <StreamersLeaguersBlock />
        <CollectiblesBlock />
        <SocialBlock />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
