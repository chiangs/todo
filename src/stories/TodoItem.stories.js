import React from 'react';
import { action } from '@storybook/addon-actions';
import TodoItem from '../components/TodoItem';

export default {
	title: 'Todo Item',
	parameters: {
		component: TodoItem,
		componentSubtitle: 'Display Todo information'
	}
};

const todo = {
	id: 'testTodo',
	task: 'Finish the app',
	dateCreated: new Date(),
	dateDue: new Date(),
	status: 'Not started',
	category: 'Work'
};

const todoDone = {
	...todo,
	status: 'Done'
};

export const todoItemDefault = () => (
	<TodoItem
		data={todo}
		toggleTodoStatusHandler={action(' action')}
		deleteTodoHandler={action(' action')}
		editTodoHandler={action(' action')}
	/>
);

export const todoItemDone = () => (
	<TodoItem
		data={todoDone}
		toggleTodoStatusHandler={action(' action')}
		deleteTodoHandler={action(' action')}
		editTodoHandler={action(' action')}
	/>
);
