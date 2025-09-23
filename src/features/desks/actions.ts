import { createDesk, deleteDesk, editDesk, getDesks } from "./firebase";
import { DeskType } from "../../types/DeskType";
import {
  ADD_DESK,
  EDIT_DESKS,
  REMOVE_DESK,
  SET_DESKS,
  SET_LOADING,
} from "./types";

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
export const replaceDesks = (id: string, name: string) => ({
  type: EDIT_DESKS,
  payload: { id, name },
});
export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: { loading },
});

//Запрос в базу даных
export const fetchDesks = () => (dispatch: any) => {
  // console.log(getState()); - состояние
  // dispatch(setLoading(true));
  return getDesks()
    .then((desks) => {
      // dispatch(setLoading(false));
      dispatch({ type: "fetchDesksSuccess" });
      dispatch(setDesks(desks));
    })
    .catch(() => dispatch({ type: "fetchDesksFail" }));
};

//Удаление
export const deskDelete = (id: string) => (dispatch: any) =>
  deleteDesk(id)
    .then(() => {
      dispatch({ type: "deskDeleteSuccess" });
      dispatch(removeDesk(id));
    })
    .catch(() => dispatch({ type: "deskDeleteFail" }));

//Создание
export const deskCreate = (name: string) => (dispatch: any) =>
  createDesk(name)
    .then((doc: any) => {
      dispatch({ type: "deskCreateSuccess" });
      dispatch(
        addDesk({
          id: doc.ref.id,
          ...doc.snap.data(),
        } as DeskType)
      );
    })
    .catch(() => dispatch({ type: "deskCreateFail" }));

//Редактирование
export const deskEdit = (id: string, name: string) => (dispatch: any) => {
  return editDesk(id, name)
    .then(() => {
      dispatch({ type: "deskEditSuccess" });
      dispatch(replaceDesks(id, name));
    })
    .catch(() => dispatch({ type: "deskEditFail" }));
};
