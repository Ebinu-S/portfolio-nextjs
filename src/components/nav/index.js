import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

function Nav() {
	return (
		<nav className={styles.nav}>
			<div className={styles.navContainer}>
				<Link href={'/'}>
					<span className={styles.Icon}>Ebinu</span>
				</Link>
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
				</div>

				<button className='primary-btn'>Lets Connect</button>
			</div>
		</nav>
	);
}

export default Nav;
