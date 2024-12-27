import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer } from "@react-pdf-viewer/core";

const PdfViewer: React.FC<{ fileUrl: string }> = async ({ fileUrl }) => {
  const defaultLayout = defaultLayoutPlugin();

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@${
        (await import("pdfjs-dist/package.json")).version
      }/build/pdf.worker.min.js`}
    >
      <div style={{ height: "750px" }}>
        <Viewer fileUrl={fileUrl} plugins={[defaultLayout]} />
      </div>
    </Worker>
  );
};

export default PdfViewer;
