import React from "react";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Header from "../Header";
import Homepage from "../Homepage";
import VocabList from "../features/vocab/VocabList";
import VocabOne from "../features/vocab/VocabOne";
import VocabNew from "../features/vocab/VocabNew";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/vocabs",
      children: [
        {
          index: true,
          element: <VocabList />,
        },
        { path: ":id", element: <VocabOne /> },
        { path: "new", element: <VocabNew /> },
      ],
    },
  ]);

  return (
    <>
      <Header />
      {routes}
      <ToastContainer autoClose={1200} />
    </>
  );
}

export default App;
