import "@vkontakte/vkui/dist/vkui.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { AppNav } from "./components/AppNav/AppNav";
import { Provider } from "react-redux";

interface Props {
  store: any;
}

export function App({ store }: Props) {
  //   const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { desks } = useSelector((state: RootState) => state);

  // const goToColumns = (deskId: string) => {
  //   const desk = desks.find((d) => d.id === deskId) ?? null;
  //   dispatch(setActiveDesk(desk));
  //   dispatch(setActivePanel(panel.columns));
  //   navigate(`/desk?deskId=${deskId}`);
  // };

  // const goToDesks = () => {
  //   dispatch(setActivePanel(panel.desks));
  //   dispatch(setActiveDesk(null));
  //   navigate("/");
  // };

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppNav />
      </Provider>
    </ErrorBoundary>
  );
}
