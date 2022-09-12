import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../main/bll/store";
import {useParams} from "react-router-dom";
import {getBook} from "../bll/bookReducer";
import s from "./Book.module.css";

export const Book: FC = () => {
  const {id} = useParams<"id">();
  const book = useAppSelector(state => state.book.volume);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBook(id!));
  }, []);

  return (
    book ?
      <div className={s.container}>
        <div className={s.image}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </div>
        <div className={s.info}>
          <p className={s.category}>{book.volumeInfo.mainCategory}</p>
          <h1>{book.volumeInfo.title}</h1>
          <p className={s.authors}>{book.volumeInfo.authors.join(", ")}</p>
          <p className={s.description}>{book.volumeInfo.description}</p>
        </div>
      </div>
      :
      <div>Loading book...</div>
  );
};
