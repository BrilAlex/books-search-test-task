import {VolumeType} from "../../../main/dal/types";
import {AppThunkType} from "../../../main/bll/store";
import {bookAPI} from "../dal/bookApi";

const initState = {
  volume: null as VolumeType | null,
};

export const bookReducer = (state:BookInitStateType = initState, action: BookActionsType):BookInitStateType => {
  switch(action.type) {
    case "book/SET-BOOK": {
      return {...state, volume: action.volume};
    }
    default: {
      return state;
    }
  }
};

export const setBook = (volume: VolumeType | null) => ({type: "book/SET-BOOK", volume} as const);

export const getBook = (id: string): AppThunkType => (dispatch) => {
  bookAPI.getBook(id)
    .then(response => {
      dispatch(setBook(response.data));
    });
};

export type BookInitStateType = typeof initState;
export type BookActionsType = ReturnType<typeof setBook>;
