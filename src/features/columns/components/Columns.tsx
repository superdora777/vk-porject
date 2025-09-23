import { Gallery, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { Column } from "./Column/Column";
import { ColumnCreate } from "./ColumnCreate";
import "./Column/Column.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeskType } from "../../../types/DeskType";
import { useNavigate } from "react-router";
import { fetchColumns } from "../actions";
import { setActiveDesk, setActivePanel } from "../../../app/actions";
import { panel } from "../../../constants";
import { useEffect } from "react";
import { getColumns } from "../selectors";
import { getActiveDesk } from "../../../app/selectors";

const Columns = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columns = useSelector(getColumns);
  const activeDesk = useSelector(getActiveDesk);

  const goToDesks = () => {
    dispatch(setActivePanel(panel.desks));
    dispatch(setActiveDesk(null));
    navigate("/");
  };

  //Запрос в базу даных за колонками
  useEffect(() => {
    dispatch(fetchColumns());
  }, [dispatch, activeDesk?.id]);

  if (!activeDesk) return;
  return (
    <>
      <PanelHeader before={<PanelHeaderBack onClick={goToDesks} />}>
        Доска "{activeDesk.name}"
      </PanelHeader>
      <Gallery slideWidth="85%" align="left" className="columns__list">
        {columns.map(({ id, name }: DeskType) => (
          <Column key={id} name={name} id={id} />
        ))}
        <ColumnCreate deskId={activeDesk.id} />
      </Gallery>
    </>
  );
};

export default Columns;
