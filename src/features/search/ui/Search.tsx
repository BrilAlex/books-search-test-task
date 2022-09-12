import {FC} from "react";
import {useAppSelector} from "../../../main/bll/store";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../main/ui/main/pages/Pages";

export const Search: FC = () => {
  const results = useAppSelector(state => state.search.results);

  return (
    <div>
      <div>Found {results.length} results</div>
      <div>
        {
          results.map(r => {
            const {title, authors, categories, imageLinks} = r.volumeInfo;

            return (
              <NavLink key={r.id} to={`${PATH.BOOK}/${r.id}`}>
                <div>
                  <img src={imageLinks.thumbnail} alt={title}/>
                  <p>{categories[0]}</p>
                  <h3>{title}</h3>
                  <p>{authors.join(", ")}</p>
                </div>
              </NavLink>
            );
          })
        }
      </div>
    </div>
  );
};
