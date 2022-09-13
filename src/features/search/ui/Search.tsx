import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../main/bll/store";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../main/ui/main/pages/Pages";
import s from "./Search.module.css";
import {loadMoreResults} from "../bll/searchReducer";

export const Search: FC = () => {
  const results = useAppSelector(state => state.search.results);
  const startIndex = useAppSelector(state => state.search.searchParams.startIndex);
  const maxResults = useAppSelector(state => state.search.searchParams.maxResults);
  const totalResults = useAppSelector(state => state.search.totalResults);
  const dispatch = useAppDispatch();

  const loadMoreHandler = () => {
    dispatch(loadMoreResults(startIndex + maxResults + 1));
  };

  return (
    <div className={s.container}>
      <div className={s.resultsCount}>Found {results.length} results</div>
      <div className={s.searchResults}>
        {
          results.map(r => {
            const {title, authors, categories, imageLinks} = r.volumeInfo;

            return (
              <NavLink key={r.id} to={`${PATH.BOOK}/${r.id}`} className={s.navLink}>
                <div className={s.searchResult}>
                  <div className={s.image}>
                    <img src={imageLinks.thumbnail} alt={title}/>
                  </div>
                  <p className={s.category}>{categories[0]}</p>
                  <h3>{title}</h3>
                  <p>{authors.join(", ")}</p>
                </div>
              </NavLink>
            );
          })
        }
      </div>
      {
        results.length < totalResults &&
        <div className={s.loadMore}>
          <button onClick={loadMoreHandler}>Load more</button>
        </div>
      }
    </div>
  );
};
