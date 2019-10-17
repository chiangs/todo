import { AcceptedTodoActions } from './actions';
import { GET_TODOS } from './constants';
import { TodoReducerState } from './types';
import { updatedState } from '_utils/state.utils';

export const initialState: TodoReducerState = {
	todos: []
};

const setTodos = (state, action): TodoReducerState => {
	const updatedProps = {
		todos: action.payload
	};
	return updatedState(state, updatedProps);
};

export const todoReducer = (
	state: TodoReducerState,
	action: AcceptedTodoActions
): TodoReducerState => {
	switch (action.type) {
		case GET_TODOS:
			return setTodos(state, action);
		default:
			return state;
	}
};
