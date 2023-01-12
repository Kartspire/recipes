import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Info } from "./components/Info";
import { Main } from "./components/Main";
import { WithLoader } from "./components/WithLoader";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={<Main />} />
        <Route
          path="/info"
          element={
            <WithLoader>
              <Info />
            </WithLoader>
          }
        >
          <Route
            path=":id"
            element={
              <WithLoader>
                <Info />
              </WithLoader>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
