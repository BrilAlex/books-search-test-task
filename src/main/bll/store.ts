import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {SearchActionsType, searchReducer} from "../../features/search/bll/searchReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {BookActionsType, bookReducer} from "../../features/book/bll/bookReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  book: bookReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

type AppStateType = ReturnType<typeof rootReducer>;
type RootActionsType = SearchActionsType | BookActionsType;
type AppDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, RootActionsType>;

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
