import {
  loadMoreResults,
  SearchInitStateType,
  searchReducer, setCategorySearchParam, setOrderBySearchParam,
  setSearchResults, setSearchResultsTotalCount, setStartIndexSearchParam, setTitleSearchParam
} from "./searchReducer";
import {GetSearchResultsResponseType} from "../dal/searchApi";

let initState: SearchInitStateType;
let apiResponse: GetSearchResultsResponseType;

beforeEach(() => {
  initState = {
    searchParams: {
      title: "",
      category: "all",
      orderBy: "relevance",
      startIndex: 0,
      maxResults: 30,
    },
    results: [],
    totalResults: 0,
  };
  apiResponse = {
    kind: "books#volumes",
    items: [
      {
        kind: "books#volume",
        id: "zyTCAlFPjgYC",
        volumeInfo: {
          title: "The Google story",
          authors: ["David A. Vise", "Mark Malseed"],
          description: "",
          mainCategory: "",
          categories: ["Browsers (Computer programs)"],
          imageLinks: {smallThumbnail: "", thumbnail: "", small: "", medium: "", large: ""},
        },
      },
    ],
    totalItems: 1,
  };
});

test("Title search param should be set into state", () => {
  const title = "Some title";

  const newState = searchReducer(initState, setTitleSearchParam(title));

  expect(initState.searchParams.title).toBe("");
  expect(newState.searchParams.title).toBe(title);
});

test("Category search param should be set into state", () => {
  const category = "art";

  const newState = searchReducer(initState, setCategorySearchParam(category));

  expect(initState.searchParams.category).toBe("all");
  expect(newState.searchParams.category).toBe(category);
});

test("OrderBy search param should be set into state", () => {
  const orderBy = "newest";

  const newState = searchReducer(initState, setOrderBySearchParam(orderBy));

  expect(initState.searchParams.orderBy).toBe("relevance");
  expect(newState.searchParams.orderBy).toBe(orderBy);
});

test("StartIndex search param should be set into state", () => {
  const startIndex = 31;

  const newState = searchReducer(initState, setStartIndexSearchParam(startIndex));

  expect(initState.searchParams.startIndex).toBe(0);
  expect(newState.searchParams.startIndex).toBe(31);
});

test("Search results should be set into state", () => {
  const newState = searchReducer(initState, setSearchResults(apiResponse.items));

  expect(initState.results.length).toBe(0);
  expect(newState.results.length).toBe(1);
});

test("Total results count should be set into state", () => {
  const newState = searchReducer(initState, setSearchResultsTotalCount(apiResponse.totalItems));

  expect(initState.totalResults).toBe(0);
  expect(newState.totalResults).toBe(1);
});
