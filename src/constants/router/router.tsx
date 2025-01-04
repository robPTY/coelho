import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import PDFLibrary from "../../pages/PDFLibrary/PDFLibrary.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/pdf-library" element={<PDFLibrary />} />
    </>
  )
);
