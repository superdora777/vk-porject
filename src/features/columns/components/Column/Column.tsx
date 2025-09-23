import {
  ActionSheet,
  ActionSheetItem,
  Button,
  Card,
  Header,
} from "@vkontakte/vkui";
import "./Column.scss";

import { useCallback, useRef } from "react";
import { Icon16MoreHorizontal } from "@vkontakte/icons";
import { useDispatch } from "react-redux";
import { columnDelete, columnEdit } from "../../actions";
import { setOpenedPopoutName, setPopout } from "../../../../app/actions";
import { Cards } from "../../../cards/components/Cards";

interface Props {
  name: string;
  id: string;
}

export const Column = ({ id, name }: Props) => {
  const dispatch = useDispatch();

  //Удаляем колонку
  const deleteItem = useCallback(
    async () => dispatch(columnDelete(id)),
    [dispatch, id]
  );

  //Редактируем колонку
  const editItem = useCallback(async () => {
    const newName = prompt("Введите название колонки", name);

    if (typeof newName !== "string" || !newName.trim().length) {
      return;
    }
    dispatch(columnEdit(id, newName));
  }, [dispatch, id, name]);

  const baseTopTargetRef = useRef(null);

  const openActionSheet = (name: any, popout: any) => {
    dispatch(setPopout(popout));
    dispatch(setOpenedPopoutName(name));
  };
  const onClose = () => {
    dispatch(setPopout(null));
    dispatch(setOpenedPopoutName(null));
  };

  const showColumnOptions = useCallback(
    () =>
      openActionSheet(
        "base",
        <ActionSheet onClose={onClose} toggleRef={baseTopTargetRef}>
          <ActionSheetItem onClick={editItem}>Редактировать</ActionSheetItem>
          <ActionSheetItem mode="destructive" onClick={deleteItem}>
            Удалить
          </ActionSheetItem>
        </ActionSheet>
      ),
    [dispatch, deleteItem]
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
