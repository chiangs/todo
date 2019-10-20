import { ButtonPlus, NoTasks } from 'components';
import React, { useEffect, useReducer } from 'react';
import { CURRENT, UPCOMING } from '_constants/constants';
import { examples } from '_constants/exampleTodos';
import { setUpdatedCollection } from '_services/object.service';
import { getDaysAwayTodos } from '_services/todo.service';
import { Todo } from '_types/types';
import { TodoActions } from './store/actions';
import { initialState, todoReducer } from './store/reducer';
import css from './TodoList.module.css';
import TodoListSection from './TodoListSection';

type Props = {};

const TodoList: React.FC<Props> = props => {
	const [state, dispatch] = useReducer(todoReducer, initialState);

	useEffect(() => {
		const resultFromApiFetch: Todo[] = examples;
		const todos = resultFromApiFetch;
		const todayTasks = getDaysAwayTodos(todos, 0);
		const tomorrowTasks = getDaysAwayTodos(todos, 1);
		dispatch(TodoActions.setTodos(todos));
		dispatch(TodoActions.setCurrentTodos(todayTasks));
		dispatch(TodoActions.setUpcomingTodos(tomorrowTasks));
	}, []);

	useEffect(() => {
		const todayTasks = getDaysAwayTodos(state.todos, 0);
		const tomorrowTasks = getDaysAwayTodos(state.todos, 1);
		dispatch(TodoActions.setCurrentTodos(todayTasks));
		dispatch(TodoActions.setUpcomingTodos(tomorrowTasks));
	}, [state.todos]);

	const onToggleStatus = (todo: Todo) => {
		const copy = setUpdatedCollection(state.todos, todo, 'id');
		dispatch(TodoActions.setTodos(copy));
	};
	const onDeleteTodo = (todo: Todo) => {
		const copy = setUpdatedCollection(state.todos, todo, 'id', true);
		console.log(copy);

		dispatch(TodoActions.setTodos(copy));
	};
	const onAddTask = () => console.log(`Show task form`);

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
					todos={state.current}
					onToggleStatus={onToggleStatus}
					onDeleteTodo={onDeleteTodo}
				/>
			</section>
			<section>
				<h3 className={css.List__Label}>{UPCOMING}</h3>
				<TodoListSection
					todos={state.upcoming}
					onToggleStatus={onToggleStatus}
					onDeleteTodo={onDeleteTodo}
				/>
			</section>
		</section>
	);

	return (
		<article data-test='component-todolist' className={css.TodoList}>
			{state.todos.length > 0 ? list : noTasks}
			<section className={css.AddTaskActions}>
				<ButtonPlus clickHandler={onAddTask} />
			</section>
		</article>
	);
};

export default TodoList;
