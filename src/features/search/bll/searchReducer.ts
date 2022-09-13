import {AppThunkType} from "../../../main/bll/store";
import {GetSearchResultsParamsType, searchAPI} from "../dal/searchApi";
import {VolumeType} from "../../../main/dal/types";

export const categories = ["all", "art", "biography", "computers", "history", "medical", "poetry"];
export const orderBy = ["relevance", "newest"];

const initState = {
  searchParams: {
    title: "",
    category: categories[0],
    orderBy: orderBy[0],
    startIndex: 0,
    maxResults: 30,
  } as GetSearchResultsParamsType,
  results: [] as VolumeType[],
  totalResults: 0,
};

export const searchReducer = (state: SearchInitStateType = initState, action: SearchActionsType): SearchInitStateType => {
  switch (action.type) {
    case "search/SET-TITLE-SEARCH-PARAM":
    case "search/SET-CATEGORY-SEARCH-PARAM":
    case "search/SET-ORDER-BY-SEARCH-PARAM":
    case "search/SET-START-INDEX-SEARCH-PARAM": {
      return {...state, searchParams: {...state.searchParams, ...action.payload}};
    }
    case "search/SET-SEARCH-RESULTS": {
      return {...state, results: [...state.results, ...action.results]};
    }
    case "search/SET-SEARCH-RESULTS-TOTAL-COUNT": {
      return {...state, totalResults: action.totalItems};
    }
    default: {
      return state;
    }
  }
};

export const setTitleSearchParam = (title: string) =>
  ({type: "search/SET-TITLE-SEARCH-PARAM", payload: {title}} as const);
export const setCategorySearchParam = (category: string) =>
  ({type: "search/SET-CATEGORY-SEARCH-PARAM", payload: {category}} as const);
export const setOrderBySearchParam = (orderBy: string) =>
  ({type: "search/SET-ORDER-BY-SEARCH-PARAM", payload: {orderBy}} as const);
export const setStartIndexSearchParam = (startIndex: number) =>
  ({type: "search/SET-START-INDEX-SEARCH-PARAM", payload: {startIndex}} as const);
export const setSearchResults = (results: VolumeType[]) =>
  ({type: "search/SET-SEARCH-RESULTS", results} as const);
export const setSearchResultsTotalCount = (totalItems: number) =>
  ({type: "search/SET-SEARCH-RESULTS-TOTAL-COUNT", totalItems} as const);

export const getSearchResults = (): AppThunkType => (dispatch, getState) => {
  const {searchParams} = getState().search;
  searchAPI.getSearchResults(searchParams).then((response) => {
    if (response.data.totalItems !== 0) {
      dispatch(setSearchResults(response.data.items));
      dispatch(setSearchResultsTotalCount(response.data.totalItems));
    }
  });
};

export const loadMoreResults = (startIndex: number): AppThunkType => (dispatch, getState) => {
  dispatch(setStartIndexSearchParam(startIndex));
  dispatch(getSearchResults());
};

export type SearchInitStateType = typeof initState;
export type SearchActionsType =
  | ReturnType<typeof setTitleSearchParam>
  | ReturnType<typeof setCategorySearchParam>
  | ReturnType<typeof setOrderBySearchParam>
  | ReturnType<typeof setStartIndexSearchParam>
  | ReturnType<typeof setSearchResults>
  | ReturnType<typeof setSearchResultsTotalCount>;
