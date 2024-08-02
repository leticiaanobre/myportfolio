// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

function setInitialColorMode() {
  const colorMode = window.localStorage.getItem('color-mode') || 'dark';
  document.documentElement.setAttribute('data-theme', colorMode);
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const colorMode = window.localStorage.getItem('color-mode') || 'light';
                document.documentElement.setAttribute('data-theme', colorMode);
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
