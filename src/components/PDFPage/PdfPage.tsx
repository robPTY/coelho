import React from "react";
import "./PdfPage.css";
import MainHeader from "../MainHeader/MainHeader.tsx";
import PdfEditor from "../PDFEditor/PdfEditor.tsx";

const PdfPage: React.FC = () => {
  return (
    <>
      <MainHeader />
      <PdfEditor />
    </>
  );
};

export default PdfPage;
