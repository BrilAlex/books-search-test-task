import {combineReducers, legacy_createStore as createStore} from "redux";
import {searchReducer} from "../../features/search/bll/searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
});

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>;
