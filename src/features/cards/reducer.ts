import { ADD_CARD, REMOVE_CARD, SET_CARDS } from "./types";

interface Props {
  type?: string;
  payload?: any;
}

const initialState = {
  cards: [],
};

const cards = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case ADD_CARD: {
      const { card } = payload;
      const cards = [...state.cards, card];
      return {
        ...state,
        cards,
      };
    }

    case SET_CARDS: {
      const { columnId, cards } = payload;
      // убираем все старые карточки этой колонки
      const others = state.cards.filter((c: any) => c.columnId !== columnId);
      // собираем новые + старые
      const merged = [...others, ...cards];
      // чистим дубликаты по id
      const unique = merged.filter(
        (card, idx, arr) => arr.findIndex((c) => c.id === card.id) === idx
      );
      return { ...state, cards: unique };
    }

    case REMOVE_CARD: {
      const { removeId } = payload;
      const cards = state.cards.filter(({ id }) => id !== removeId);
      return {
        ...state,
        cards,
      };
    }

    default: {
      return state;
    }
  }
};

export default cards;
