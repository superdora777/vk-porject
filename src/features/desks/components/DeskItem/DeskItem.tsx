import {
  ActionSheet,
  ActionSheetItem,
  Button,
  Card,
  Div,
} from "@vkontakte/vkui";
import "./DeskItem.scss";
import {
  PropsWithChildren,
  useCallback,
  useRef,
  MouseEvent,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { deskDelete } from "../../actions";
import { Icon16MoreHorizontal } from "@vkontakte/icons";
import { setOpenedPopoutName, setPopout } from "../../../../app/actions";
import { DeskEdit } from "../DeskEdit";

interface Props {
  id: string;
  onClick: () => void;
}

export const DeskItem = ({
  id,
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  const dispatch = useDispatch();
  const baseTopTargetRef = useRef(null);

  const onClose = useCallback(() => {
    dispatch(setPopout(null));
    dispatch(setOpenedPopoutName(null));
  }, [dispatch]);

  const openActionSheet = (name: any, popout: any) => {
    dispatch(setPopout(popout));
    dispatch(setOpenedPopoutName(name));
  };

  const deleteItem = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      dispatch(deskDelete(id));
    },
    [dispatch, id]
  );

  const [isEditable, setIsEditable] = useState(false);
  const editItem = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsEditable(true);
    onClose();
  }, []);

  const onEditDesk = useCallback(() => {
    setIsEditable(false);
  }, []);

  const showDeskOptions = useCallback(
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
    [onClose, deleteItem]
  );

  if (isEditable) {
    const title = typeof children === "string" ? children : "";
    return <DeskEdit onSubmits={onEditDesk} id={id} name={title} />;
  }

  return (
    <Card onClick={onClick}>
      <Div className="deskItem__content">
        {children}
        <Button
          mode="link"
          className="deskItem_button"
          onClick={(e) => {
            e.stopPropagation();
            showDeskOptions();
          }}
        >
          <Icon16MoreHorizontal />
        </Button>
      </Div>
    </Card>
  );
};
