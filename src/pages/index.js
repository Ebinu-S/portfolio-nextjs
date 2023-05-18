import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import CurrentTime from '@/components/currentTime';
import TextMarquee from '@/components/textMarquee';

import workImage from '@/assets/work_preview.png';
import webDevImage from '@/assets/browser.png';
import uiImage from '@/assets/ux.png';
import mobileImage from '@/assets/cell-phone.png';
import photographyImage from '@/assets/photography.jpg';

import enterIcon from '@/assets/icons/enter.png';
import iconInstagram from '@/assets/instagram.svg';
import iconGithub from '@/assets/github.svg';
import iconLinkedin from '@/assets/linkedin.svg';

export default function Home() {
	return (
		<div className={styles.container}>
			{/* first row */}
			<section className={styles.rowOne}>
				<div className={styles.heroText}>Building websites that make an impact.</div>
				{/* about section */}
				<Link href={'/about'}>
					<div className={styles.aboutCard}>
						<div className={styles.aboutCard_intro}>
							<span>Hi, I'm</span>
							<h1>Ebinu Suneer</h1>
							<p>I am a web developer.</p>
						</div>
						<div className={styles.subText}>
							More about me
							<span className='openIcon'>
								<Image src={enterIcon} width={25} height={25} alt='enter icon' />
							</span>
						</div>
					</div>
				</Link>
				{/* project section */}
				<Link href={'/works'}>
					<div className={styles.workCard}>
						<div className={styles.workCard_imageContainer}>
							<Image src={workImage} fill />
						</div>
						<h2>Projects</h2>
						<div className={styles.subText}>
							Check it out
							<span className='openIcon'>
								<Image src={enterIcon} width={25} height={25} alt='enter icon' />
							</span>
						</div>
					</div>
				</Link>
			</section>

			<section className={styles.Col}>
				<div className={styles.colOne}>
					{/* profiles */}
					<div className={styles.profiles}>
						<div className={styles.profileCard}>
							<div className={styles.profileCardItem}>
								<a href='https://www.google.com' target='_blank'>
									<Image src={iconLinkedin} alt='facebook icon' fill />
								</a>
							</div>
							<div className={styles.profileCardItem}>
								<a href='https://www.google.com' target='_blank'>
									<Image src={iconGithub} alt='facebook icon' fill />
								</a>
							</div>
							<div className={styles.profileCardItem}>
								<a href='https://www.google.com' target='_blank'>
									<Image src={iconInstagram} alt='facebook icon' fill />
								</a>
							</div>
						</div>
						<div className={styles.profilesContact}>
							<p className={styles.subText}>Keep in contact</p>
							<h3>Profiles</h3>
						</div>
					</div>
					{/* time */}
					<CurrentTime />
				</div>

				<div className={styles.colTwo}>
					{/* services  */}
					<div className={styles.servicesCardsContainer}>
						<div className={styles.serviceCards}>
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

						<div className={styles.serviceHeader}>
							<p className={styles.subText}>Services that I offer.</p>
							<h3>Services</h3>
						</div>
					</div>

					<div className={styles.contactSection}>
						{/* marquee */}
						<TextMarquee />

						{/* lets work together */}
						<div className={styles.letsWorkRow}>
							<div className={styles.letWorkCard}>
								<h2>
									Lets work <span className={styles.gradientText}>together</span>
								</h2>
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
