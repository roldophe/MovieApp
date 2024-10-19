import { ActionTypes } from "../actions/ActionTypes";

const initialState = {
    movies: [],
}
export const TrendingReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        //statement
        case ActionTypes.FETCH_TRENDING:
            return {...state, movies: payload}
        default:
            return state
    }
}