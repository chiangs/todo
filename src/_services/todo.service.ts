import { checkDueDate } from './date.service';
import { Todo } from '_types/types';

export const getDaysAwayTodos = (todos: Todo[], daysAway: number) =>
	todos.filter(todo => checkDueDate(todo.dateDue, daysAway));
