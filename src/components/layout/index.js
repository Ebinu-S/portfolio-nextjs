import Head from 'next/head';
import React from 'react';
import Nav from '../nav';
import Footer from '../footer';

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Ebinu Suneer</title>
				<meta name='description' content='Portfolio website of ebinu suneer.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
