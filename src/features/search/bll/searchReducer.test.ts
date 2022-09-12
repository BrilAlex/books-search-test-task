import {
  SearchInitStateType,
  searchReducer,
  setSearchResults
} from "./searchReducer";
import {VolumeType} from "../../../main/dal/types";

let initState: SearchInitStateType;

beforeEach(() => {
  initState = {
    results: []
  }
});

test("Search results should be set to state", () => {
  const results = [
    {
      kind: "books#volume",
      id: "zyTCAlFPjgYC",
      volumeInfo: {
        title: "The Google story",
        authors: ["David A. Vise", "Mark Malseed"],
        description: "",
        mainCategory: "",
        categories: ["Browsers (Computer programs)"],
        imageLinks: {smallThumbnail: "", thumbnail: "", small: "", medium: "", large: "",},
      }
    },
  ] as VolumeType[];

  const newState = searchReducer(initState, setSearchResults(results));

  expect(initState.results.length).toBe(0);
  expect(newState.results.length).toBe(1);
});
