import {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SearchResultType, setSearchResults} from "../../../../features/search/bll/searchReducer";
import {PATH} from "../pages/Pages";

export const Header: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendSearchQuery = () => {
    const results = [
      {id: 1, title: "Some title 1", imageUrl: "", category: "", authors: ["Author 1", "Author 2"]},
      {id: 2, title: "Some title 2", imageUrl: "", category: "", authors: ["Author"]},
      {id: 3, title: "Some title 3", imageUrl: "", category: "", authors: ["Author"]},
      {id: 4, title: "Some title 4", imageUrl: "", category: "", authors: ["Author 1", "Author 2"]},
    ] as SearchResultType[];

    dispatch(setSearchResults(results));
    navigate(PATH.SEARCH_RESULTS);
  };

  const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  const enterKayHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendSearchQuery();
    }
  };

  return (
    <div>
      <h1>Search for books</h1>
      <input
        value={searchQuery}
        onChange={changeSearchQuery}
        onKeyPress={enterKayHandler}
      />
      <button onClick={sendSearchQuery}>Search</button>
      <div>
        <span>Categories</span>
        <select>
          <option>All</option>
        </select>
      </div>
      <div>
        <span>Sorting by</span>
        <select>
          <option>relevance</option>
          <option>newest</option>
        </select>
      </div>
    </div>
  );
};
