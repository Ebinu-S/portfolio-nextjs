import React from 'react';
import styles from '@/styles/About.module.scss';
import Image from 'next/image';

// icons
import iconFacebook from '@/assets/facebook.svg';
import iconInstagram from '@/assets/instagram.svg';
import iconGithub from '@/assets/github.svg';
import iconLinkedin from '@/assets/linkedin.svg';
import iconGmail from '@/assets/gmail.svg';
import iconResume from '@/assets/description.svg';

// skill icons
import iconReact from '@/assets/icons/react.svg';
import iconNext from '@/assets/icons/nextjs.svg';
import iconFirebase from '@/assets/icons/firebase.svg';
import iconNode from '@/assets/icons/node.svg';
import iconFlutter from '@/assets/icons/flutter.svg';

import iconRuby from '@/assets/icons/ruby-on-rails.svg';
import iconWebflow from '@/assets/icons/webflow.svg';
import iconFigma from '@/assets/icons/figma.svg';
import iconTailwind from '@/assets/icons/tailwind.svg';
import iconHtml from '@/assets/icons/html.svg';
import iconCss from '@/assets/icons/css.svg';
import iconJs from '@/assets/icons/javascript.svg';
import iconBootsrap from '@/assets/icons/bootstrap.svg';
import iconDart from '@/assets/icons/dart.svg';
import iconGit from '@/assets/icons/git.svg';
import iconGitHub from '@/assets/icons/github.svg';
import iconMaterial from '@/assets/icons/material.svg';
import iconPhotoshop from '@/assets/icons/adobe-photoshop.svg';
import { motion } from 'framer-motion';

