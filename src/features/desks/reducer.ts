import { ADD_DESK, EDIT_DESKS, REMOVE_DESK, SET_DESKS } from "./types";

interface Props {
  type?: string;
  payload?: any;
}

const initialState = {
  desks: [],
  // loading: false,
};

const desks = (state = initialState, { type, payload }: Props) => {
  switch (type) {
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
    case EDIT_DESKS: {
      const { id, name } = payload;
      const desks = state.desks.map((desk: any) => {
        if (desk.id !== id) {
          return desk;
        }
        return { ...desk, name };
      });
      return { ...state, desks };
    }
    // case SET_LOADING: {
    //   return {
    //     ...state,
    //     loading: payload,
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default desks;
