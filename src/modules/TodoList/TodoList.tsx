import { NoTasks } from 'components';
import React, { useEffect, useState } from 'react';
import { CURRENT, UPCOMING } from '_constants/constants';
import { examples } from '_constants/exampleTodos';
import { checkDueDate } from '_services/date.service';
import { Todo } from '_types/types';
// import { TodoActions } from './store/actions';
// import { initialState, todoReducer } from './store/reducer';
import css from './TodoList.module.css';
import TodoListSection from './TodoListSection';
import { setUpdatedCollection } from '_services/object.service';

type Props = {};

const TodoList: React.FC<Props> = props => {
	// const [state, dispatch] = useReducer(todoReducer, initialState);
	const [todos, setTodos] = useState<Todo[]>([]);
	const [current, setCurrent] = useState<Todo[]>([]);
	const [upcoming, setUpcoming] = useState<Todo[]>([]);

	useEffect(() => {
		const resultFromApiFetch: Todo[] = examples;
		setTodos(resultFromApiFetch);
	}, []);

	useEffect(() => {
		// TODO: Debug this
		// dispatch(TodoActions.setTodos(todos));
		const todayTasks = todos.filter(item => checkDueDate(item.dateDue, 0));
		const tomorrowTasks = todos.filter(item =>
			checkDueDate(item.dateDue, 1)
		);
		setCurrent(todayTasks);
		setUpcoming(tomorrowTasks);
	}, [todos]);

	const onToggleStatus = (todo: Todo) => {
		const copy = setUpdatedCollection(todos, todo, 'id');
		setTodos(copy);
	};
	const onDeleteTodo = (todo: Todo) => {
		const copy = setUpdatedCollection(todos, todo, 'id', true);
		setTodos(copy);
	};

	const noTasks = (
		<section className={css.List__Empty}>
			<NoTasks />
		</section>
	);

	const list = (
		<section className={css.List}>
			<section>
				<h3 className={css.List__Label}>{CURRENT}</h3>
				<TodoListSection
					todos={current}
					onToggleStatus={onToggleStatus}
					onDeleteTodo={onDeleteTodo}
				/>
			</section>
			<section>
				<h3 className={css.List__Label}>{UPCOMING}</h3>
				<TodoListSection
					todos={upcoming}
					onToggleStatus={onToggleStatus}
					onDeleteTodo={onDeleteTodo}
				/>
			</section>
		</section>
	);

	return (
		<article data-test='component-todolist' className={css.TodoList}>
			{todos.length > 0 ? list : noTasks}
		</article>
	);
};

export default TodoList;
