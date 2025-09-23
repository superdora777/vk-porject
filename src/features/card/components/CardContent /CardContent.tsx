import { useDispatch, useSelector } from "react-redux";
import { getId, getText } from "../../selectors";
import TextContent from "../TextContent/TextContent";
import { Button, Div, FixedLayout, Textarea } from "@vkontakte/vkui";
import { memo, useCallback, useState } from "react";
import { editCard } from "../../firebase";
import "./CardContent.scss";
import { cardDelete } from "../../actions";
import { setActiveColumn, setActivePanel } from "../../../../app/actions";
import { panel } from "../../../../constants";
import { useNavigate } from "react-router-dom";

const CardContent = () => {
  const dispatch = useDispatch();
  const cardText = useSelector(getText);
  const id = useSelector(getId);

  const [isEditable, setIsEditable] = useState(!cardText);
  const [value, setValue] = useState(cardText || "");

  const changeText = useCallback(() => {
    if (isEditable && value.trim().length) {
      return Promise.resolve(
        dispatch(editCard(id, { cardText: value }))
      ).finally(() => setIsEditable(!isEditable));
    } else {
      setIsEditable(!isEditable);
    }
  }, [isEditable, value, dispatch, id]);

  const changeValue = useCallback(
    ({ target: { value } }) => {
      setValue(value);
    },
    [isEditable]
  );

  const navigate = useNavigate();
  const goToColumn = (deskId: string) => {
    dispatch(setActivePanel(panel.columns));
    dispatch(setActiveColumn(null));
    navigate(`/desk?deskId=${deskId}`);
  };

  const deleteItem = useCallback(() => {
    return Promise.resolve(
      dispatch(cardDelete(id)).finally((deskId: string) => {
        dispatch(goToColumn(deskId));
      })
    );
  }, [dispatch, id]);

  return (
    <>
      {isEditable ? (
        <Div>
          <Textarea value={value} onChange={changeValue} />
        </Div>
      ) : (
        <TextContent />
      )}

      <FixedLayout filled vertical="bottom">
        <Div className="cardContent__button">
          <Button mode="outline" onClick={changeText}>
            {isEditable ? "Сохранить" : "Изменить"}
          </Button>
          <Button appearance="negative" mode="outline" onClick={deleteItem}>
            Удалить
          </Button>
        </Div>
      </FixedLayout>
    </>
  );
};

export default memo(CardContent);
