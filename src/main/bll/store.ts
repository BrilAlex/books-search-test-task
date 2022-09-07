import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {SearchActionsType, searchReducer} from "../../features/search/bll/searchReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
  search: searchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>;
type RootActionsType = SearchActionsType;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, RootActionsType>;
type AppDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
