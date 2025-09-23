import { Div } from "@vkontakte/vkui";
import "./Column/Column.scss";
import { useDispatch } from "react-redux";
import { columnCreate } from "../actions";
import { CreateForm } from "../../../components/CreateForm/CreateForm";
import { useCallback } from "react";

interface Props {
  deskId: string;
}

export const ColumnCreate = ({ deskId }: Props) => {
  const dispatch = useDispatch();

  //Создание новой колонки
  const handleCreateColumn = useCallback(
    async (name: string) => dispatch(columnCreate(name, deskId)),
    [dispatch, deskId]
  );

  return (
    <Div className="addColumn">
      <CreateForm
        onSubmit={handleCreateColumn}
        placeholder="Введите название"
        actionTitle="Создать колонку"
      />
    </Div>
  );
};
