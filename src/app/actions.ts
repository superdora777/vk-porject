import { ReactNode } from "react";
import { DeskType } from "../types/DeskType";
import {
  SET_ACTIVE_CARD,
  SET_ACTIVE_COLUMN,
  SET_ACTIVE_DESK,
  SET_ACTIVE_PANEL,
  SET_OPENED_POPOUT,
  SET_POPOUT,
} from "./types";

//Приложение
export const setActivePanel = (panel: string) => ({
  type: SET_ACTIVE_PANEL,
  payload: { panel },
});
export const setActiveDesk = (desk: DeskType | null) => ({
  type: SET_ACTIVE_DESK,
  payload: { desk },
});
export const setActiveCard = (card: DeskType | null) => ({
  type: SET_ACTIVE_CARD,
  payload: { card },
});
export const setActiveColumn = (column: DeskType | null) => ({
  type: SET_ACTIVE_COLUMN,
  payload: { column },
});

//
export const setPopout = (popout: ReactNode | null) => ({
  type: SET_POPOUT,
  payload: { popout },
});
export const setOpenedPopoutName = (name: string | null) => ({
  type: SET_OPENED_POPOUT,
  payload: { name },
});
