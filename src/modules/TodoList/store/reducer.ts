import { AcceptedTodoActions } from './actions';
import { GET_TODOS, SET_CURRENT_TODOS, SET_UPCOMING_TODOS } from './constants';
import { TodoReducerState } from './types';
import { updatedState } from '_utils/state.utils';

export const initialState: TodoReducerState = {
	todos: [],
	current: [],
	upcoming: []
};

const setTodos = (state, action): TodoReducerState => {
	const updatedProps = {
		todos: action.payload
	};
	return updatedState(state, updatedProps);
};

const setCurrentTodos = (state, action): TodoReducerState => {
	const updatedProps = {
		current: action.payload
	};
	return updatedState(state, updatedProps);
};

const setUpcomingTodos = (state, action): TodoReducerState => {
	const updatedProps = {
		upcoming: action.payload
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
		case SET_CURRENT_TODOS:
			return setCurrentTodos(state, action);
		case SET_UPCOMING_TODOS:
			return setUpcomingTodos(state, action);
		default:
			return state;
	}
};
