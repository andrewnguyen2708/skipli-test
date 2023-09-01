import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

import { DefaultLayout } from "./components/Layout";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        const Page = route.component;
        let Layout = route.layout || DefaultLayout;
        return (
          <Route
            key={route.id}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
