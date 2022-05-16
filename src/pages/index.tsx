import React from 'react';
import type { NextPage } from 'next';
import Seo from '../components/Seo';
import Header from '../components/partials/Header';
import StartBlock from '../components/partials/StartBlock';
import PresentationBlock from '../components/partials/PresentationBlock';
import StreamersLeaguersBlock from '../components/partials/StreamersLeaguersBlock';
import CollectiblesBlockFirst from '../components/partials/CollectiblesBlockFirst';
import CollectiblesBlockSecond from '../components/partials/CollectiblesBlockSecond';
import CollectiblesUseCaseBlock from '../components/partials/CollectiblesUseCaseBlock';
import CollectiblesExclusiveEvent from '../components/partials/CollectiblesExclusiveEvent';
import TeamBlock from '../components/partials/TeamBlock';
import { motion } from 'framer-motion';
import SocialBlock from '../components/partials/SocialBlock';
import Footer from '../components/partials/Footer';
import FantasyandGamesPart from '../components/partials/FantasyandGames';

const Home: NextPage = () => {
  return (
    <div className="bg-[#282828]">
      <Seo title={'Hello'} />
      <Header />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <StartBlock />
        <PresentationBlock />
        <CollectiblesBlockFirst />
        <CollectiblesBlockSecond />
        <CollectiblesUseCaseBlock />
        <CollectiblesExclusiveEvent />
        <FantasyandGamesPart />
        <StreamersLeaguersBlock />
        <TeamBlock />
        <SocialBlock />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
