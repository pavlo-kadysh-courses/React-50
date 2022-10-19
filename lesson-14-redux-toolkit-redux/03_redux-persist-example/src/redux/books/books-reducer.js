import { combineReducers } from "@reduxjs/toolkit";

import items from "./items/items-slice";
import filter from "./filter/filter-slice";

const bookReducer = combineReducers({
    items,
    filter,
})

export default bookReducer;