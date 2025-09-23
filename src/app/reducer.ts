import { ReactNode } from "react";
import { panel } from "../constants";
import {
  SET_ACTIVE_CARD,
  SET_ACTIVE_COLUMN,
  SET_ACTIVE_DESK,
  SET_ACTIVE_PANEL,
  SET_OPENED_POPOUT,
  SET_POPOUT,
} from "./types";

interface Props {
  type?: string;
  payload?: any;
}

const initialState = {
  popout: null as ReactNode | null,
  openedPopoutName: null as string | null,
  activePanel: panel.desks,
  activeDesk: null,
  activeColumn: panel.columns,
  activeCard: panel.card,
};

const app = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    //Приложение
    case SET_ACTIVE_PANEL: {
      const { panel } = payload;
      return { ...state, activePanel: panel };
    }
    case SET_ACTIVE_DESK: {
      const { desk } = payload;
      return { ...state, activeDesk: desk };
    }
    case SET_ACTIVE_CARD: {
      const { card } = payload;
      return { ...state, activeCard: card };
    }
    case SET_ACTIVE_COLUMN: {
      const { column } = payload;
      return { ...state, activeColumn: column };
    }

    //
    case SET_POPOUT: {
      const { popout } = payload;
      return { ...state, popout };
    }
    case SET_OPENED_POPOUT: {
      const { name } = payload;
      return { ...state, openedPopoutName: name };
    }

    default: {
      return state;
    }
  }
};

export default app;
