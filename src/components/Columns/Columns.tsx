import { Gallery, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { Column } from "./Column";
import { ColumnCreate } from "./ColumnCreate";
import "./Column.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeskType } from "../Desks/Desks";
import { useNavigate } from "react-router";
import { setActiveDesk, setActivePanel } from "../../utils/action";
import { panel } from "../../constants";

export const Columns = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columns = useSelector((state: any) => state.columns);
  const desk = useSelector((state: any) => state.desk);

  const goToDesks = () => {
    dispatch(setActivePanel(panel.desks));
    dispatch(setActiveDesk(null));
    navigate("/");
  };

  if (!desk) return;
  return (
    <>
      <PanelHeader before={<PanelHeaderBack onClick={goToDesks} />}>
        Доска "{desk.name}"
      </PanelHeader>
      <Gallery slideWidth="85%" align="left" className="columns__list">
        {columns.map(({ id, name }: DeskType) => (
          <Column key={id} name={name} id={id} />
        ))}
        <ColumnCreate deskId={desk.id} />
      </Gallery>
    </>
  );
};
