import React from 'react';
import Head from 'next/head';

const Seo: React.FC<SEOProps> = ({ description, keywords, title }) => (
  <Head>
    <title>SKULT | {title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords?.join(', ')} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="@Skult" />
    <meta name="twitter:image" content="" />
    <meta property="og:image" content="" />
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
  description: '',
  keywords: ['Streamers', 'Skult', 'games', 'Leaguers'],
};

export default Seo;