function About() {
	return (
		<div className={styles.container}>
			<section className={styles.userCard}>
				<div className={styles.nameBox}>
					<h1>Ebinu Suneer</h1>
					<p>ebinusuneer2nd@gmail.com</p>
				</div>
				<div className={styles.socialLinks}>
					<a
						href='https://www.linkedin.com/in/ebinu-suneer/'
						target='_blank'
						className={styles.socialLink}>
						<Image src={iconLinkedin} alt='linkedin icon' fill />
					</a>
					<a href='https://github.com/Ebinu-S' target='_blank' className={styles.socialLink}>
						<Image src={iconGithub} alt='Github icon' fill />
					</a>
					<a
						href='https://www.facebook.com/eibie.ebin/'
						target='_blank'
						className={styles.socialLink}>
						<Image src={iconFacebook} alt='facebook icon' fill />
					</a>
					<a
						href='https://www.instagram.com/dr.retr0_o/'
						target='_blank'
						className={styles.socialLink}>
						<Image src={iconInstagram} alt='instagram icon' fill />
					</a>
					{/* <a href='mailto:ebinusuneer2nd@gmail.com' target='_blank' className={styles.socialLink}>
						<Image src={iconGmail} alt='facebook icon' fill />
					</a> */}
				</div>
				<div className={styles.contactBlock}>
					<a
						href='https://drive.google.com/file/d/1vqtNgisawRcdxXTEWuIkMhlkSQ-IaWJd/view?usp=sharing'
						target='_blank'>
						<Image src={iconResume} alt='resume icon' sizes='30px' width={15} height={15} />
						<span style={{ marginLeft: 'var(--xs)' }}>Resume</span>
					</a>
					<a
						className={`${styles.contactButton} primary-btn bg-grey`}
						href='mailto:ebinusuneer2nd@gmail.com'>
						Contact Me
					</a>
				</div>
			</section>

			<section className={styles.descContainer}>
				<div className={styles.aboutBlock}>
					<h2>
						About <span className={styles.aboutHeadingGradient}>Me</span>
					</h2>
					<p>
						Hi, I'm Ebinu Suneer, a web designer specialized in creating stunning, user-friendly
						websites. I work closely with my clients to understand their unique needs and develop a
						personalized approach that reflects their brand identity. Using cutting-edge
						technologies and a passion for UI design, I aim to deliver exceptional online
						experiences that exceed my clients' expectations. Let's work together to bring your
						website vision to life!
					</p>
					<p>
						Let's build a website that makes an impact for your business 💥. I believe that a
						website is more than just an online presence - it's a tool that can help you achieve
						your business goals, whether that's increasing sales, building your brand, or reaching a
						wider audience 🚀. That's why I take a results-driven approach to web design, focusing
						on creating websites that are not only beautiful but also functional and user-friendly
						🎨. Together, we can create a website that stands out from the crowd and delivers real,
						measurable results for your business 📈.
					</p>
				</div>

				<div className={styles.aboutBlock}>
					<h2>Experience</h2>

					<div className={styles.expirienceBlock}>
						<div className={styles.expirienceHeader}>
							<h3>Freelance</h3>
							<p>Web Development, UI UX</p>
							<span>2021 - present</span>
						</div>
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

					<div className={styles.expirienceBlock}>
						<div className={styles.expirienceHeader}>
							<h3>Quadzeta Technology</h3>
							<p>Frontend engineer</p>
							<span>Jul 2022 - May 2023</span>
						</div>
						<p>
							I have extensive experience in driving the development and implementation of
							state-of-the-art admin panels using ReactJs, resulting in significant improvements in
							speed and efficiency. Additionally, I excel in designing visually stunning website
							landing pages using Next.js, showcasing my strong eye for design and attention to
							detail. I have also led comprehensive overhauls of mobile app codebases for
							Mytournament esports company, resulting in substantially faster and more user-friendly
							apps. Through close collaboration with backend development teams, I have optimized app
							APIs and performance, consistently exceeding performance metrics and contributing
							significantly to company growth and success.
						</p>
					</div>

					<div className={styles.expirienceBlock}>
						<div className={styles.expirienceHeader}>
							<h3>MediaGod</h3>
							<p>Web Developer</p>
							<span>Jan 2022 - Jul 2022</span>
						</div>
						<p>
							As a web developer, I have a proven track record of creating visually stunning and
							responsive websites for clients using HTML, CSS, and JavaScript. I also have
							experience in hosting and managing client websites, including implementing
							professional email accounts. My expertise in web hosting, server management, and issue
							resolution has enabled me to provide top-notch service to clients. Additionally, I
							designed and developed my company's own website, which showcases my exceptional design
							and coding skills.
						</p>
					</div>
				</div>

				<div className={styles.aboutBlock}>
					<h2>Education</h2>
					<div className={styles.expirienceBlock}>
						<div className={styles.expirienceHeader}>
							<h3>Mar Baselios Christian College of Engineering and Technology</h3>
							<p>Bachelor of Technology in Computer Science and Engineering</p>
							<span>2018 -2022</span>
						</div>
						<p>
							During my BTech, I took courses in various computer science subjects such as data
							structures, computer organization and architecture, operating systems, and more. These
							courses helped me improve my skills in software development, programming paradigms,
							and information security. Additionally, I studied advanced topics such as machine
							learning, data mining, and embedded systems. Overall, my BTech experience equipped me
							with a strong foundation in computer science and a solid understanding of programming
							concepts that I continue to use in my work as a developer.
						</p>
					</div>
				</div>

				<div className={styles.aboutBlock}>
					<h2>Skills</h2>
					<div className={styles.skillsContainer}>
						<div className={styles.skillBlock}>
							<Image src={iconReact} alt='graphics' width={20} height={20} />
							<p>React.Js</p>
						</div>

						<div className={styles.skillBlock}>
							<Image src={iconNext} alt='graphics' width={20} height={20} />
							<p>Next Js</p>
						</div>

						<div className={styles.skillBlock}>
							<Image src={iconReact} alt='graphics' width={20} height={20} />
							<p>React Native</p>
						</div>

						<div className={styles.skillBlock}>
							<Image src={iconFirebase} alt='graphics' width={20} height={20} />
							<p>Firebase</p>
						</div>

						<div className={styles.skillBlock}>
							<Image src={iconNode} alt='graphics' width={20} height={20} />
							<p>Node.Js</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconFlutter} alt='graphics' width={20} height={20} />
							<p>Flutter</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconRuby} alt='graphics' width={20} height={20} />
							<p>Ruby on Rails</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconWebflow} alt='graphics' width={20} height={20} />
							<p>Webflow</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconFigma} alt='graphics' width={20} height={20} />
							<p>Figma</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconTailwind} alt='graphics' width={20} height={20} />
							<p>Tailwind Css</p>
						</div>
						{/* break */}
						<div className={styles.skillBlock}>
							<Image src={iconHtml} alt='graphics' width={20} height={20} />
							<p>HTML</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconCss} alt='graphics' width={20} height={20} />
							<p>Css</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconJs} alt='graphics' width={20} height={20} />
							<p>javascript</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconBootsrap} alt='graphics' width={20} height={20} />
							<p>Bootstrap</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconDart} alt='graphics' width={20} height={20} />
							<p>Dart</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconGit} alt='graphics' width={20} height={20} />
							<p>Git</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconGitHub} alt='graphics' width={20} height={20} />
							<p>Github</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconMaterial} alt='graphics' width={20} height={20} />
							<p>Material UI</p>
						</div>
						<div className={styles.skillBlock}>
							<Image src={iconPhotoshop} alt='graphics' width={20} height={20} />
							<p>Photoshop</p>
						</div>
					</div>
				</div>
				<a
					className={`${styles.contactButton} primary-btn bg-grey`}
					href='mailto:ebinusuneer2nd@gmail.com'>
					Contact Me
				</a>
			</section>
		</div>
	);
}

export default About;
