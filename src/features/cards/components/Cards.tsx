import { CardGrid } from "@vkontakte/vkui";
import { useEffect } from "react";
import { CardCreate } from "./CardCreate";
import { useDispatch, useSelector } from "react-redux";
import { DeskType } from "../../../types/DeskType";
import { getCards } from "../selectors";
import { fetchCards } from "../actions";
import { ColumnCard } from "../../columns/components/ColumnCard/ColumnCard";

interface Props {
  columnId: string;
}

export const Cards = ({ columnId }: Props) => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  const filteredCards = cards.filter((card: any) => card.columnId === columnId);
  //Запрос в базу даных за карточками
  useEffect(() => {
    dispatch(fetchCards(columnId));
  }, [columnId]);

  return (
    <>
      <CardGrid size="l">
        {filteredCards.map(({ id, name }: DeskType) => (
          <ColumnCard key={id} id={id}>
            {name}
          </ColumnCard>
        ))}
      </CardGrid>
      <CardCreate columnId={columnId} />
    </>
  );
};
