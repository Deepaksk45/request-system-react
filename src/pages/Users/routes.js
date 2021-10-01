import { Route, Switch } from "react-router";
import AddUser from "./AddUser";
import List from "./List";

const routes = [
  {
    path: "/new",
    name: "Add User",
    component: AddUser,
    layout: "/users",
  },
  {
    path: "/:id/edit",
    name: "Edit User",
    component: AddUser,
    layout: "/users",
  },
  {
    path: "",
    name: "Users",
    component: List,
    layout: "/users",
  },
];

const SwitchRoutes = () => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/users") {
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
      {/* <Redirect from="/" to="/users" /> */}
    </Switch>
  );
};

export default SwitchRoutes;
