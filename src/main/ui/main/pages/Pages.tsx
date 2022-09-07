import {Route, Routes} from "react-router-dom";
import {Search} from "../../../../features/search/ui/Search";

export enum PATH {
  SEARCH_RESULTS = "/search-results",
}

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<></>}/>
        <Route path={PATH.SEARCH_RESULTS} element={<Search/>}/>
      </Routes>
    </div>
  );
};
