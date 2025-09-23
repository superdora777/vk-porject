import { EDIT_CARD, REMOVE_CARD, SET_CARD } from "./types";

interface Props {
  type?: string;
  payload?: any;
}

const initialState = {
  id: null,
  name: null,
  text: null,
};

const card = (state = initialState, { type, payload }: Props) => {
  switch (type) {
    case SET_CARD:
    case EDIT_CARD: {
      return {
        ...state,
        ...payload,
      };
    }

    case REMOVE_CARD: {
      return {
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
};

export default card;
