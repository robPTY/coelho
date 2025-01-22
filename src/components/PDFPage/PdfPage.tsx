import React, { useRef, useEffect, useState } from "react";
import "./PdfPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import WebViewer from "@pdftron/webviewer";
import MainHeader from "../MainHeader/MainHeader";
import PdfEditor from "../PDFEditor/PdfEditor";

const PdfPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const viewerDiv = useRef<HTMLDivElement>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchPdfData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(`/get-pdf/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPdfUrl(response.data.filePath);
      } catch (error) {
        console.error("Failed to fetch PDF data:", error);
      }
    };

    fetchPdfData();
  }, [id]);

  useEffect(() => {
    WebViewer(
      {
        path: "/lib",
        licenseKey:
          "demo:1737225677540:7e804d700300000000683b2c06ea7e1fb2a74c4237bb18bd1b2ed5860a",
        initialDoc: pdfUrl,
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
