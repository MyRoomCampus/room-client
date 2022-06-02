import { Provider } from "react-redux";
import { useRoutes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import store from "./store";
const ProjectRouter = () => {
  return useRoutes(routes);
};
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>{<ProjectRouter />}</BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
