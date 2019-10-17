import * as React from 'react';
import { Todo } from '_types/types';
import { TodoItem } from 'components';

type Props = {
	todos: Todo[];
	onToggleStatus: Function;
	onDeleteTodo: Function;
};

const TodoListSection: React.FC<Props> = ({
	todos,
	onToggleStatus,
	onDeleteTodo
}) => {
	const section = todos.map(item => (
		<li key={item.id}>
			<TodoItem
				data={item}
				toggleTodoStatusHandler={onToggleStatus}
				deleteTodoHandler={onDeleteTodo}
			/>
		</li>
	));

	return <ul>{section}</ul>;
};

export default TodoListSection;
