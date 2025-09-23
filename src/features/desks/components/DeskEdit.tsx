import { useDispatch } from "react-redux";
import { deskEdit } from "../actions";
import { CreateForm } from "../../../components/CreateForm/CreateForm";
import { useCallback } from "react";
import { modes } from "../../../components/CreateForm/hooks";

interface Props {
  id: string;
  name: string;
  onSubmits: () => void;
}

export const DeskEdit = ({ id, name, onSubmits }: Props) => {
  const dispatch = useDispatch();

  //Редактирование доски
  const EditItem = useCallback(
    (newName: string) => {
      return Promise.resolve(dispatch(deskEdit(id, newName))).finally(
        onSubmits
      );
    },
    [dispatch, id, onSubmits]
  );

  return (
    <CreateForm
      onSubmit={EditItem}
      placeholder="Введите название"
      actionTitle="Изменить"
      initialName={name}
      initialMode={modes.form}
      onCancel={onSubmits}
    />
  );
};
