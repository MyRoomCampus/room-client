import { Provider } from "react-redux";
import { useRoutes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import store from "./store";
// import Login from "./application/Login";
// import Register from "./application/Register";
// import UserInfo from "./application/UserInfo";

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
