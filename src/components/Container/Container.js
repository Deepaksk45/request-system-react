import React, { useEffect } from "react";
import { SideBar } from "..";

export default (props) => {
  const { title, content, children } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2" dangerouslySetInnerHTML={{ __html: title }}></h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};
