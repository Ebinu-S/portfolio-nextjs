import { PROJECTS } from '@/constant';

export function getWorkData(id) {
	return PROJECTS.filter((data) => data.id === id)[0];
}

export function nextPage(currentId) {
	// find index of current id, if it is last then next link will be first id else next index
}
