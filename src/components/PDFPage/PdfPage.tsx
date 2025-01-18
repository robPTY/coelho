import React from "react";
import "./PdfPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainHeader from "../MainHeader/MainHeader";
import PdfEditor from "../PDFEditor/PdfEditor";

const PdfPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>No PDF ID provided</div>;
  }
  const getPdfData = () => {};

  return (
    <>
      <MainHeader />
      <PdfEditor />
    </>
  );
};

export default PdfPage;
