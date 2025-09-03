import { panel } from "../constants";
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
} from "../utils/type";

interface Props {
  type?: string;
  payload?: any;
}

const initialState = {
  desks: [],
  columns: [],
  cards: [],
  popout: null,
  loading: false,
  activePanel: panel.desks,
  activeDesk: null,
};

export const reducer = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    //Колонки
    case ADD_COLUMNS: {
      const { column } = payload;
      const columns = [...state.columns, column];
      return {
        ...state,
        columns,
      };
    }
    case SET_COLUMNS: {
      const { columns } = payload;
      return {
        ...state,
        columns,
      };
    }
    case REMOVE_COLUMNS: {
      const { removeId } = payload;
      const columns = state.columns.filter(({ id }) => id !== removeId);
      return {
        ...state,
        columns,
      };
    }

    //Доски
    case ADD_DESK: {
      const { desk } = payload;
      const desks = [...state.desks, desk];
      return {
        ...state,
        desks,
      };
    }
    case SET_DESKS: {
      const { desks } = payload;
      return {
        ...state,
        desks,
      };
    }
    case REMOVE_DESK: {
      const { removeId } = payload;
      const desks = state.desks.filter(({ id }) => id !== removeId);
      return {
        ...state,
        desks,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }

    //Приложение
    case SET_ACTIVE_PANEL: {
      const { panel } = payload;
      return { ...state, panel };
    }
    case SET_ACTIVE_DESK: {
      const { desk } = payload;
      return { ...state, desk };
    }

    //Карточки
    case ADD_CARD: {
      const { card } = payload;
      const cards = [...state.cards, card];
      return {
        ...state,
        cards,
      };
    }
    case SET_CARDS: {
      const { cards } = payload;
      return {
        ...state,
        cards,
      };
    }
    case REMOVE_CARD: {
      const { removeId } = payload;
      const cards = state.cards.filter(({ id }) => id !== removeId);
      return {
        ...state,
        cards,
      };
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
