import {FC} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {SearchResultType} from "../bll/searchReducer";

export const Search: FC = () => {
  const results = useSelector<AppStateType, SearchResultType[]>(state => state.search.results);

  return (
    <div>
      <div>Found {results.length} results</div>
      <div>
        {
          results.map(r => {
            return (
              <div key={r.id}>
                <img src={r.imageUrl} alt={r.title}/>
                <p>{r.category}</p>
                <h3>{r.title}</h3>
                <p>{r.authors.join(", ")}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
