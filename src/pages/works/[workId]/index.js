import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getWorkData, nextPage } from '@/util';
import styles from '@/styles/Work.module.scss';

// images
import iconExternaLink from '@/assets/icons/external-link.svg';
import ReactModal from 'react-modal';
import ImagePreview from '@/components/imagePreview';
import { CUSTOM_MODAL_STYLES } from '@/constant';
import { AnimatePresence, motion } from 'framer-motion';

function WorkPage() {
	const router = useRouter();
	const [data, setData] = useState({});
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImg, setSelectedImg] = useState(null);

	useEffect(() => {
		const tempData = getWorkData(router.query.workId);
		setData(tempData);
	}, [router]);

	function handlePreviewClick(img) {
		setSelectedImg(img);
		setModalOpen(!modalOpen);
	}

	function handeCloseModal() {
		setModalOpen(false);
	}

	function handleNext() {
		const id = nextPage(data.id);
		router.push('/works/' + id);
	}

	return (
		<>
			<Head>
				<title>{data && data.title} - Ebinu Suneer</title>
			</Head>
			{data ? (
				<article className={styles.container}>
					{data.chips && (
						<section className={styles.chipContainer}>
							{data.chips.map((chip) => (
								<div className={styles.chip} key={chip}>
									{chip}
								</div>
							))}
						</section>
					)}

					<section className={styles.contentContainer}>
						<h1>{data.title}</h1>
						<motion.div layoutId={data.id} className={styles.mainImage}>
							<Image src={data.image} alt='my tounamenent main image' fill />
						</motion.div>
						<div className={styles.descBox}>
							<div className={styles.descDetails}>
								<div className={styles.descDetail}>
									<div>Year</div>
									<p>{data.year}</p>
								</div>

								{data.services && (
									<div className={styles.descDetail}>
										<div>Services</div>
										<p className={styles.servicesCotainer}>
											{data.services.map((service, index) => (
												<>
													<span key={service}>{service}</span>
													{data.services.length - 1 !== index && <>,&nbsp;</>}
												</>
											))}
										</p>
									</div>
								)}

								{data.liveLink && (
									<div className={styles.descDetail}>
										<div>Visit </div>
										<a href={data.liveLink} target='_blank'>
											<Image
												src={iconExternaLink}
												alt='external link icon'
												width={20}
												height={20}
											/>
										</a>
									</div>
								)}
							</div>

							{data.caseStudy && (
								<div className={styles.descContent}>
									<h3>Case study</h3>
									{data.caseStudy.map((study) => (
										<div key={study.title}>
											<h4>{study.title}&nbsp;:</h4>
											<p>{study.body}</p>
										</div>
									))}
								</div>
							)}
						</div>
					</section>

					{data.gallery && (
						<section className={styles.galleryGrid}>
							{data.gallery.map((imgdata, index) => (
								<button
									key={index}
									className={styles.galleryBox}
									onClick={() => handlePreviewClick(imgdata)}>
									<div className={styles.galleryImageContainer}>
										<Image src={imgdata.image} alt='screen shot of the work' fill />
									</div>
								</button>
							))}
						</section>
					)}

					<section className={styles.nextContainer}>
						<button onClick={handleNext} className={'primary-btn bg-grey'}>
							Next
						</button>
					</section>
				</article>
			) : (
				<p>Loading..</p>
			)}

			<ReactModal
				isOpen={modalOpen}
				style={CUSTOM_MODAL_STYLES}
				shouldCloseOnOverlayClick={true}
				preventScroll={true}
				shouldCloseOnEsc={true}
				onRequestClose={handeCloseModal}>
				<AnimatePresence id='modal'>
					<ImagePreview image={selectedImg} handleCloseModal={handeCloseModal} />
				</AnimatePresence>
			</ReactModal>
		</>
	);
}

export default WorkPage;
