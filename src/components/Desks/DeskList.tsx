import { CardGrid } from "@vkontakte/vkui";
import { DeskItem } from "./DeskItem/DeskItem";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setActiveDesk, setActivePanel, setDesks } from "../../utils/action";
import { panel } from "../../constants";
import { useEffect } from "react";
import { getDesks } from "../../api/firebase";

export const DeskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const desks = useSelector((state: any) => state.desks ?? []);
  // const loading = useSelector((state: any) => state.loading);

  const goToColumns = (deskId: string) => {
    const desk = desks.find((d: any) => d.id === deskId) ?? null;
    dispatch(setActiveDesk(desk));
    dispatch(setActivePanel(panel.columns));
    navigate(`/desk?deskId=${deskId}`);
  };

  //Запрос в базу даных за досками
  useEffect(() => {
    const getSnapshot = () => {
      // dispatch(setLoading(true));
      getDesks()
        .then((data) => {
          // dispatch(setLoading(false));
          dispatch(setDesks(data));
        })
        .catch(console.error);
    };
    getSnapshot();
  }, []);

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
