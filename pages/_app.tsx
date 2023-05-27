import React from 'react';
import RootLayout from '../app/layout';

const MyApp: React.FC<{ Component: any, pageProps: any }> = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps}/>
    </RootLayout>
  );
}

export default MyApp;
