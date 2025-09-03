import {
  ActionSheet,
  ActionSheetItem,
  Button,
  Card,
  Header,
} from "@vkontakte/vkui";
import "./Column.scss";
import { Cards } from "../Cards/Cards";
import { deleteColumn } from "../../api/firebase";
import { useRef } from "react";
import { Icon16MoreHorizontal } from "@vkontakte/icons";
import { useDispatch } from "react-redux";
import {
  removeColumn,
  setOpenedPopoutName,
  setPopout,
} from "../../utils/action";

interface Props {
  name: string;
  id: string;
}

export const Column = ({ id, name }: Props) => {
  const dispatch = useDispatch();

  //Удаляем колонку
  const deleteItem = async () => {
    deleteColumn(id)
      .then(() => dispatch(removeColumn(id)))
      .catch(console.error);
  };

  const titleTargetRef = useRef(null);

  const openActionSheet = (name: any, popout: any) => {
    dispatch(setPopout(popout));
    dispatch(setOpenedPopoutName(name));
  };
  const onClose = () => {
    dispatch(setPopout(null));
    dispatch(setOpenedPopoutName(null));
  };

  const showColumnOptions = () =>
    openActionSheet(
      "title",
      <ActionSheet
        onClose={onClose}
        title="Вы действительно хотите удалить эту колонку?"
        toggleRef={titleTargetRef}
      >
        <ActionSheetItem mode="destructive" onClick={deleteItem}>
          Удалить
        </ActionSheetItem>
      </ActionSheet>
    );

  return (
    <div className="slide">
      <div className="header__column">
        <Header>{name}</Header>
        <Button
          className="header_button"
          mode="link"
          onClick={showColumnOptions}
        >
          <Icon16MoreHorizontal />
        </Button>
      </div>
      <Card className="column" mode="outline-tint">
        <Cards columnId={id} />
      </Card>
    </div>
  );
};
