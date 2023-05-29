import { useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import iconmenu from '@/assets/menu.svg';
import iconclose from '@/assets/close.svg';

import { AnimatePresence, motion } from 'framer-motion';

function Nav() {
	const [openMenu, setOpenMenu] = useState(false);

	function toggleMenu() {
		const tempState = !openMenu;

		if (typeof window != 'undefined' && window.document) {
			if (tempState) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
		}
		setOpenMenu(tempState);
	}

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
					<div className={styles.contactContainer}>
						<a href='mailto:ebinusuneer2nd@gmail.com'>Contact Me</a>
					</div>
				</div>

				{/* mobile menu */}
				<button className={styles.menuButton} onClick={toggleMenu}>
					<Image src={openMenu ? iconclose : iconmenu} width={15} height={15} />
				</button>
				{/* {iconmenu} */}
			</div>

			<AnimatePresence id={'nav'}>
				{openMenu && (
					<motion.div
						className={styles.mobileMenu}
						initial={{ opacity: 0, y: '-100vh' }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ opacity: 0, y: '100vh' }}
						transition={{
							ease: 'easeInOut',
						}}>
						<Link href={'/'} onClick={toggleMenu}>
							<span className={styles.pageLink}>Home</span>
						</Link>
						<Link href={'/about'} onClick={toggleMenu}>
							<span className={styles.pageLink}>About</span>
						</Link>
						<Link href={'/works'} onClick={toggleMenu}>
							<span className={styles.pageLink}>Work</span>
						</Link>
						<div className={styles.contactContainer} onClick={toggleMenu}>
							<a href='mailto:ebinusuneer2nd@gmail.com'>Contact Me</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

export default Nav;
