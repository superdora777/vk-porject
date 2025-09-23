import { RootState } from "../../main";

const getState = (state: RootState) => state.card;

export const getId = (state: RootState) => getState(state).id;
export const getName = (state: RootState) => getState(state).name;
export const getText = (state: RootState) => getState(state).text;
