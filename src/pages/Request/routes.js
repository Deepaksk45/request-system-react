import { Route, Switch } from "react-router";
import AddRequest from "./AddRequest";
import List from "./List";

const routes = [
  {
    path: "/new",
    name: "Add Request",
    component: AddRequest,
    layout: "/requests",
  },
  {
    path: "/:id/edit",
    name: "Edit Request",
    component: AddRequest,
    layout: "/requests",
  },
  {
    path: "",
    name: "Requests",
    component: List,
    layout: "/requests",
  },
];

const SwitchRoutes = () => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/requests") {
          console.log(prop.layout + prop.path);
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      {/* <Redirect from="/" to="/requests" /> */}
    </Switch>
  );
};

export default SwitchRoutes;
