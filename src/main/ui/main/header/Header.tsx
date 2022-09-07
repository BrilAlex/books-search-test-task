import {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getSearchResults} from "../../../../features/search/bll/searchReducer";
import {PATH} from "../pages/Pages";
import {useAppDispatch} from "../../../bll/store";

export const Header: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const sendSearchQuery = () => {
    dispatch(getSearchResults());
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
