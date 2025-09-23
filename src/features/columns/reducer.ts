import {
  ADD_COLUMNS,
  EDIT_COLUMNS,
  REMOVE_COLUMNS,
  SET_COLUMNS,
} from "./types";

interface Props {
  type?: string;
  payload?: any;
}

const initialState = {
  columns: [],
};

const columns = (state = initialState, { type, payload }: Props) => {
  switch (type) {
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
    case EDIT_COLUMNS: {
      const { id, name } = payload;
      const columns = state.columns.map((column: any) => {
        console.log(column, id, column.id === id);
        if (column.id !== id) {
          return column;
        }
        return { ...column, name };
      });
      return { ...state, columns };
    }
    default: {
      return state;
    }
  }
};
export default columns;
