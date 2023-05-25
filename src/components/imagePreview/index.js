import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

function ImagePreview({ image, handleCloseModal }) {
	return (
		<AnimatePresence mode='wait' key='imagePreview'>
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
					}`}
					style={{
						width: image.isPotrait ? '15vw' : '50vw',
					}}>
					<Image src={image.image} alt='preview on a modal' fill />
				</div>
				<div className={styles.buttonArea}>
					<button onClick={handleCloseModal} className='bg-grey'>
						Close
					</button>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default ImagePreview;
