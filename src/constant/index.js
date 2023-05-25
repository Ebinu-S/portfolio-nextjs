import Myt_thumb from '@/assets/preview/myt.webp'; // use a seperate custom image for main
import Myt_main from '@/assets/mockup/myt.png'; // use a seperate custom image for main
import Myt_1 from '@/assets/ss/myt_1.jpg';
import Myt_2 from '@/assets/ss/myt_2.jpg';
import Myt_3 from '@/assets/ss/myt_3.jpg';
import Myt_4 from '@/assets/ss/myt_4.jpg';
import Myt_5 from '@/assets/ss/myt_5.jpg';
import Myt_6 from '@/assets/ss/myt_6.jpg';
import Myt_7 from '@/assets/ss/myt_7.jpg';
import Myt_8 from '@/assets/ss/myt_8.jpg';
import Myt_9 from '@/assets/ss/myt_9.jpg';
import Myt_10 from '@/assets/ss/myt_10.jpg';
import Myt_11 from '@/assets/ss/myt_11.jpg';

import Mg_thumb from '@/assets/preview/mediagod.webp';
import Mg_main from '@/assets/mockup/mediagod.png';
import Mg_1 from '@/assets/ss/mediagod_1.jpg';
import Mg_2 from '@/assets/ss/mediagod_2.jpg';
import Mg_3 from '@/assets/ss/mediagod_3.jpg';
import Mg_4 from '@/assets/ss/mediagod_4.jpg';
import Mg_5 from '@/assets/ss/mediagod_5.jpg';

// myt admin
import Myta_thumb from '@/assets/preview/myt_admin.webp';
import Myta_main from '@/assets/mockup/myt_admin.png';
import Myta_1 from '@/assets/ss/myt_a_1.jpg';
import Myta_2 from '@/assets/ss/myt_a_2.jpg';
import Myta_3 from '@/assets/ss/myt_a_3.jpg';
import Myta_4 from '@/assets/ss/myt_a_4.jpg';
import Myta_5 from '@/assets/ss/myt_a_5.jpg';
import Myta_6 from '@/assets/ss/myt_a_6.jpg';
import Myta_7 from '@/assets/ss/myt_a_7.jpg';
import Myta_8 from '@/assets/ss/myt_a_8.jpg';
import Myta_9 from '@/assets/ss/myt_a_9.jpg';
import Myta_10 from '@/assets/ss/myt_a_10.jpg';
import Myta_11 from '@/assets/ss/myt_a_11.jpg';
import Myta_12 from '@/assets/ss/myt_a_12.jpg';
import Myta_13 from '@/assets/ss/myt_a_13.jpg';

// singature admin
import SigA_thumb from '@/assets/preview/signature_admin.webp';
import SigA_main from '@/assets/mockup/signature_admin.png';
import SigA_1 from '@/assets/ss/singature_a_1.jpg';
import SigA_2 from '@/assets/ss/singature_a_2.jpg';
import SigA_3 from '@/assets/ss/singature_a_3.jpg';
import SigA_4 from '@/assets/ss/singature_a_4.jpg';
import SigA_5 from '@/assets/ss/singature_a_5.jpg';

// signature landing page
import Sig_thumb from '@/assets/preview/signature.webp';
import Sig_main from '@/assets/mockup/signature.png';
import Sig_1 from '@/assets/ss/singanature_1.jpg';
import Sig_2 from '@/assets/ss/singanature_2.jpg';
import Sig_3 from '@/assets/ss/singanature_3.jpg';
import Sig_4 from '@/assets/ss/singanature_4.jpg';
import Sig_5 from '@/assets/ss/singanature_5.jpg';
import Sig_6 from '@/assets/ss/singanature_6.jpg';
import Sig_7 from '@/assets/ss/singanature_7.jpg';
import Sig_8 from '@/assets/ss/singanature_8.jpg';
import Sig_9 from '@/assets/ss/singanature_9.jpg';

