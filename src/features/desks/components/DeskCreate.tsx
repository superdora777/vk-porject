import { useDispatch } from "react-redux";
import { deskCreate } from "../actions";
import { CreateForm } from "../../../components/CreateForm/CreateForm";
import { useCallback } from "react";

export const DeskCreate = () => {
  const dispatch = useDispatch();

  //Создание новой доски
  const handleCreateDesk = useCallback(
    async (name: string) => dispatch(deskCreate(name)),
    [dispatch]
  );

  return (
    <CreateForm
      onSubmit={handleCreateDesk}
      placeholder="Введите название"
      actionTitle="Создать доску"
    />
  );
};
