import {FC} from "react";
import {useAppSelector} from "../../../main/bll/store";

export const Search: FC = () => {
  const results = useAppSelector(state => state.search.results);

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
