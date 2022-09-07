import {
  SearchInitStateType,
  searchReducer,
  SearchResultType,
  setSearchResults
} from "./searchReducer";

let initState: SearchInitStateType;

beforeEach(() => {
  initState = {
    results: []
  }
});

test("Search results should be set to state", () => {
  const results = [
    {id: 1, title: "Some title 1", imageUrl: "", category: "", authors: ["Author 1", "Author 2"]},
    {id: 2, title: "Some title 2", imageUrl: "", category: "", authors: ["Author"]},
    {id: 3, title: "Some title 3", imageUrl: "", category: "", authors: ["Author"]},
    {id: 4, title: "Some title 4", imageUrl: "", category: "", authors: ["Author 1", "Author 2"]},
  ] as SearchResultType[];

  const newState = searchReducer(initState, setSearchResults(results));

  expect(initState.results.length).toBe(0);
  expect(newState.results.length).toBe(4);
});
