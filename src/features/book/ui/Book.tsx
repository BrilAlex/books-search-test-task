import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../main/bll/store";
import {useParams} from "react-router-dom";
import {getBook} from "../bll/bookReducer";

export const Book: FC = () => {
  const {id} = useParams<"id">();
  const book = useAppSelector(state => state.book.volume);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBook(id!));
  }, []);

  return (
    book ?
      <div>
        <div>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </div>
        <div>
          <p>{book.volumeInfo.mainCategory}</p>
          <h1>{book.volumeInfo.title}</h1>
          <p>{book.volumeInfo.authors.join(", ")}</p>
          <p>{book.volumeInfo.description}</p>
        </div>
      </div>
      :
      <div>Loading book...</div>
  );
};
