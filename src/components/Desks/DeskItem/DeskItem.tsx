import { Button, Card, Div } from "@vkontakte/vkui";
import "./DeskItem.scss";
import { PropsWithChildren } from "react";
import { deleteDesk } from "../../../api/firebase";
import { useDispatch } from "react-redux";
import { removeDesk } from "../../../utils/action";

interface Props {
  id: string;
  onClick: () => void;
}

export const DeskItem = ({
  id,
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  const dispatch = useDispatch();

  //Удаляем доску
  const deleteItem = async () => {
    deleteDesk(id)
      .then(() => dispatch(removeDesk(id)))
      .catch(console.error);
  };

  return (
    <Card onClick={onClick}>
      <Div className="deskItem__content">
        {children}
        <Button
          appearance="negative"
          mode="outline"
          onClick={(e) => {
            e.stopPropagation();
            deleteItem();
          }}
        >
          Удалить
        </Button>
      </Div>
    </Card>
  );
};
