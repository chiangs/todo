import {
	// createAction,
	createActionPayload,
	ActionsUnion
} from '_utils/state.utils';
import { GET_TODOS, SET_CURRENT_TODOS, SET_UPCOMING_TODOS } from './constants';
import { Todo } from '_types/types';

export const TodoActions = {
	setTodos: createActionPayload<typeof GET_TODOS, Todo[]>(GET_TODOS),
	setCurrentTodos: createActionPayload<typeof SET_CURRENT_TODOS, Todo[]>(
		SET_CURRENT_TODOS
	),
	setUpcomingTodos: createActionPayload<typeof SET_UPCOMING_TODOS, Todo[]>(
		SET_UPCOMING_TODOS
	)
};

export type AcceptedTodoActions = ActionsUnion<typeof TodoActions>;
