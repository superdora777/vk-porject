import { Div } from "@vkontakte/vkui";
import "./Card.scss";
import { useDispatch } from "react-redux";
import { cardCreate } from "../actions";
import { CreateForm } from "../../../components/CreateForm/CreateForm";
import { useCallback } from "react";

interface Props {
  columnId: string;
}

export const CardCreate = ({ columnId }: Props) => {
  const dispatch = useDispatch();

  //Создание новой карточки
  const handleCreateCard = useCallback(
    async (name: string) => dispatch(cardCreate(name, columnId)),
    [dispatch, columnId]
  );

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
