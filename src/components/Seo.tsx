import React from 'react';
import Head from 'next/head';

const Seo: React.FC<SEOProps> = ({ description, keywords, title }) => (
  <Head>
    <title>SKULT | {title}</title>
    <meta name="description" content={`SKULT - ${description}`} />
    <meta name="keywords" content={keywords?.join(', ')} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta property="og:image" content="https://cdn.skult.gg/SKULT.png" />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="SKULT" />
    <meta property="og:url" content="https://skult.gg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={`SKULT - ${description}`} />
    <meta name="twitter:site" content="https://skult.gg" />
    <meta name="twitter:creator" content="@SKULT_gg" />
    <meta name="twitter:image" content="https://cdn.skult.gg/SKULT_twitter.png" />
    <link rel="icon" type="image/png" href={`/favicon.ico`} />
    <link rel="apple-touch-icon" type="image/png" href="/favicon.ico" />
  </Head>
);

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: never;
  keywords?: string[];
  title: string;
}

Seo.defaultProps = {
  description: 'SKULT Description',
  keywords: ['Streamers', 'SKULT', 'Games', 'Cryptocurrency', 'Blockchain', 'Twitch', 'YouTube', 'Discord'],
};

export default Seo;
