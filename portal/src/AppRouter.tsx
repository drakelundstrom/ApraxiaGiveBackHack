import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultPage } from "./Pages/Default/DefaultPage";
import { HomePage } from "./Pages/Home/HomePage";
import { StepsPage } from "./Pages/Steps/StepsPage";
import { HOME_ROUTE, STEPS_ROUTE } from "./Routes";

export const AppRouter = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={HOME_ROUTE} element={<DefaultPage />}>
        <Route path="" element={<HomePage />} />
        <Route
          path={`${STEPS_ROUTE}:id`}
          element={<StepsPage />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h2>404: page not found</h2>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
