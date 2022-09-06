import {ChangeEvent, FC, useState} from "react";

export const Header: FC = () => {
  const [searchRequest, setSearchRequest] = useState("");

  const onSearchRequestChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchRequest(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Search for books</h1>
      <input value={searchRequest} onChange={onSearchRequestChange}/>
      <button>Search</button>
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
