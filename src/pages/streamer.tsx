import React from 'react';
import type { NextPage } from 'next';
import Seo from '../components/Seo';
import HeaderStreamer from '../components/partials/HeaderStreamer';
import StreamerBlock from '../components/partials/StreamerBlock';
import { motion } from 'framer-motion';
import Footer from '../components/partials/Footer';

const Streamer: NextPage = () => {
  return (
    <div className="h-screen bg-[#282828]">
      <Seo title={'Hello | Streamer'} />
      <HeaderStreamer />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <StreamerBlock />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Streamer;
