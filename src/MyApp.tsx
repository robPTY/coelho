import React from "react";
import PdfViewer from "./components/PDFViewer";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router/router";

const MyApp: React.FC = () => {
  // const pdfUrl = `${process.env.PUBLIC_URL}/Katz.pdf`;
  return (
    <>
      {/* <PdfViewer fileUrl={pdfUrl} /> */}
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default MyApp;
