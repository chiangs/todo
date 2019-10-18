import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import TodoLabel from '../components/TodoItem/TodoLabel';

export default {
	title: 'Todo Label',
	parameters: {
		component: TodoLabel,
		componentSubtitle: 'Display task of Todo information'
	}
};

const statuses = ['Done', 'Not started'];

export const label = () => (
	<TodoLabel
		text='Finish this app'
		status={select(`Status`, statuses, statuses[0])}
	/>
);

label.story = {
	decorators: [withKnobs]
};
