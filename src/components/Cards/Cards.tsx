import { CardGrid } from "@vkontakte/vkui";
import { useEffect } from "react";
import { ColumnCard } from "../Columns/ColumnCard";
import { CardCreate } from "./CardCreate";
import { getCards } from "../../api/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCards } from "../../utils/action";
import { DeskType } from "../Desks/Desks";

interface Props {
  columnId: string;
}

export const Cards = ({ columnId }: Props) => {
  const dispatch = useDispatch();
  const cards = useSelector((state: any) => state.cards);

  //Запрос в базу даных за карточками
  useEffect(() => {
    getCards(columnId)
      .then((cards) => dispatch(setCards(cards)))
      .catch(console.error);
  }, []);

  return (
    <>
      <CardGrid size="l">
        {cards.map(({ id, name }: DeskType) => (
          <ColumnCard key={id} id={id}>
            {name}
          </ColumnCard>
        ))}
      </CardGrid>
      <CardCreate columnId={columnId} />
    </>
  );
};
