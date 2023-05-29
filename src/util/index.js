import { PROJECTS } from '@/constant';

export function getWorkData(id) {
	return PROJECTS.filter((data) => data.id === id)[0];
}

export function nextPage(currentId) {
	const currentIndex = PROJECTS.findIndex((p) => p.id === currentId);
	if (currentIndex === PROJECTS.length - 1) {
		return PROJECTS[0].id;
	} else {
		return PROJECTS[currentIndex + 1].id;
	}
}
