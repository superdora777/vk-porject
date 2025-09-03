import { useEffect } from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import styles from "../../App.module.css";
import { Desks } from "../Desks/Desks";
import { Columns } from "../Columns/Columns";
import { getColumns } from "../../api/firebase";
import { panel } from "../../constants";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setColumns } from "../../utils/action";

export function AppNav() {
  const dispatch = useDispatch();
  const activeDesk = useSelector((state: any) => state.activeDesk);
  const popout = useSelector((state: any) => state.popout);

  const location = useLocation();

  const activePanel =
    location.pathname === "/desk" ? panel.columns : panel.desks;

  console.log(activeDesk, "activeDesk");
  //Запрос в базу даных за колонками
  useEffect(() => {
    getColumns(activeDesk?.id || "")
      .then((data) => {
        dispatch(setColumns(data));
      })
      .catch(console.error);
  }, [activeDesk]);

  return (
    <View activePanel={activePanel}>
      <Panel id={panel.desks}>
        <Desks />
      </Panel>
      <Panel id={panel.columns} className={styles.columns}>
        {popout}
        {activeDesk && <Columns />}
      </Panel>
    </View>
  );
}
