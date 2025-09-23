import { RootState } from "../../main";

const getState = (state: RootState) => state.desks;
export const getDesks = (state: RootState) => getState(state).desks;
