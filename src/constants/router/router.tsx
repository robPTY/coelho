import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PDFLibrary from "../../pages/PDFLibrary/PDFLibrary";
import PdfEditor from "../../components/PDFEditor/PdfEditor";
import PdfPage from "../../components/PDFPage/PdfPage";
import PDFUpload from "../../pages/PDFUpload/PDFUpload";
import SignupPage from "pages/SignUpPage/SignupPage";
import LoginPage from "pages/LogInPage/LoginPage";
import PDFDetails from "../../pages/PDFLibrary/PDFDetails/PDFDetails";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/pdf-library" element={<PDFLibrary />} />
      <Route path="/pdf-library/:id" element={<PDFDetails />} />
      <Route path="/pdf-editor-test" element={<PdfEditor />} />
      <Route path="/pdf-page-test" element={<PdfPage />} />
      <Route path="/pdf-upload" element={<PDFUpload />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </>
  )
);
