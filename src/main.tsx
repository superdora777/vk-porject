import { createRoot } from "react-dom/client";
import App from "./App";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import { BrowserRouter } from "react-router-dom";
import { getStore } from "./app/store";

const store = getStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <App store={store} />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </BrowserRouter>
);
