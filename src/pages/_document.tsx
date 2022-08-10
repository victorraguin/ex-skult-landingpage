import Document, { Head, Html, Main, NextScript } from 'next/document';
import i18nextConfig from '../../next-i18next.config';

export default class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=G-N5SC5MZCJ8`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N5SC5MZCJ8', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* <!-- Start of HubSpot Embed Code --> */}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-eu1.hs-scripts.com/25458610.js"
          ></script>
          {/* <!-- End of HubSpot Embed Code --> */}

          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script charSet="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/v2.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
