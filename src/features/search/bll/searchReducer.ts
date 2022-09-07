import {AppThunkType} from "../../../main/bll/store";
import {searchAPI} from "../dal/searchApi";

const initState = {
  results: [] as SearchResultType[],
};

export const searchReducer = (state: SearchInitStateType = initState, action: SearchActionsType): SearchInitStateType => {
  switch (action.type) {
    case "search/SET-SEARCH-RESULTS":
      return {
        ...state,
        results: action.results,
      };
    default: {
      return state;
    }
  }
};

export const setSearchResults = (results: SearchResultType[]) =>
  ({type: "search/SET-SEARCH-RESULTS", results} as const);

export const getSearchResults = (): AppThunkType => (dispatch) => {
  const results = searchAPI.getSearchResults();
  dispatch(setSearchResults(results));
};

export type SearchInitStateType = typeof initState;
export type SearchActionsType = ReturnType<typeof setSearchResults>;
export type SearchResultType = {
  id: number
  title: string
  imageUrl: string
  category: string
  authors: string[]
};
