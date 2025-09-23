import { Div, PanelHeader } from "@vkontakte/vkui";
import { DeskList } from "./DeskList";
import { DeskCreate } from "./DeskCreate";

const Desks = () => {
  return (
    <>
      <PanelHeader>Мои доски</PanelHeader>
      <Div>
        <DeskCreate />
      </Div>
      <DeskList />
    </>
  );
};

export default Desks;
