import { RootState } from "../main";

export const getActiveDesk = (state: RootState) => state.app.activeDesk;
export const getActiveColumn = (state: RootState) => state.app.activeColumn;
export const getActiveCard = (state: RootState) => state.app.activeCard;
export const getPopout = (state: RootState) => state.app.popout;
