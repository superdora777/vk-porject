import {
  ADD_COLUMNS,
  EDIT_COLUMNS,
  REMOVE_COLUMNS,
  SET_COLUMNS,
} from "./types";
import { DeskType } from "../../types/DeskType";
import { createColumn, deleteColumn, editColumn, getColumns } from "./firebase";

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
export const replaceColumns = (id: string, name: string) => ({
  type: EDIT_COLUMNS,
  payload: { id, name },
});

//Запрос в базу даных
export const fetchColumns = () => (dispatch: any, getState: any) => {
  const activeDesk = getState().app.activeDesk;

  return getColumns(activeDesk.id || "")
    .then((columns) => {
      dispatch({ type: "fetchColumnsSuccess" });
      dispatch(setColumns(columns));
    })
    .catch(() => dispatch({ type: "fetchColumnsFail" }));
};

//Удаление
export const columnDelete = (id: string) => (dispatch: any) =>
  deleteColumn(id)
    .then(() => {
      dispatch({ type: "columnDeleteSuccess" });
      dispatch(removeColumn(id));
    })
    .catch(() => dispatch({ type: "columnDeleteFail" }));

//Создание
export const columnCreate = (name: string, deskId: string) => (dispatch: any) =>
  createColumn(name, deskId)
    .then((doc: any) => {
      dispatch({ type: "columnCreateSuccess" });
      dispatch(
        addColumns({
          id: doc.ref.id,
          ...doc.snap.data(),
        } as DeskType)
      );
    })
    .catch(() => dispatch({ type: "columnCreateFail" }));

//Редактирование
export const columnEdit = (id: string, name: string) => (dispatch: any) =>
  editColumn(id, name)
    .then(() => {
      dispatch({ type: "columnEditSuccess" });
      dispatch(replaceColumns(id, name));
    })
    .catch(() => dispatch({ type: "columnEditFail" }));
