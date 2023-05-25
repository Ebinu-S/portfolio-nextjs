import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import workStyles from '@/styles/Work.module.scss';

function WorkCard({ data }) {
	return (
		<Link href={`works/${data.id}`} className={`${styles.cardContainer} card`}>
			<div className={styles.image}>
				<Image src={data.thumbnail} alt={data.title} fill />
			</div>
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
