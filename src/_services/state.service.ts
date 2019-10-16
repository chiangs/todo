/**
 * @function updateStateObj
 * @param {state} state - current state object
 * @param {updatedProperties} updatedProperties - slice of state that is updated
 * @returns updated state object
 */
export const updateStateObj = (state: any, updatedProperties: any): any => ({
	...state,
	...updatedProperties
});
