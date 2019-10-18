import { Todo } from '_types/types';

const today: Date = new Date();
const tomorrow: Date = new Date(today.getDate() + 3);

export const examples: Todo[] = [
	{
		id: 'test',
		task: 'Meet with Tommy',
		dateCreated: today,
		dateDue: today,
		status: 'Done',
		category: 'Meeting'
	},
	{
		id: 'test2',
		task: 'Finish App',
		dateCreated: today,
		dateDue: today,
		status: 'Not started',
		category: 'Work'
	},
	{
		id: 'test3',
		task: 'Make dinner',
		dateCreated: today,
		dateDue: today,
		status: 'Not started',
		category: 'Personal'
	},
	{
		id: 'test4',
		task: 'Setup GraphQL schema',
		dateCreated: tomorrow,
		dateDue: tomorrow,
		status: 'Not started',
		category: 'Work'
	},
	{
		id: 'test5',
		task: 'Learn to code better',
		dateCreated: tomorrow,
		dateDue: tomorrow,
		status: 'Not started',
		category: 'Study'
	},
	{
		id: 'test6',
		task: 'Secret ninja meetup',
		dateCreated: tomorrow,
		dateDue: tomorrow,
		status: 'Not started',
		category: 'Meeting'
	}
];
