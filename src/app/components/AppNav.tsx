import { View, Panel, PanelSpinner } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import styles from "../../App.module.css";

import { panel } from "../../constants";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, memo, Suspense, useEffect } from "react";
import { setActivePanel } from "../actions";
import { getActiveDesk } from "../selectors";

const Desks = lazy(() => import("../../features/desks/components/Desks"));
const Columns = lazy(() => import("../../features/columns/components/Columns"));
const Card = lazy(() => import("../../features/card/components/Card"));

// import { Desks } from "../../features/desks/components/Desks";
// import { Columns } from "../../features/columns/components/Columns";
// import { Card } from "../../features/card/components/Card";

function AppNav() {
  const dispatch = useDispatch();
  const activeDesk = useSelector(getActiveDesk);
  const popout = useSelector((s: any) => s.app.popout);

  const location = useLocation();
  const [searchParams] = useSearchParams();

  const activePanel = searchParams.get("cardId")
    ? panel.card
    : location.pathname === "/desk"
    ? panel.columns
    : panel.desks;

  useEffect(() => {
    dispatch(setActivePanel(activePanel));
  }, [activePanel]);

  return (
    <View activePanel={activePanel}>
      <Panel id={panel.desks}>
        <Suspense fallback={<PanelSpinner />}>
          {popout} <Desks />
        </Suspense>
      </Panel>
      <Panel id={panel.columns} className={styles.columns}>
        <Suspense fallback={<PanelSpinner />}>
          {popout}
          {activeDesk && <Columns />}
        </Suspense>
      </Panel>
      <Panel id={panel.card}>
        <Suspense fallback={<PanelSpinner />}>
          {popout}
          <Card />
        </Suspense>
      </Panel>
    </View>
  );
}

export default memo(AppNav);
