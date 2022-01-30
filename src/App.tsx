import * as React from "react";
import { lazily } from "react-lazily";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const { ErrorHandler } = lazily(() => import("./components/BlockErrorHandler"));
const { Home } = lazily(() => import("./components/RouteHome"));

import config from "./config";

type Props = {};

export const App: React.FC<Props> = (props) => {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const fxLoadData = async () => {};
  const fxRenderRouteLoader = () => <p>Loading...</p>;

  // effects
  React.useEffect(() => {
    fxLoadData();
  }, [readiness]);

  return (
    <div className="app flex justify-center">
      <div className="site mx-10 mt-24 max-w-lg w-full">
        <HelmetProvider>
          <ChakraProvider>
            <Helmet>
              <title>
                {config.appName} - {config.appDescription}
              </title>
              <meta name="description" content={config.appDescription} />
              <link rel="shortcut icon" href={config.appFaviconURL} />
            </Helmet>
            <BrowserRouter basename={config.subDirPath}>
              <React.Suspense fallback={fxRenderRouteLoader()}>
                <ErrorHandler />
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </React.Suspense>
            </BrowserRouter>
          </ChakraProvider>
        </HelmetProvider>
      </div>
    </div>
  );
};
