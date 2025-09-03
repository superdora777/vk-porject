import { useState } from "react";
import { DeskType } from "../components/Desks/Desks";
import { panel } from "../constants";
import { useNavigate } from "react-router";

//Приложение
const useNav = (desks: DeskType[]) => {
  const navigate = useNavigate();

  const [activePanel, setActivePanel] = useState(panel.desks);
  const [activeDesk, setActiveDesk] = useState<DeskType | null>(null);
  const goToColumns = (deskId: string) => {
    setActiveDesk(desks.find(({ id }) => id === deskId) as DeskType);
    setActivePanel(panel.columns);
    navigate(`/desk?deskId=${deskId}`);
  };
  const goToDesks = () => {
    setActivePanel(panel.desks);
    navigate("/");
  };
  return { activePanel, activeDesk, goToColumns, goToDesks };
};

//Доски
const useDesks = () => {
  const [desks, setDesks] = useState<DeskType[]>([]);
  const [loading, setLoading] = useState(false);

  const addDesk = (desk: DeskType) => {
    setDesks([...desks, desk]);
  };

  const removeDesk = (removeId: string) => {
    setDesks(desks.filter(({ id }) => id !== removeId));
  };
  return { desks, setDesks, loading, setLoading, addDesk, removeDesk };
};

//Колонки
const useColumns = () => {
  const [columns, setColumns] = useState<DeskType[]>([]);

  const addColumns = (column: DeskType) => {
    setColumns([...columns, column]);
  };
  const removeColumn = (removeId: string) => {
    setColumns(columns.filter(({ id }) => id !== removeId));
  };
  return { columns, setColumns, addColumns, removeColumn };
};

//Карточки
const useCards = () => {
  const [cards, setCards] = useState<DeskType[]>([]);

  const addCard = (card: DeskType) => {
    setCards([...cards, card]);
  };

  const removeCard = (removeId: string) => {
    setCards(cards.filter(({ id }) => id !== removeId));
  };
  return { cards, setCards, addCard, removeCard };
};

//
const usePopout = () => {
  const [popout, setPopout] = useState(null);
  const [openedPopoutName, setOpenedPopoutName] = useState(null);
  return { popout, setPopout, openedPopoutName, setOpenedPopoutName };
};

export const useAppState = () => {
  //Доски
  const desksState = useDesks();
  //Колонки
  const columnsState = useColumns();
  //Карточки
  const cardsState = useCards();
  //Приложение
  const navState = useNav(desksState.desks);
  //
  const popoutState = usePopout();

  return {
    ...desksState,
    ...columnsState,
    ...cardsState,
    ...navState,
    ...popoutState,
  };
};
