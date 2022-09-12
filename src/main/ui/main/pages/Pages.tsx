import {Route, Routes} from "react-router-dom";
import {Search} from "../../../../features/search/ui/Search";
import {Book} from "../../../../features/book/ui/Book";

export enum PATH {
  SEARCH_RESULTS = "/search-results",
  BOOK = "/book",
}

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<></>}/>
        <Route path={PATH.SEARCH_RESULTS} element={<Search/>}/>
        <Route path={`${PATH.BOOK}/:id`} element={<Book/>}/>
      </Routes>
    </div>
  );
};
