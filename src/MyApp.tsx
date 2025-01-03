import React from "react";
import PdfViewer from "./components/PDFViewer.tsx";

const MyApp: React.FC = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/Katz.pdf`;
  return (
    <>
      <h1>PDF Viewer</h1>
      <PdfViewer fileUrl={pdfUrl} />
    </>
  );
};

export default MyApp;
