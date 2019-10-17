import * as React from 'react';
import { Todo } from '_types/types';
import { TodoItem } from 'components';

type Props = {
	todos: Todo[];
	onToggleStatus: Function;
	onDeleteTodo: Function;
	onEditTodo: Function;
};

const TodoListSection: React.FC<Props> = ({
	todos,
	onToggleStatus,
	onDeleteTodo,
	onEditTodo
}) => {
	const section = todos.map(item => (
		<li key={item.id}>
			<TodoItem
				data={item}
				toggleTodoStatusHandler={onToggleStatus}
				deleteTodoHandler={onDeleteTodo}
				editTodoHandler={onEditTodo}
			/>
		</li>
	));

	return <ul>{section}</ul>;
};

export default TodoListSection;
