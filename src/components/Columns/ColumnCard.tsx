import { Button, Card, Div } from "@vkontakte/vkui";
import "./Column.scss";
import { PropsWithChildren } from "react";
import "./ColumnCard.scss";
import { deleteCard } from "../../api/firebase";
import { useDispatch } from "react-redux";
import { removeCard } from "../../utils/action";

interface Props {
  id: string;
}

export const ColumnCard = ({ children, id }: PropsWithChildren<Props>) => {
  const dispatch = useDispatch();

  //Удаляем карточку
  const deleteItem = async () => {
    deleteCard(id)
      .then(() => dispatch(removeCard(id)))
      .catch(console.error);
  };

  return (
    <Card>
      <Div className="columnCard">
        {children}
        <Button appearance="negative" mode="outline" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};
