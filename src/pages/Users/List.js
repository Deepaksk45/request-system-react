import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "../../components";
import AddUser from "./AddUser";
import userRoutes from "./routes";

export default () => {
  return (
    <Container title={"Users"}>
      <br />
      <div className="card">
        <div className="card-header d-flex justify-content-end">
          <Link to={"/users/new"} className="btn btn-primary">
            Add New User
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
