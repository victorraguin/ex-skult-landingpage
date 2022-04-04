import React from 'react';
import type { NextPage } from 'next';
import Seo from '../components/Seo';
import Header from '../components/partials/Header';
import StartBlock from '../components/partials/StartBlock';
import PresentationBlock from '../components/partials/PresentationBlock';
import StreamersLeaguersBlock from '../components/partials/StreamersLeaguersBlock';
import CollectiblesBlock from '../components/partials/CollectiblesBlock';
import SocialBlock from '../components/partials/SocialBlock';
import Footer from '../components/partials/Footer';

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white">
      <Seo title={'Hello'} />
      <div className="min-w-screen mx-32 min-h-screen bg-black">
        <Header />
        <StartBlock />
        <PresentationBlock />
        <StreamersLeaguersBlock />
        <CollectiblesBlock />
        <SocialBlock />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
