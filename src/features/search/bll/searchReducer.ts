import {AppThunkType} from "../../../main/bll/store";
import {GetSearchResultsParamsType, searchAPI, VolumeType} from "../dal/searchApi";

const initState = {
  results: [] as VolumeType[],
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

export const setSearchResults = (results: VolumeType[]) =>
  ({type: "search/SET-SEARCH-RESULTS", results} as const);

export const getSearchResults = (params: GetSearchResultsParamsType): AppThunkType => (dispatch) => {
  searchAPI.getSearchResults(params).then((response) => {
    if (response.data.totalItems !== 0) {
      dispatch(setSearchResults(response.data.items));
    }
  });
};

export type SearchInitStateType = typeof initState;
export type SearchActionsType = ReturnType<typeof setSearchResults>;
