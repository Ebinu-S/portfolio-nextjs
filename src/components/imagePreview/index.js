import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

import iconReturnHome from '../../assets/return.png';

function ImagePreview({ image, handleCloseModal }) {
	return (
		<motion.div
			key='imagePreview'
			className={styles.container}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			transition={{
				ease: 'easeInOut',
				duration: 0.25,
			}}>
			<div
				className={`${styles.imageContainer} ${
					image.isPotrait ? styles.imagePotrait : styles.imageLandscape
				}`}>
				<Image src={image.image} alt='preview on a modal' fill />
			</div>
			<div className={styles.buttonArea}>
				<button onClick={handleCloseModal} className='bg-grey'>
					<Image src={iconReturnHome} width={15} height={15} style={{ opacity: 0.6 }} />
				</button>
			</div>
		</motion.div>
	);
}

export default ImagePreview;
