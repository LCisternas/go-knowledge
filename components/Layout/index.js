import React from 'react';
import Head from 'next/head'

import Navbar from '../Navbar';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}
 
export default Layout;