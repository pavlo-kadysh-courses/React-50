import { SET_FILTER } from "./filter-types";

const initialState = "";

const filterReducer = (store = initialState, { type, payload }) => {
    switch(type) {
        case SET_FILTER:
            return payload
        default: 
            return store;
    }
}

export default filterReducer;