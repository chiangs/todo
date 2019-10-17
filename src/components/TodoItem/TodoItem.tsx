import * as React from 'react';
import css from './TodoItem.module.css';
import { Todo } from '_types/types';
import ButtonCircle from 'components/ButtonCircle';
import TodoLabel from './TodoLabel';
import ButtonTrash from 'components/ButtonTrash';
import TodoTime from './TodoTime';
import AccentColor from './AccentColor';

type Props = {
	data: Todo;
	toggleTodoStatusHandler: Function;
	deleteTodoHandler: Function;
	editTodoHandler: Function;
};

const TodoItem: React.FC<Props> = ({
	data,
	toggleTodoStatusHandler,
	deleteTodoHandler,
	editTodoHandler
}) => {
	const onToggleTodoStatus = () => toggleTodoStatusHandler();
	const onDeleteTodo = () => deleteTodoHandler();
	return (
		<div data-test='component-todo' className={css.TodoItem} tabIndex={0}>
			<AccentColor category={data.category} />
			<div className={css.TodoItem__Content}>
				<ButtonCircle
					status={data.status}
					clickHandler={onToggleTodoStatus}
				/>
				<TodoTime date={data.dateDue} />
				<TodoLabel text={data.task} status={data.status} />
				<ButtonTrash clickHandler={onDeleteTodo} />
			</div>
		</div>
	);
};

export default React.memo(TodoItem);
