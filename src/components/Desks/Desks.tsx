import { Div, PanelHeader } from "@vkontakte/vkui";
import { DeskList } from "./DeskList";
import { DeskCreate } from "./DeskCreate";

export interface DeskType {
  id: string;
  name: string;
}

export const Desks = () => {
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
