import {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getSearchResults} from "../../../../features/search/bll/searchReducer";
import {PATH} from "../pages/Pages";
import {useAppDispatch} from "../../../bll/store";
import {categories, orderBy} from "../../../../features/search/dal/searchApi";
import s from "./Header.module.css";

export const Header: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [order, setOrder] = useState(orderBy[0]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const sendSearchQuery = () => {
    dispatch(getSearchResults({title: searchQuery, category, orderBy: order}));
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

  const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value);
  };

  const changeOrderBy = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.currentTarget.value);
  };

  return (
    <div className={s.header}>
      <div className={s.container}>
        <h2>Search for books</h2>
        <div className={s.searchBlock}>
          <input
            value={searchQuery}
            onChange={changeSearchQuery}
            onKeyPress={enterKayHandler}
          />
          <button onClick={sendSearchQuery}>Search</button>
        </div>
        <div className={s.filtersBlock}>
          <span>Categories</span>
          <select onChange={changeCategory}>
            {categories.map((c, i) => <option key={c + "-" + i} value={c}>{c}</option>)}
          </select>
          <span>Sorting by</span>
          <select onChange={changeOrderBy}>
            {orderBy.map((o, i) => <option key={o + "-" + i} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};
