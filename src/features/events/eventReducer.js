import {
	CREATE_EVENT,
	DELETE_EVENT,
	FETCH_EVENTS,
	UPDATE_EVENT,
} from './eventConstants';

const initialState = {
	events: [],
};

export const eventReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATE_EVENT:
			return {
				...state,
				events: [...state, payload],
			};
		case UPDATE_EVENT:
			return {
				...state,
				events: [
					...state.events.map((event) =>
						event.id === payload.id ? payload : event
					),
				],
			};
		case DELETE_EVENT:
			return {
				...state,
				events: [...state.events.filter((event) => event.id !== payload)],
			};
		case FETCH_EVENTS:
			return {
				...state,
				events: payload,
			};
		default:
			return state;
	}
};
