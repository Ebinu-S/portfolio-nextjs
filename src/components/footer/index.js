import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

function Footer() {
	return (
		<footer className={styles.footer}>
			<p>@ Ebinu Suneer, 2023</p>
			<div className={styles.linkIsland}>
				<Link href={'/'}>
					<span className={styles.pageLink}>Home</span>
				</Link>
				<Link href={'/about'}>
					<span className={styles.pageLink}>About</span>
				</Link>
				<Link href={'/works'}>
					<span className={styles.pageLink}>Work</span>
				</Link>
				<div className={styles.contactContainer}>
					<a href='mailto:ebinusuneer2nd@gmail.com'>Contact Me</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
