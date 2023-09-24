import { Route, Routes } from "react-router-dom";

import Home from "./Views/Home";

/**
 *
 * @param {*} props
 * Do all the Routes related implementation in this component
 */

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
}

export default AppRoutes;
