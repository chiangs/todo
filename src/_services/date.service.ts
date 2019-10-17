import { Meridiem } from '_types/types';

export const getTimeFromDate = (date: Date): number[] => {
	const hours: number = date.getHours();
	const minutes: number = date.getMinutes();
	return [hours, minutes];
};

export const getMeridiemFromTime = (hours: number): Meridiem =>
	hours < 11 ? 'AM' : 'PM';

export const converTimeToString = (timeSection: number): string =>
	timeSection >= 10 ? timeSection.toString() : `0${timeSection}`;
