import React, { useRef, useEffect } from "react";
import "./PdfPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import WebViewer from "@pdftron/webviewer";
import MainHeader from "../MainHeader/MainHeader";
import PdfEditor from "../PDFEditor/PdfEditor";

const PdfPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/lib",
        licenseKey:
          "demo:1737225677540:7e804d700300000000683b2c06ea7e1fb2a74c4237bb18bd1b2ed5860a",
        initialDoc: "/pdfs/Katz.pdf",
        css: "css/WebViewer.css",
      },
      viewerDiv.current as HTMLDivElement
    )
      .then((instance) => {})
      .catch((error) => {
        console.error("Error initializing WebViewer:", error);
      });
  }, []);

  if (!id) {
    return <div>No PDF ID provided</div>;
  }
  const getPdfData = () => {};
  return (
    <>
      <MainHeader />
      {/* <PdfEditor /> */}
      <div>
        <div
          className="webViewer"
          ref={viewerDiv}
          style={{ height: "100vh" }}
        ></div>
      </div>
    </>
  );
};

export default PdfPage;
