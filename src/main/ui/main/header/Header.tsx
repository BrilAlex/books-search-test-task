import {ChangeEvent, FC, KeyboardEvent} from "react";
import {useNavigate} from "react-router-dom";
import {
  categories,
  getSearchResults, orderBy,
  setCategorySearchParam, setOrderBySearchParam,
  setTitleSearchParam
} from "../../../../features/search/bll/searchReducer";
import {PATH} from "../pages/Pages";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import s from "./Header.module.css";

export const Header: FC = () => {
  const searchQuery = useAppSelector(state => state.search.searchParams.title);
  const category = useAppSelector(state => state.search.searchParams.category);
  const order = useAppSelector(state => state.search.searchParams.orderBy);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const sendSearchQuery = () => {
    dispatch(getSearchResults());
    navigate(PATH.SEARCH_RESULTS);
  };

  const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitleSearchParam(e.currentTarget.value));
  };

  const enterKayHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendSearchQuery();
    }
  };

  const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategorySearchParam(e.currentTarget.value));
  };

  const changeOrderBy = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrderBySearchParam(e.currentTarget.value));
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
          <select value={category} onChange={changeCategory}>
            {categories.map((c, i) => <option key={c + "-" + i} value={c}>{c}</option>)}
          </select>
          <span>Sorting by</span>
          <select value={order} onChange={changeOrderBy}>
            {orderBy.map((o, i) => <option key={o + "-" + i} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};
