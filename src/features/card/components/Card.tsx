import { PanelHeader, PanelHeaderBack, PanelSpinner } from "@vkontakte/vkui";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../actions";
import { useLocation, useNavigate } from "react-router-dom";
import { setActiveColumn, setActivePanel } from "../../../app/actions";
import { panel } from "../../../constants";
// import { getActiveDesk } from "../../../app/selectors";
import { getName } from "../selectors";
import CardContent from "./CardContent /CardContent";

const Card = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const cardId = location.state?.cardId || "";

  const [isLoading, setIsLoading] = useState(true);
  // const activeDesk = useSelector(getActiveDesk);

  const cardName = useSelector(getName);

  const navigate = useNavigate();

  const goToColumn = (deskId: string) => {
    dispatch(setActivePanel(panel.columns));
    dispatch(setActiveColumn(null));
    navigate(`/desk?deskId=${deskId}`);
  };

  //Запрос в базу даных за карточкой
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCard(cardId));
    setIsLoading(false);
  }, [dispatch, cardId]);

  return (
    <>
      <PanelHeader before={<PanelHeaderBack onClick={goToColumn} />}>
        Карточка {cardName ? `"${cardName}"` : ""}
      </PanelHeader>
      {isLoading ? <PanelSpinner /> : <CardContent />}
    </>
  );
};

export default memo(Card);
