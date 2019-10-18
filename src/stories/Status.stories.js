import React from 'react';
import Status from '../components/Header/Status';

import { withKnobs, select } from '@storybook/addon-knobs';

export default {
	title: 'Header Status',
	parameters: {
		component: Status,
		componentSubtitle: 'Displays total number of of tasks'
	}
};

export const status = () => (
	<Status numberOfTasks={select(`Number of tasks`, [0, 1, 11], 0)} />
);

status.story = {
	decorators: [withKnobs]
};
