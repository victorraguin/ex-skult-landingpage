import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
