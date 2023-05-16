import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import CurrentTime from '@/components/currentTime';

import workImage from '@/assets/myt_web_1.png';
import webDevImage from '@/assets/browser.png';
import uiImage from '@/assets/ux.png';
import mobileImage from '@/assets/cell-phone.png';
import photographyImage from '@/assets/photography.jpg';

import iconFacebook from '@/assets/facebook.svg';
import TextMarquee from '@/components/textMarquee';

export default function Home() {
	return (
		<div className={styles.container}>
			{/* first row */}
			<section className={styles.rowOne}>
				<div className={styles.heroText}>Building websites that make an impact.</div>
				{/* about section */}
				<Link href={'/about'}>
					<div className={styles.aboutCard}>
						<span className={styles.aboutCard_intro}>Hi, I;m</span>
						<h1>Ebinu Suneer</h1>
						<p>I am a web developer.</p>
						<span className={styles.moreText}>{'More about me -> '}</span>
					</div>
				</Link>
				{/* project section */}
				<Link href={'/works'}>
					<div className={styles.workCard}>
						<div className={styles.workCard_imageContainer}>
							<Image src={workImage} fill />
						</div>
						<h2>Projects</h2>
						<span className={styles.moreText}>{'More about me -> '}</span>
					</div>
				</Link>
			</section>

			<section className={styles.Col}>
				<div className={styles.colOne}>
					{/* profiles */}
					<div className={styles.profiles}>
						<div className={styles.profileCard}>
							<a href='https://www.google.com' target='_blank'>
								<Image src={iconFacebook} alt='facebook icon' />
							</a>
							<a href='https://www.google.com' target='_blank'>
								<Image src={iconFacebook} alt='facebook icon' />
							</a>
							<a href='https://www.google.com' target='_blank'>
								<Image src={iconFacebook} alt='facebook icon' />
							</a>
						</div>
						<p className={styles.subText}>Keep in contact</p>
						<h3>Profiles</h3>
					</div>
					{/* time */}
					<CurrentTime />
				</div>

				<div className={styles.colTwo}>
					{/* services  */}
					<div className={styles.servicesCardsContainer}>
						<div className={styles.serviceCard}>
							<div className={styles.serviceCard_image}>
								<Image src={webDevImage} alt='web dev image' fill />
							</div>
							<p className={styles.serviceText}>Web Development</p>
						</div>
						<div className={styles.serviceCard}>
							<div className={styles.serviceCard_image}>
								<Image src={uiImage} alt='Ui image' fill />
							</div>
							<p className={styles.serviceText}>UI design</p>
						</div>
						<div className={styles.serviceCard}>
							<div className={styles.serviceCard_image}>
								<Image src={mobileImage} alt='mobil image' fill />
							</div>
							<p className={styles.serviceText}>Mobile Development</p>
						</div>
					</div>

					<div className={styles.contactSection}>
						{/* marquee */}
						<TextMarquee />

						{/* lets work together */}
						<div className={styles.letsWorkRow}>
							<div className={styles.letWorkCard}>
								<h2>Lets work together</h2>
								<p>Contact</p>
							</div>
							{/* photos */}
							<div className={styles.photographyContainer}>
								<Image
									src={photographyImage}
									alt='image of birds flying in patter with a boy riding scooter.'
									fill
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
