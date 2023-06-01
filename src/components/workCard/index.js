import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';

function WorkCard({ data }) {
	return (
		<Link href={`works/${data.id}`} className={`${styles.cardContainer} card`}>
			<div className={styles.image}>
				<Image src={data.thumbnail} alt={data.title} fill />
			</div>
			<section className={styles.details}>
				<h2>{data.title}</h2>
			</section>
		</Link>
	);
}

export default WorkCard;
