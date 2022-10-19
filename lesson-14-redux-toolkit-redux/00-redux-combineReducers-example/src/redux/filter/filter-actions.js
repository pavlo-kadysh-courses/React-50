import { SET_FILTER } from "./filter-types";

export const setFilter = payload => {
    return {
        type: SET_FILTER,
        payload,
    }
}