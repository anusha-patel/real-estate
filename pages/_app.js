import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '@/components/Layout';

function App({ Component, pageProps }) {
  NProgress.configure({ showSpinner : false })

  Router.events.on('routeChangeStart', () =>{
    NProgress.start();
  });

  Router.events.on('routeChangeomplete', () =>{
    NProgress.done();
  });

  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
           <Component {...pageProps} />
           {/* {console.log(pageProps)} */}
         
         
        </Layout>
      </ChakraProvider>
    </>
    // its important because we use these in every next application
  )
}

export default App;
