import {BookInitStateType, bookReducer, setBook} from "./bookReducer";
import {VolumeType} from "../../../main/dal/types";

let initState: BookInitStateType;

beforeEach(() => {
  initState = {
    volume: null,
  };
});

test("Book should be set to state", () => {
  const volume = {
    kind: "books#volume",
    id: "zyTCAlFPjgYC",
    volumeInfo: {
      title: "The Google story",
      authors: ["David A. Vise", "Mark Malseed"],
      description: "",
      categories: ["Browsers (Computer programs)"],
      imageLinks: {smallThumbnail: "", thumbnail: "", small: "", medium: "", large: "",},
    }
  } as VolumeType;

  const newState = bookReducer(initState, setBook(volume));

  expect(initState.volume).toBeNull();
  expect(newState.volume).toEqual(volume);
});
