import { createContext } from "react";
import { useAppState } from "./hooks/hooks";

export type AppState = ReturnType<typeof useAppState>;

const Context = createContext<AppState | null>(null);

export default Context;
