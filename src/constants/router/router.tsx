import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import PDFLibrary from "../../pages/PDFLibrary/PDFLibrary.tsx";
import PDFDetails from "../../pages/PDFLibrary/PDFDetails/PDFDetails.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/pdf-library" element={<PDFLibrary />} />
      <Route path="/pdf-library/:id" element={<PDFDetails />} />
    </>
  )
);
