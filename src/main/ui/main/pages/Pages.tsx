import {Navigate, Route, Routes} from "react-router-dom";
import {SearchResults} from "../../../../features/searchResults/SearchResults";

export enum PATH {
  SEARCH_RESULTS = "/search-results",
}

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Navigate to={PATH.SEARCH_RESULTS}/>}/>
        <Route path={PATH.SEARCH_RESULTS} element={<SearchResults/>}/>
      </Routes>
    </div>
  );
};
