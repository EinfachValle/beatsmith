/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { Fragment, useEffect, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import LoaderWithBackdrop from "./components/shared/UI/LoaderWithBackdrop/LoaderWithBackdrop";

const V2PrivateRoutes = React.lazy(() => import("./V2PrivateRoutes"));
const Overview = React.lazy(() => import("./Views/Overview"));

const StorybookRoute = () => {
  useEffect(() => {
    window.location.href = "http://localhost:6006/";
  }, []);

  return <></>;
};

const isDevelop = process.env.NODE_ENV === "development";

/**
 *
 * @param {*} props
 * Do all the Routes related implementation in this component
 */

const appRoutes = (props) => {
  let allowedRoutes = null;

  allowedRoutes = (
    <Fragment>
      <Suspense fallback={<LoaderWithBackdrop />}>
        <Routes>
          {isDevelop && (
            <Route path="/storybook">
              <StorybookRoute />
            </Route>
          )}
          <Route exact path="/" Component={V2PrivateRoutes} />
        </Routes>
        <Route exact path="/" render={(props) => <Overview {...props} />} />
      </Suspense>
    </Fragment>
  );

  return allowedRoutes;
};

export default appRoutes;
