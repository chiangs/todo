import React from 'react';
import { NoTasks } from '../components';

export default {
	title: 'No Tasks',
	parameters: {
		component: NoTasks,
		componentSubtitle: 'Displays when no tasks are available.'
	}
};

export const noTasks = () => <NoTasks />;
