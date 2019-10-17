import * as React from 'react';
import css from './TodoList.module.css';
import { NoTasks } from 'components';
import { Todo } from '_types/types';

type Props = {};

const TodoList: React.FC<Props> = props => {
	const todos: Todo[] = [];

	const tasksTodo: boolean = todos.length > 0;
	const noTasks = tasksTodo ? null : (
		<section className={css.List__Empty}>
			<NoTasks />
		</section>
	);

	const list = tasksTodo ? 'list component' : noTasks;

	return (
		<article data-test='component-todolist' className={css.TodoList}>
			{list}
		</article>
	);
};

export default TodoList;
