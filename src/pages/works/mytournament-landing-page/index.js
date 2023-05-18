import React from 'react';
styles;
import styles from '@/styles/Work.module.scss';
import Image from 'next/image';

// images
import iconExternaLink from '@/assets/icons/external-link.svg';
import mainImage from '@/assets/ss/myt_web_1.png';
import galleryImage1 from '@/assets/ss/myt_web_2.png';
import galleryImage2 from '@/assets/ss/myt_web_3.png';
import galleryImage3 from '@/assets/ss/myt_web_4.png';
import galleryImage4 from '@/assets/ss/myt_web_6.png';
import galleryImage5 from '@/assets/ss/myt_web_7.png';
import Link from 'next/link';
// import galleryImage5 from '@/assets/ss/myt_web_6.png';

function MytLanding() {
	return (
		<article className={styles.container}>
			<section className={styles.chipContainer}>
				<div className={styles.chip}>next js</div>
				<div className={styles.chip}>React</div>
				<div className={styles.chip}>Framer motion</div>
			</section>
			<section className={styles.contentContainer}>
				<h1>My Tournament Landing Page</h1>
				<div className={styles.mainImage}>
					<Image src={mainImage} alt='my tounamenent main image' fill />
				</div>
				<div className={styles.descBox}>
					<div className={styles.descDetails}>
						<div className={styles.descDetail}>
							<span>Year</span>
							<p>2022</p>
						</div>
						<div className={styles.descDetail}>
							<span>Services</span>
							<p>Web Development</p>
						</div>
						<div className={styles.descDetail}>
							<span>Visit </span>
							<a href='https://mytournament.in/' target='_blank'>
								<Image src={iconExternaLink} alt='external link icon' width={20} height={20} />
							</a>
						</div>
					</div>
					<div className={styles.descContent}>
						<h4>Description</h4>
						<p>
							As a freelancer, I have been consistently involved in various exciting projects, and
							watching these projects come to life has been a rewarding experience. My main focus
							has been on front-end development and UI/UX design, utilizing a range of tools
							including ReactJS, HTML, CSS, JavaScript, Firebase, NextJS, and Figma, among others. I
							have worked on a diverse range of projects, from designing and developing visually
							appealing websites to optimizing user experiences through intuitive UI design.
							Throughout my experience, I have always been interested in taking on new and
							challenging projects that allow me to explore new technologies and refine my skills.
							My passion for web development and design has been evident in the quality of work I
							deliver, and I am committed to delivering projects that exceed client expectations.
						</p>
						<p>
							As a freelancer, I have been consistently involved in various exciting projects, and
							watching these projects come to life has been a rewarding experience. My main focus
							has been on front-end development and UI/UX design, utilizing a range of tools
							including ReactJS, HTML, CSS, JavaScript, Firebase, NextJS, and Figma, among others. I
							have worked on a diverse range of projects, from designing and developing visually
							appealing websites to optimizing user experiences through intuitive UI design.
							Throughout my experience, I have always been interested in taking on new and
							challenging projects that allow me to explore new technologies and refine my skills.
							My passion for web development and design has been evident in the quality of work I
							deliver, and I am committed to delivering projects that exceed client expectations.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.galleryGrid}>
				<button className={styles.galleryBox}>
					<div className={styles.galleryImageContainer}>
						<Image src={galleryImage1} alt='screen shot of the work' fill />
					</div>
				</button>
				<button className={styles.galleryBox}>
					<div className={styles.galleryImageContainer}>
						<Image src={galleryImage2} alt='screen shot of the work' fill />
					</div>
				</button>
				<button className={styles.galleryBox}>
					<div className={styles.galleryImageContainer}>
						<Image src={galleryImage3} alt='screen shot of the work' fill />
					</div>
				</button>
				<button className={styles.galleryBox}>
					<div className={styles.galleryImageContainer}>
						<Image src={galleryImage4} alt='screen shot of the work' fill />
					</div>
				</button>
				<button className={styles.galleryBox}>
					<div className={styles.galleryImageContainer}>
						<Image src={galleryImage5} alt='screen shot of the work' fill />
					</div>
				</button>
			</section>
			<section className={styles.nextContainer}>
				<Link href='works/signature-admin-panel' className={'primary-btn bg-grey'}>
					Next
				</Link>
			</section>
		</article>
	);
}

export default MytLanding;
