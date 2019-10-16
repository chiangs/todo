/**
 * @function isEmptyObj
 * @param {obj} obj - any js object
 * @returns boolean whether object is empty or not
 */
export const isEmptyObj = (obj: object): boolean =>
	Object.entries(obj).length === 0 && obj.constructor === Object;
