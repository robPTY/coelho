import React from "react";
import PdfViewer from "./components/PDFViewer.tsx";

const MyApp: React.FC = () => {
  return (
    <>
      <h1>PDF Viewer</h1>
      <PdfViewer fileUrl="./pdfs/Katz.pdf"></PdfViewer>
    </>
  );
};

export default MyApp;
