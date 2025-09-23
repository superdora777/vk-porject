import { Button, Card, Div } from "@vkontakte/vkui";
import { PropsWithChildren } from "react";
import "./ColumnCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { cardDelete } from "../../../cards/actions";

import { useNavigate } from "react-router";
import { panel } from "../../../../constants";
import {
  setActiveCard,
  setActiveColumn,
  setActivePanel,
} from "../../.././../app/actions";
import { getCards } from "../../../cards/selectors";
import { getActiveDesk } from "../../../../app/selectors";

interface Props {
  id: string;
}

export const ColumnCard = ({ children, id }: PropsWithChildren<Props>) => {
  const dispatch = useDispatch();

  const cards = useSelector(getCards ?? []);
  const activeDesk = useSelector(getActiveDesk);
  const navigate = useNavigate();

  const goToCard = (cardId: string) => {
    const cardOne = cards.find((c: any) => c.id === cardId) ?? null;
    dispatch(setActiveColumn(null));
    dispatch(setActiveCard(cardOne));
    dispatch(setActivePanel(panel.card));
    navigate(`/desk?deskId=${activeDesk.id}&cardId=${cardId}`, {
      state: { cardId },
    });
  };

  //Удаляем карточку
  const deleteItem = async () => {
    dispatch(cardDelete(id));
  };

  return (
    <Card onClick={() => goToCard(id)}>
      <Div className="columnCard">
        {children}
        <Button appearance="negative" mode="outline" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};
