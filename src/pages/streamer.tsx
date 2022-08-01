import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Footer from '../components/partials/Footer';
import HeaderStreamer from '../components/partials/HeaderStreamer';
import StreamerBlock from '../components/partials/StreamerBlock';
import Seo from '../components/Seo';

const Streamer: NextPage = () => {
  return (
    <div className="bg-[#282828] text-[#E7E7E7]">
      <Seo title={'Fantasy Gaming & Streaming | Streamer'} />
      <HeaderStreamer />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <StreamerBlock />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Streamer;

export const getStaticProps = async ({ locale }: { locale: 'en' | 'fr' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'streamers'])),
  },
});
