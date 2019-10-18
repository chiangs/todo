import React from 'react';
import TodoTime from '../components/TodoItem/TodoTime';

export default {
	title: 'Todo Time',
	parameters: {
		component: TodoTime,
		componentSubtitle: 'Displays due time of Todo information'
	}
};

const dateam = new Date('2015-03-25T00:00:00Z');
const datepm = new Date('2015-03-25T12:00:00Z');

export const am = () => <TodoTime date={dateam} />;

export const pm = () => <TodoTime date={datepm} />;
