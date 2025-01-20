import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import "./PdfEditor.css";

const PdfEditor: React.FC = () => {
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        licenseKey:
          "demo:1737225677540:7e804d700300000000683b2c06ea7e1fb2a74c4237bb18bd1b2ed5860a",
        initialDoc: "pdfs/Katz.pdf",
        css: "css/WebViewer.css",
      },
      viewerDiv.current as HTMLDivElement
    )
      .then((instance) => {})
      .catch((error) => {
        console.error("Error initializing WebViewer:", error);
      });
  }, []);
  return (
    <div>
      <div
        className="webViewer"
        ref={viewerDiv}
        style={{ height: "100vh" }}
      ></div>
    </div>
  );
};

export default PdfEditor;
