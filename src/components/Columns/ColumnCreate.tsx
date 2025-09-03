import { DeskType } from "../Desks/Desks";
import { CreateForm } from "../CreateForm/CreateForm";
import { Div } from "@vkontakte/vkui";
import "./Column.scss";
import { createColumn } from "../../api/firebase";
import { useDispatch } from "react-redux";
import { addColumns } from "../../utils/action";

interface Props {
  deskId: string;
}

export const ColumnCreate = ({ deskId }: Props) => {
  const dispatch = useDispatch();

  //Создание новой колонки
  const handleCreateColumn = async (name: string) => {
    createColumn(name, deskId)
      .then((doc: any) => {
        dispatch(
          addColumns({
            id: doc.ref.id,
            ...doc.snap.data(),
          } as DeskType)
        );
      })
      .catch(console.error);
  };

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
