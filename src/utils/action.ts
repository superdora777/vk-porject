import { DeskType } from "../components/Desks/Desks";
import {
  ADD_CARD,
  ADD_COLUMNS,
  ADD_DESK,
  REMOVE_CARD,
  REMOVE_COLUMNS,
  REMOVE_DESK,
  SET_ACTIVE_DESK,
  SET_ACTIVE_PANEL,
  SET_CARDS,
  SET_COLUMNS,
  SET_DESKS,
  SET_LOADING,
  SET_OPENED_POPOUT,
  SET_POPOUT,
} from "./type";

//Доски
export const addDesk = (desk: DeskType) => ({
  type: ADD_DESK,
  payload: { desk },
});
export const removeDesk = (removeId: string) => ({
  type: REMOVE_DESK,
  payload: { removeId },
});
export const setDesks = (desks: DeskType[]) => ({
  type: SET_DESKS,
  payload: { desks },
});
export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: { loading },
});

//Колонки
export const addColumns = (column: DeskType) => ({
  type: ADD_COLUMNS,
  payload: { column },
});
export const removeColumn = (removeId: string) => ({
  type: REMOVE_COLUMNS,
  payload: { removeId },
});
export const setColumns = (columns: DeskType[]) => ({
  type: SET_COLUMNS,
  payload: { columns },
});

//Приложение
export const setActivePanel = (panel: string) => ({
  type: SET_ACTIVE_PANEL,
  payload: { panel },
});
export const setActiveDesk = (desk: DeskType | null) => ({
  type: SET_ACTIVE_DESK,
  payload: { desk },
});

//Карточки
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

//
export const setPopout = (popout: null) => ({
  type: SET_POPOUT,
  payload: { popout },
});
export const setOpenedPopoutName = (openedPopoutName: null) => ({
  type: SET_OPENED_POPOUT,
  payload: { openedPopoutName },
});
