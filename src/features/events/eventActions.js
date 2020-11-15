import fetchSampleData from "../../app/api/mockApi"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer"
import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS, UPDATE_EVENT } from "./eventConstants"

export const createEvent = (payload) => {
    return {
        type: CREATE_EVENT,
        payload
    }
}

export const updateEvent = (payload) => {
    return {
        type: UPDATE_EVENT,
        payload
    }
}

export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: eventId
    }
}

export const loadEvents = () => {
    return async (dispatch) => {
        dispatch(asyncActionStart());
        try {
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENTS, payload: events});
            dispatch(asyncActionFinish());
        } catch (error) {
            dispatch(asyncActionError(error))
        }
    }
}