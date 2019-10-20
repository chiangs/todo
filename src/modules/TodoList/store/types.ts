import { Todo } from '_types/types';

export type TodoReducerState = {
	todos: Todo[];
	current: Todo[];
	upcoming: Todo[];
};
