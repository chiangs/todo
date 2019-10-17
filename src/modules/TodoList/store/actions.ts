import {
	// createAction,
	createActionPayload,
	ActionsUnion
} from '_utils/state.utils';
import { GET_TODOS } from './constants';
import { Todo } from '_types/types';

export const TodoActions = {
	setTodos: createActionPayload<typeof GET_TODOS, Todo[]>(GET_TODOS)
};

export type AcceptedTodoActions = ActionsUnion<typeof TodoActions>;
