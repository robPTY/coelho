import React from "react";
import "./PdfPage.css";
import MainHeader from "../MainHeader/MainHeader";
import PdfEditor from "../PDFEditor/PdfEditor";

const PdfPage: React.FC = () => {
  return (
    <>
      <MainHeader />
      <PdfEditor />
    </>
  );
};

export default PdfPage;
