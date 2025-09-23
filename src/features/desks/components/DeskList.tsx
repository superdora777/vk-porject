import { CardGrid } from "@vkontakte/vkui";
import { DeskItem } from "./DeskItem/DeskItem";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setActiveDesk, setActivePanel } from "../../../app/actions";
import { fetchDesks } from "../actions";
import { panel } from "../../../constants";
import { useEffect } from "react";
import { AppDispatch } from "../../../main";
import { getDesks } from "../selectors";

export const DeskList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const desks = useSelector(getDesks ?? []);
  // const loading = useSelector((state: any) => state.loading);

  const goToColumns = (deskId: string) => {
    const desk = desks.find((d: any) => d.id === deskId) ?? null;
    dispatch(setActiveDesk(desk));
    dispatch(setActivePanel(panel.columns));
    navigate(`/desk?deskId=${deskId}`);
  };

  //Запрос в базу даных за досками
  useEffect(() => {
    dispatch(fetchDesks());
  }, [dispatch]);

  return (
    <CardGrid size="l">
      {desks.map((desk: any) => (
        <DeskItem
          key={desk.id}
          id={desk.id}
          onClick={() => goToColumns(desk.id)}
        >
          {desk.name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};
