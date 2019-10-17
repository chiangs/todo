import { Todo } from '_types/types';

export const examples: Todo[] = [
	{
		id: 'test',
		task: 'Meet with Tommy',
		dateCreated: new Date(),
		dateDue: new Date(),
		status: 'Done',
		category: 'Meeting'
	},
	{
		id: 'test2',
		task: 'Finish App',
		dateCreated: new Date(),
		dateDue: new Date(),
		status: 'Not started',
		category: 'Work'
	},
	{
		id: 'test3',
		task: 'Make dinner',
		dateCreated: new Date(),
		dateDue: new Date(),
		status: 'Not started',
		category: 'Personal'
	},
	{
		id: 'test4',
		task: 'Setup GraphQL schema',
		dateCreated: new Date(),
		dateDue: new Date(),
		status: 'Not started',
		category: 'Work'
	},
	{
		id: 'test5',
		task: 'Learn to code better',
		dateCreated: new Date(),
		dateDue: new Date(),
		status: 'Not started',
		category: 'Study'
	}
];
