/**
 * @function isEmptyObj
 * @param {obj} obj - any js object
 * @returns boolean whether object is empty or not
 */
export const isEmptyObj = (obj: object): boolean =>
	Object.entries(obj).length === 0 && obj.constructor === Object;

export const setUpdatedCollection = <T>(
	originalCollection: T[],
	updatedItem: T,
	propToMatch: string,
	remove: boolean = false
): T[] => {
	const copy: T[] = [...originalCollection];
	const itemIndex: number = copy.findIndex(
		item => item[propToMatch] === updatedItem[propToMatch]
	);
	const itemToUpdate: T | undefined = copy.find(
		item => item[propToMatch] === updatedItem[propToMatch]
	);
	if (itemToUpdate !== undefined && !remove) {
		const udpatedItem: T = Object.assign(itemToUpdate, updatedItem);
		copy[itemIndex] = udpatedItem;
		return copy;
	}
	if (itemToUpdate !== undefined && remove) {
		const part1: T[] = copy.slice(0, itemIndex);
		const part2: T[] = copy.slice(itemIndex + 1, copy.length + 1);
		return part1.concat(part2);
	}
	return copy;
};
