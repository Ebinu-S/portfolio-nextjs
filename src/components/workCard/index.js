import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import workStyles from '@/styles/Work.module.scss';
import { motion } from 'framer-motion';

function WorkCard({ data }) {
	return (
		<Link href={`works/${data.id}`} className={`${styles.cardContainer} card`}>
			<motion.div layoutId={data.id} className={styles.image}>
				<Image src={data.thumbnail} alt={data.title} fill />
			</motion.div>
			<div className={styles.hrLine}></div>
			<section className={styles.details}>
				<h2>{data.title}</h2>
				<div className={workStyles.chipContainer}>
					{data.chips.map((chip) => (
						<div className={workStyles.chip} key={chip}>
							{chip}
						</div>
					))}
				</div>
			</section>
		</Link>
	);
}

export default WorkCard;
