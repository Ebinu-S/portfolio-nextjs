import React from 'react';
import styles from '@/styles/Work.module.scss';
import { PROJECTS } from '@/constant';
import WorkCard from '@/components/workCard';

function Works() {
	return (
		<>
			<h1>My Projects</h1>
			<div className={styles.workListcontainer}>
				{PROJECTS.map((project) => (
					<WorkCard data={project} key={project.title} />
				))}
			</div>
		</>
	);
}

export default Works;
