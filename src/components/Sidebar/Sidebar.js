import React, { useEffect } from "react";
import { Link, Router, useRouteMatch } from "react-router-dom";

export default (props) => {
  useEffect(() => {
    window.feather.replace({ "aria-hidden": "true" });
  }, []);
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              activeOnlyWhenExact={true}
              to="/"
              label="<span data-feather='home'></span> Dashboard"
            />
          </li>
          <li className="nav-item">
            <NavLink
              activeOnlyWhenExact={true}
              to="/users"
              label="<span data-feather='users'></span> Users"
            />
          </li>
          <li className="nav-item">
            <NavLink
              activeOnlyWhenExact={true}
              to="/requests"
              label="<span data-feather='file-text'></span> Requests"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <Link
      to={to}
      className={match ? "nav-link active" : "nav-link "}
      aria-current="page"
      dangerouslySetInnerHTML={{ __html: label }}
    ></Link>
  );
};
