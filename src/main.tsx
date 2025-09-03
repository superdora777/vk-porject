import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import { BrowserRouter } from "react-router";
import { reducer } from "./reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer,
});

console.log(store);

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
