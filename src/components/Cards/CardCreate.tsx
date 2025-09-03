import { DeskType } from "../Desks/Desks";
import { CreateForm } from "../CreateForm/CreateForm";
import { Div } from "@vkontakte/vkui";
import "./Card.scss";
import { createCard } from "../../api/firebase";
import { useDispatch } from "react-redux";
import { addCard } from "../../utils/action";

interface Props {
  columnId: string;
}

export const CardCreate = ({ columnId }: Props) => {
  const dispatch = useDispatch();

  //Создание новой карточки
  const handleCreateCard = async (name: string) => {
    createCard(name, columnId)
      .then((doc: any) => {
        dispatch(
          addCard({
            id: doc.ref.id,
            ...doc.snap.data(),
          } as DeskType)
        );
      })
      .catch(console.error);
  };

  return (
    <Div className="addCard">
      <CreateForm
        onSubmit={handleCreateCard}
        placeholder="Введите название"
        actionTitle="Создать карточку"
      />
    </Div>
  );
};
