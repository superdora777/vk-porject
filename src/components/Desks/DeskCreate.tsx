import { DeskType } from "./Desks";
import { CreateForm } from "../CreateForm/CreateForm";
import { createDesk } from "../../api/firebase";
import { useDispatch } from "react-redux";
import { addDesk } from "../../utils/action";

export const DeskCreate = () => {
  const dispatch = useDispatch();

  //Создание новой доски
  const handleCreateDesk = async (name: string) => {
    return createDesk(name)
      .then((doc: any) => {
        dispatch(
          addDesk({
            id: doc.ref.id,
            ...doc.snap.data(),
          } as DeskType)
        );
      })
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={handleCreateDesk}
      placeholder="Введите название"
      actionTitle="Создать доску"
    />
  );
};
