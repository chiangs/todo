import { Meridiem } from '_types/types';

export const getTimeFromDate = (date: Date): number[] => {
	const hours: number = date.getHours();
	const minutes: number = date.getMinutes();
	return [hours, minutes];
};

export const getMeridiemFromTime = (hours: number): Meridiem =>
	hours < 11 ? 'AM' : 'PM';

export const convertToMerdiem = (hours: number): number =>
	hours >= 12 ? hours - 12 : hours;

export const converTimeToString = (timeSection: number): string =>
	timeSection >= 10 ? timeSection.toString() : `0${timeSection}`;

export const checkDueDate = (dueDate: Date, daysAway: number): boolean => {
	const dueYr = dueDate.getFullYear();
	const dueMnth = dueDate.getMonth();
	const dueDay = dueDate.getDay();
	const today = new Date();
	const deadline =
		daysAway === 0 ? new Date() : new Date(today.getDate() + daysAway);
	const deadlineYr = deadline.getFullYear();
	const deadlineMnth = deadline.getMonth();
	const deadlineday = deadline.getDay();
	return (
		deadlineYr === dueYr &&
		deadlineMnth === dueMnth &&
		deadlineday === dueDay
	);
};
