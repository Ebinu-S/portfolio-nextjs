import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function ErrorPage() {
	const router = useRouter();

	return (
		<div className='container404'>
			<div className='box404'>
				<h1>Oops, This page does not exist.</h1>
				<div className='links404'>
					<button onClick={() => router.back()}>Go back</button>
					<Link href='/'>Home</Link>
				</div>
			</div>
		</div>
	);
}

export default ErrorPage;
