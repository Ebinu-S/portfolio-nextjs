import Head from 'next/head';
import React from 'react';
import Nav from '../nav';

function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Ebinu Suneer</title>
				<meta name='description' content='Portfolio website of ebinu suneer.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<main>{children}</main>
		</div>
	);
}

export default Layout;
