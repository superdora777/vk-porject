import { deleteCard } from "../cards/firebase";
import { editCard, getCard } from "./firebase";
import { EDIT_CARD, REMOVE_CARD, SET_CARD } from "./types";
import { cardDelete as deleteItem } from "../cards/actions";

export const setCard = ({ id, name, text }: any) => ({
  type: SET_CARD,
  payload: { id, name, text },
});

export const replaceCard = (id: string, data = {}) => ({
  type: EDIT_CARD,
  payload: data,
});

export const removeCard = () => ({ type: REMOVE_CARD });

//Запрос в базу даных
export const fetchCard = (cardId?: string) => (dispatch: any) => {
  if (!cardId) return;
  return getCard(cardId)
    .then((card) => {
      dispatch({ type: "fetchCardSuccess" });
      dispatch(setCard(card));
    })
    .catch(() => dispatch({ type: "fetchCardFail" }));
};

//Редактирование
export const cardEdit = (id: string, data) => (dispatch: any) =>
  editCard(id, data)
    .then(() => {
      dispatch({ type: "cardEditSuccess" });
      dispatch(replaceCard(id, data));
    })
    .catch(() => dispatch({ type: "cardEditFail" }));

//Удаление
export const cardDelete = (id: string) => (dispatch: any) => {
  return dispatch(deleteItem(id))
    .then(() => {
      dispatch({ type: "cardDeleteSuccess" });
      dispatch(removeCard());
    })
    .catch(() => dispatch({ type: "cardDeleteFail" }));
};
