import { Category } from '_types/types';

export const getAccentColorForCategory = (category: Category): string => {
	switch (category) {
		case 'Meeting':
			return 'pink';
		case 'Personal':
			return 'yellow';
		case 'Study':
			return 'blue';
		case 'Work':
			return 'green';
		default:
			return 'pink';
	}
};