//mvj academy
import Mvj_thumb from '@/assets/preview/mvj.webp';
import Mvj_main from '@/assets/mockup/mvj.png';
import Mvj_1 from '@/assets/ss/mvj_1.jpg';
import Mvj_2 from '@/assets/ss/mvj_2.jpg';
import Mvj_3 from '@/assets/ss/mvj_3.jpg';
import Mvj_4 from '@/assets/ss/mvj_4.jpg';
import Mvj_5 from '@/assets/ss/mvj_5.jpg';
import Mvj_6 from '@/assets/ss/mvj_6.jpg';
import Mvj_7 from '@/assets/ss/mvj_7.jpg';
import Mvj_8 from '@/assets/ss/mvj_8.jpg';
import Mvj_9 from '@/assets/ss/mvj_9.jpg';
import Mvj_10 from '@/assets/ss/mvj_10.jpg';

export const CUSTOM_MODAL_STYLES = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: 'transparent',
		borderRadius: '2rem',
		border: '2px solid var(--grey)',
		padding: 0,
	},
	overlay: {
		background: 'rgb(21 21 21 / 90%)',
	},
};

export const PROJECTS = [
	{
		id: 'MyTournament-Landing-page',
		title: 'MyTournament Landing page',
		image: Myt_main,
		thumbnail: Myt_thumb,
		gallery: [
			{ isPotrait: false, image: Myt_1 },
			{ isPotrait: false, image: Myt_2 },
			{ isPotrait: false, image: Myt_3 },
			{ isPotrait: false, image: Myt_4 },
			{ isPotrait: false, image: Myt_5 },
			{ isPotrait: false, image: Myt_6 },
			{ isPotrait: false, image: Myt_7 },
			{ isPotrait: true, image: Myt_8 },
			{ isPotrait: true, image: Myt_9 },
			{ isPotrait: true, image: Myt_10 },
			{ isPotrait: true, image: Myt_11 },
		],
		caseStudy: [
			{
				title: 'Overview',
				body: 'During my tenure at MyTournament.in, an esports application, I took the initiative to develop a captivating landing page to promote the platform and enhance user engagement. The primary objective was to create a page that embodied the essence of the app, offering a modern and gamey experience while increasing app downloads. To achieve this, I utilized Next.js for optimal SEO and implemented Framer Motion to deliver exceptional animations and interactions.',
			},
			{
				title: 'Approach',
				body: 'To ensure maximum visibility and search engine optimization, I chose to build the landing page using Next.js, a powerful framework known for its SEO-friendly features. Additionally, I incorporated Framer Motion, a motion library, to bring the page to life with stunning animations and interactions.',
			},
			{
				title: 'Design and User Experience',
				body: 'Given the nature of the esports industry, it was crucial to capture the essence of excitement and fun in the design. I carefully crafted a visually appealing layout that featured bold colors, sleek typography, and dynamic visuals to reflect the high-energy gaming atmosphere. The page layout and content were structured to guide users seamlessly through the key features and benefits of the MyTournament app, enticing them to take action and download.',
			},
			{
				title: 'Technical Implementation',
				body: 'Utilizing Next.js allowed me to optimize the landing page for search engines, ensuring that MyTournament.in ranked well in search results. The integration of Framer Motion added a touch of interactivity and delight, making the user experience more immersive and memorable. Leveraging my expertise in web development and UI/UX design, I implemented smooth transitions, eye-catching animations, and intuitive interactions to captivate users and create a lasting impression.',
			},
			{
				title: 'Results and Impact',
				body: 'The introduction of the new landing page significantly contributed to the success of MyTournament.in. The incorporation of captivating design elements, engaging animations, and seamless user experience resulted in an increased number of app downloads. The landing page effectively conveyed the unique features and value proposition of the app, attracting a wider audience and driving user acquisition.',
			},
			{
				title: 'Challenges and Solutions',
				body: "One of the main challenges was to strike the right balance between a visually stunning design and a fast-loading, SEO-optimized page. To overcome this, I leveraged Next.js's server-side rendering capabilities, optimizing performance while maintaining an aesthetically pleasing design. Additionally, thorough testing and optimization ensured a smooth user experience across different devices and screen sizes.",
			},
			{
				title: 'Conclusion',
				body: "As a proactive member of the MyTournament team, I took the initiative to develop a captivating landing page that aligned with the app's theme and increased user engagement. By utilizing Next.js for SEO optimization and implementing Framer Motion for impressive animations, I successfully delivered a visually stunning and engaging landing page. The result was an improved user experience, increased app downloads, and enhanced user acquisition for MyTournament.in, contributing to the overall success of the platform.",
			},
		],
		chips: ['next js', 'framer motion'],
		year: '2022',
		services: ['Web Development ,', 'Design'],
		liveLink: 'https://www.mytournament.in/',
	},
	{
		id: 'mediagod-Landing-page',
		title: 'MediaGod Landing page',
		image: Mg_main,
		thumbnail: Mg_thumb,
		gallery: [
			{ isPotrait: false, image: Mg_1 },
			{ isPotrait: false, image: Mg_2 },
			{ isPotrait: false, image: Mg_3 },
			{ isPotrait: true, image: Mg_4 },
			{ isPotrait: true, image: Mg_5 },
		],
		caseStudy: [
			{
				title: 'Overview',
				body: `During my time at MediaGod.in, I had the opportunity to spearhead the development of a visually stunning single page landing website that captured the essence of the company's offerings. With a focus on creating an out-of-this-world design inspired by galaxies and outer space, the objective was to create a captivating website that showcased the company's services while providing a seamless user experience. To achieve this, I utilized HTML, CSS, JS, and incorporated the powerful Three.js library.`,
			},
			{
				title: 'Design and User Experience',
				body: "Understanding the client's vision of an extraordinary design, I crafted a visually captivating landing page that immersed visitors in an otherworldly experience. Taking inspiration from galaxies and outer space, I incorporated a cosmic color palette, futuristic typography, and stunning visual effects. The website design was carefully structured to highlight the company's offers, ensuring an intuitive and engaging user experience that enticed visitors to explore further.",
			},
			{
				title: 'Technical Implementation',
				body: 'Using HTML, CSS, and JavaScript, I meticulously developed the single-page landing website, ensuring cross-browser compatibility and responsiveness across various devices. To add a touch of magic to the design, I incorporated the powerful Three.js library, enabling the creation of stunning 3D effects and animations. This elevated the overall visual experience and made the website truly unique.',
			},
			{
				title: 'Professional Email Setup',
				body: 'In addition to the website development, I also set up professional email accounts for MediaGod.in. This included configuring custom email addresses, integrating them with their domain, and ensuring seamless email communication. By establishing a professional email system, I helped enhance their brand image and credibility.',
			},
			{
				title: 'Results and Impact',
				body: "The launch of the new single page landing website had a significant impact on MediaGod.in's online presence. The extraordinary design and captivating visuals immediately caught the attention of visitors, leaving a memorable impression. The website effectively showcased the company's offers and unique value proposition in a visually compelling manner, resulting in increased user engagement and improved conversion",
			},
			{
				title: 'Challenges and Solutions',
				body: 'One of the challenges encountered during the project was balancing the visually stunning design with optimal website performance. To address this, I implemented performance optimization techniques, such as optimizing image sizes, minifying code, and leveraging caching mechanisms. Rigorous testing across various devices and browsers ensured a seamless and responsive user experience.',
			},
			{
				title: 'Conclusion',
				body: "As a part of the MediaGod.in team, I had the privilege to create a captivating single page landing website that surpassed expectations. By combining out-of-this-world design elements, the power of HTML, CSS, JS, and the immersive capabilities of Three.js, I delivered a visually stunning website that truly represented the client's vision. The website's cosmic theme, seamless user experience, and captivating visuals not only showcased the company's offers but also created a memorable brand presence. The result was an enhanced online presence, increased user engagement, and improved conversions for MediaGod.in.",
			},
		],
		chips: ['Three.js', 'HTML', 'CSS', 'JavaScript'],
		year: '2022',
		services: ['Web Development', ' Design', 'Hosting'],
		liveLink: 'https://www.mediagod.in/',
	},
	{
		id: 'Signature-Admin-Panel',
		title: 'Signature Admin Panel',
		image: SigA_main,
		thumbnail: SigA_thumb,
		gallery: [
			{ isPotrait: false, image: SigA_1 },
			{ isPotrait: false, image: SigA_2 },
			{ isPotrait: false, image: SigA_3 },
			{ isPotrait: false, image: SigA_4 },
			{ isPotrait: false, image: SigA_5 },
		],
		caseStudy: [
			{
				title: 'Overview',
				body: `In this case study, I will showcase my expertise in developing an efficient admin panel for Signature Work Abroad, a leading recruitment agency. The objective was to create a robust platform that would enable the agency to manage vacancies, blog content, reviews, and consultations seamlessly. Leveraging the power of React, I crafted a comprehensive admin panel that streamlined operations and enhanced productivity.`,
			},
			{
				title: 'Objectives',
				body: 'Signature Work Abroad approached me with the need for a centralized administration tool to manage their key operations effectively. The primary objectives were to provide the agency with the ability to create, read, update, and delete vacancies, blog posts, and reviews. Additionally, they required features to view submitted consultations and export consultation data as Excel files. The aim was to optimize workflow efficiency and enable easy data management.',
			},
			{
				title: 'Technical Implementation',
				body: "To fulfill the project requirements, I selected React as the framework for its flexibility and component-based architecture. Leveraging React's ecosystem, I built an intuitive and user-friendly admin panel that offered seamless CRUD functionality for vacancies, blog posts, and reviews. I utilized state management techniques to ensure data synchronization and implemented reusable components to enhance code maintainability.",
			},
			{
				title: 'Key Features and Functionality',
				body: "The admin panel delivered a range of essential features to facilitate efficient management of Signature Work Abroad's website content and consultations. Administrators were empowered with the ability to perform Create, Read, Update, and Delete (CRUD) operations on vacancies, blogs, and reviews. The consultation management system allowed them to view and export submitted consultations as Excel files, enabling streamlined data analysis and processing.",
			},
			{
				title: 'User Interface and Experience',
				body: "The user interface of the admin panel was designed to be intuitive and user-friendly. Leveraging React's component-based structure, I created a clean and organized layout that provided administrators with a seamless experience. The navigation was logical and straightforward, ensuring easy access to the different management functionalities. The form inputs were designed to be user-friendly and validated to prevent errors and inconsistencies.",
			},
			{
				title: 'Results and Impact',
				body: "The implementation of the admin panel brought significant improvements to Signature Work Abroad's operations. With the ability to manage vacancies, blogs, and reviews effortlessly, administrators experienced enhanced productivity and efficiency in maintaining and updating website content. The consultation management system streamlined the tracking and analysis of client inquiries, contributing to a more streamlined recruitment process. The admin panel's user-friendly interface and advanced features resulted in improved internal processes and client satisfaction.",
			},
			{
				title: 'Challenges and Solutions',
				body: "During the development process, I encountered challenges related to data management and synchronization. To overcome these hurdles, I leveraged React's state management capabilities and implemented efficient API calls to ensure real-time data updates and synchronization. Rigorous testing and debugging were conducted to eliminate any potential issues and ensure a stable and reliable admin panel.",
			},
			{
				title: 'Conclusion',
				body: 'Through the development of a comprehensive admin panel for Signature Work Abroad, I successfully addressed their need for streamlined operations and efficient data management. The utilization of React enabled the creation of a powerful and user-friendly platform, offering CRUD functionality for vacancies, blog posts, and reviews. The inclusion of features such as viewing submitted consultations and exporting data as Excel files enhanced productivity and provided valuable insights. The admin panel contributed to increased efficiency, improved decision-making, and enhanced user experience, positioning Signature Work Abroad as a leading recruitment agency in the industry.',
			},
		],
		chips: ['Three.js', 'HTML', 'CSS', 'JavaScript'],
		year: '2021',
		services: ['Web Development', 'Design', 'Hosting'],
		liveLink: null,
	},
	{
		id: 'MyTournament-Admin-Panel',
		title: 'MyTournament Admin Panel',
		image: Myta_main,
		thumbnail: Myta_thumb,
		gallery: [
			{ isPotrait: false, image: Myta_1 },
			{ isPotrait: false, image: Myta_2 },
			{ isPotrait: false, image: Myta_3 },
			{ isPotrait: false, image: Myta_4 },
			{ isPotrait: false, image: Myta_5 },
			{ isPotrait: false, image: Myta_6 },
			{ isPotrait: false, image: Myta_7 },
			{ isPotrait: false, image: Myta_8 },
			{ isPotrait: false, image: Myta_9 },
			{ isPotrait: false, image: Myta_10 },
			{ isPotrait: false, image: Myta_11 },
			{ isPotrait: false, image: Myta_12 },
			{ isPotrait: false, image: Myta_13 },
		],
		caseStudy: [
			{
				title: 'Overview',
				body: `I had the opportunity to undertake a challenging project to revamp the admin panel for MyTournament, a popular esports app. The existing app was plagued with performance issues and frequent crashes, hindering the smooth operation of the platform. Tasked with improving usability and efficiency, I took the bold step of rebuilding the admin panel from scratch. Leveraging React, Redux for state management, and a range of powerful tools, I successfully created a feature-rich and reliable admin panel that revolutionized the app's functionality.`,
			},
			{
				title: 'Objectives',
				body: 'The primary objective was to address the performance issues and design limitations of the existing admin panel. The client required a user-friendly and feature-rich solution that would empower their team to efficiently manage games, contests, user profiles, payments, notifications, and other essential functionalities. The aim was to create a fluid and responsive user interface that would streamline the entire tournament management process.',
			},
			{
				title: 'Challenges Faced',
				body: 'The primary challenge was the instability and sluggishness of the previous admin panel. To address this, I carefully analyzed the existing design and functionality to identify pain points and areas for improvement. The complexity of the app required meticulous planning and implementation to ensure seamless navigation, robust data management, and enhanced user experience. The goal was to create an admin panel that would empower the MyTournament team to efficiently manage various aspects of the platform, from games and contests to user management and notifications.',
			},
			{
				title: 'Technical Implementation',
				body: 'To fulfill the project requirements, I adopted React as the framework of choice, enabling me to build a modern and highly interactive admin panel. To manage the application state effectively, I integrated Redux, a popular state management library. This allowed for centralized state management, ensuring a consistent and synchronized experience across different components. Additionally, I utilized Axios for seamless data communication with the backend API, ensuring efficient retrieval and updating of data.',
			},
			{
				title: 'Design and User Experience',
				body: "To deliver a modern and intuitive user interface, I adopted a clean and fluid design approach. The redesigned admin panel featured a responsive and visually appealing layout, ensuring a consistent experience across devices. The UI framework Material-UI (MUI.com) provided a solid foundation for crafting an attractive and user-friendly interface. Leveraging the power of React and Redux, I implemented smooth navigation, real-time updates, and interactive elements that facilitated seamless interaction with the app's numerous features.",
			},
			{
				title: 'Feature-rich Admin Panel',
				body: "The new admin panel incorporated a wide range of functionalities, enabling administrators to efficiently manage all aspects of the MyTournament app. Key features included the ability to create, update, and delete games, contests, and user accounts. Administrators could publish contest results, manage payments, host contests, and send notifications to users. The integration of Axios facilitated seamless API communication, ensuring fast and reliable data exchange between the admin panel and the app's backend.",
			},
			{
				title: 'Improved Performance and Productivity',
				body: 'The revamped admin panel significantly enhanced productivity and reduced the time required for essential tasks. With the introduction of a fluid UI and optimized functionality, administrators experienced faster response times and improved efficiency when publishing contest results, creating and updating contests, managing user accounts, and overseeing payments. The streamlined and intuitive design eliminated confusion and reduced the learning curve for administrators, leading to increased productivity and a more seamless user experience.',
			},
			{
				title: 'Successful Implementation',
				body: "The successful implementation of the new admin panel transformed the MyTournament esports app, empowering the team to manage the platform more effectively. By leveraging React and Redux, I created a scalable and robust solution that not only addressed the previous performance issues but also provided a solid foundation for future growth. The use of Material-UI ensured a visually appealing and responsive interface that resonated with the app's overall aesthetics.",
			},
			{
				title: 'Conclusion',
				body: `Through the redesign and development of a cutting-edge admin panel for MyTournament, I successfully tackled the challenges posed by the previous app's performance issues. The new admin panel, built using React and Redux, delivered a feature-rich and user-friendly experience for administrators, enabling them to efficiently manage games, contests, user accounts, payments, and notifications. The improved performance and productivity resulted in a significant enhancement of the overall user experience. This project stands as a testament to my expertise in front-end development, UI/UX design, and the ability to transform complex applications into efficient and user-friendly solutions.`,
			},
		],
		chips: ['react', 'redux', 'node js', 'firebase', 'material ui', 'figma', 'UI UX design'],
		year: '2022',
		services: ['Web Development', 'Design', 'Hosting'],
		liveLink: null,
	},
	{
		id: 'signature-landing-page',
		title: 'Signature Landing Page',
		image: Sig_main,
		thumbnail: Sig_thumb,
		gallery: [
			{ isPotrait: false, image: Sig_1 },
			{ isPotrait: false, image: Sig_2 },
			{ isPotrait: false, image: Sig_3 },
			{ isPotrait: false, image: Sig_4 },
			{ isPotrait: false, image: Sig_5 },
			{ isPotrait: true, image: Sig_6 },
			{ isPotrait: true, image: Sig_7 },
			{ isPotrait: true, image: Sig_8 },
			{ isPotrait: true, image: Sig_9 },
		],
		caseStudy: [
			{
				title: 'Overview',
				body: `Signature Work Abroad, a renowned recruitment agency, sought to establish a strong online presence and expand their client reach. As a key member of the project, I successfully developed a comprehensive website that not only showcased their services but also empowered them to create vacancies, share insightful blog posts, and display client reviews. By utilizing the Next.js framework and integrating Firebase for data storage, I ensured a seamless and efficient user experience.`,
			},
			{
				title: 'Website Features and Functionality',
				body: "Understanding the specific requirements of Signature Work Abroad, I designed and developed a feature-rich website that catered to their needs. The website allowed the agency to create and manage job vacancies, providing a user-friendly interface for candidates to apply directly. Additionally, an engaging blog section was implemented to share industry insights and valuable content, positioning Signature Work Abroad as an industry thought leader. To instill trust and credibility, a dedicated section for client reviews and testimonials was incorporated, highlighting the agency's track record of success.",
			},
			{
				title: 'Expanding Client Reach and Streamlining Processes',
				body: "The primary goal of the website was to enhance Signature Work Abroad's visibility and attract a larger client base. By making their services accessible online, the agency could effectively reach potential clients from around the world. To facilitate seamless communication and client engagement, a consultation form was integrated, allowing interested individuals and businesses to easily connect with Signature Work Abroad for personalized assistance. This streamlined the process of client onboarding and enabled the agency to offer tailored solutions.",
			},
			{
				title: 'Technology Stack',
				body: 'To develop a robust and scalable website, I opted for the Next.js framework. This choice ensured optimal performance, efficient rendering, and enhanced search engine optimization (SEO) capabilities. Firebase, a versatile and reliable backend-as-a-service (BaaS) platform, was utilized for secure data storage, enabling real-time updates and seamless integration of dynamic content. The combination of Next.js and Firebase provided a solid foundation for an interactive and responsive website.',
			},
			{
				title: 'Results and Impact:',
				body: "The implementation of the new website had a significant impact on Signature Work Abroad's online presence and business operations. The dynamic features, such as the job vacancies, blog, and client reviews sections, elevated the agency's credibility and attracted a broader audience. By expanding their client reach and streamlining the consultation process, Signature Work Abroad experienced increased inquiries and engagement from potential clients. The website became a valuable tool for showcasing the agency's expertise, driving business growth, and establishing a strong online brand identity.",
			},
			{
				title: 'Conclusion',
				body: "Through my expertise in Next.js development and strategic use of Firebase, I successfully transformed Signature Work Abroad's vision into a dynamic recruitment website. The incorporation of essential features, such as job vacancies, a blog, client reviews, and a consultation form, empowered the agency to showcase their services, engage with clients, and expand their global reach. The seamless user experience and robust backend infrastructure ensured optimal performance and scalability. Overall, the new website played a vital role in elevating Signature Work Abroad's online presence, attracting a wider client base, and positioning them as a leading recruitment agency in the industry.",
			},
		],
		chips: ['next.js', 'react', 'firebase', 'figma', 'photoshop'],
		year: '2022',
		services: ['Web Development', 'Design', 'Hosting', 'UI design'],
		liveLink: 'https://www.signatureworkabroad.com/',
	},
	{
		id: 'mvj-landing-page',
		title: 'MVJ Academy WebPage',
		image: Mvj_main,
		thumbnail: Mvj_thumb,
		gallery: [
			{ isPotrait: false, image: Mvj_1 },
			{ isPotrait: false, image: Mvj_2 },
			{ isPotrait: false, image: Mvj_3 },
			{ isPotrait: false, image: Mvj_4 },
			{ isPotrait: false, image: Mvj_5 },
			{ isPotrait: true, image: Mvj_6 },
			{ isPotrait: true, image: Mvj_7 },
			{ isPotrait: true, image: Mvj_8 },
			{ isPotrait: true, image: Mvj_9 },
			{ isPotrait: true, image: Mvj_10 },
		],
		caseStudy: [
			{
				title: 'Overview',
				body: `In this case study, I will present my experience in developing a clean and modern landing page for MVJ Academy. The objective of this project was to create a simple yet visually appealing website using HTML, CSS, and Bootstrap. By leveraging the power of these technologies, I successfully delivered a user-friendly and aesthetically pleasing landing page for MVJ Academy.`,
			},
			{
				title: 'Objectives',
				body: "The primary objectives were to design and develop a simple yet impactful landing page that effectively communicates the academy's offerings and values. The aim was to create a visually appealing website that reflects the professionalism and quality of MVJ Academy.",
			},
			{
				title: 'Technical Implementation',
				body: "To achieve the desired objectives, I chose to utilize HTML and CSS as the foundation for the website. Leveraging the Bootstrap framework, I was able to expedite the development process while ensuring responsiveness and cross-browser compatibility. The modular nature of Bootstrap allowed for easy customization, enabling me to create a clean and visually appealing landing page that aligned with MVJ Academy's branding.",
			},
			{
				title: 'Design and User Experience',
				body: "The design of the landing page focused on simplicity and clarity, aligning with the client's vision of a clean and modern website. The use of ample white space, combined with a well-structured layout, enhanced readability and guided users' attention to key information. The color scheme was chosen to complement the academy's branding and create a visually pleasing experience.",
			},
			{
				title: 'Results and Impact:',
				body: "The development of the MVJ Academy website had a positive impact on the academy's online presence and engagement with its target audience. The clean and visually appealing design, coupled with the user-friendly interface, effectively conveyed the professionalism and quality of the academy. The responsive nature of the website ensured a seamless experience for users across different devices, enhancing accessibility and user satisfaction.",
			},

			{
				title: 'Conclusion',
				body: "Through the development of a clean and modern landing page for MVJ Academy, I successfully met the client's objectives of creating a user-friendly website that showcases the institution's offerings. By leveraging HTML, CSS, and Bootstrap, I delivered a visually appealing and responsive website that effectively communicates the academy's professionalism and credibility. The new landing page has positively impacted the institution's online presence, attracting prospective students and improving user engagement.",
			},
		],
		chips: ['HTML5', 'CSS3', 'Bootstrap', 'photoshop'],
		year: '2022',
		services: ['Web Development', 'Design', 'Hosting'],
		liveLink: 'https://www.mvjacademy.com/index.html',
	},
];
