import React, { Fragment, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import LoaderWithBackdrop from "./components/shared/UI/LoaderWithBackdrop/LoaderWithBackdrop";

const PrivateRoute = React.lazy(() =>
  import("./components/privateRoute/PrivateRoute")
);

/**
 *
 * @param {*} props
 * Do all the Routes related implementation in this component
 */

const V2PrivateRoutes = () => {
  let allowedRoutes = null;

  allowedRoutes = (
    <Fragment>
      <Suspense fallback={<LoaderWithBackdrop />}>
        <Routes>
          <Route
            path="/device-client/configure"
            component={DeviceClientConfigure}
          />
          <PrivateRoute path="/sessions" component={HomeLayout} />
          <PrivateRoute path="/backoffice" component={PlatformLayout} />
          <PrivateRoute path="/" component={PlatformLayout} />
        </Routes>
      </Suspense>
    </Fragment>
  );

  return allowedRoutes;
};

export default V2PrivateRoutes;
