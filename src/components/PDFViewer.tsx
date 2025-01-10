import React, { useEffect, useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer } from "@react-pdf-viewer/core";
import "./PDFViewer.css";
/**
 *
 * Props:
 * fileUrl: string - The URL of the PDF file to display
 */
const PdfViewer: React.FC<{ fileUrl: string }> = ({ fileUrl }) => {
  const [workerUrl, setWorkerUrl] = useState<string>("");

  // useEffect(() => {
  //   const fetchWorkerUrl = async () => {
  //     const { version } = await import("pdfjs-dist/package.json");
  //     setWorkerUrl(
  //       `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`
  //     );
  //   };

  //   fetchWorkerUrl();
  // }, []);

  // if (!workerUrl) return <div>Loading...</div>;

  return (
    <Worker workerUrl={workerUrl}>
      <div className="pdfViewerContainer">
        <Viewer fileUrl={fileUrl} />
      </div>
    </Worker>
  );
};

export default PdfViewer;
