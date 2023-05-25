import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ImagePreview({ image, handleCloseModal }) {
	return (
		<div className={styles.container}>
			<motion.div
				layoutId={image}
				className={styles.imageContainer}
				style={{
					width: image.isPotrait ? '15vw' : '50vw',
				}}>
				<Image src={image.image} alt='preview on a modal' fill />
			</motion.div>
			<div className={styles.buttonArea}>
				<button onClick={handleCloseModal} className='bg-grey'>
					Close
				</button>
			</div>
		</div>
	);
}

export default ImagePreview;
