import { createCard, deleteCard, getCards } from "./firebase";
import { DeskType } from "../../types/DeskType";
import { ADD_CARD, REMOVE_CARD, SET_CARDS } from "./types";

export const addCard = (card: DeskType) => ({
  type: ADD_CARD,
  payload: { card },
});
export const removeCard = (removeId: string) => ({
  type: REMOVE_CARD,
  payload: { removeId },
});
export const setCards = (cards: DeskType[]) => ({
  type: SET_CARDS,
  payload: { cards },
});

//Запрос в базу даных
export const fetchCards = (columnId: string) => (dispatch: any) => {
  return getCards(columnId)
    .then((cards) => {
      dispatch({ type: "fetchCardsSuccess" });
      dispatch(setCards(cards));
    })
    .catch(() => dispatch({ type: "fetchCardsFail" }));
};

//Удаление
export const cardDelete = (id: string) => (dispatch: any) =>
  deleteCard(id)
    .then(() => {
      dispatch({ type: "cardDeleteSuccess" });
      dispatch(removeCard(id));
    })
    .catch(() => dispatch({ type: "cardDeleteFail" }));

//Создание
export const cardCreate = (name: string, columnId: string) => (dispatch: any) =>
  createCard(name, columnId)
    .then((doc: any) => {
      dispatch({ type: "cardCreateSuccess" });
      dispatch(
        addCard({
          id: doc.ref.id,
          ...doc.snap.data(),
        } as DeskType)
      );
    })
    .catch(() => dispatch({ type: "cardCreateFail" }));
