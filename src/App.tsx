// App.tsx
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router/index";

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Suspense>
  );
};

export default App;
