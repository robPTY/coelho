import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import "./PdfEditor.css";

const PdfEditor: React.FC = () => {
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc: "pdfs/Katz.pdf",
        css: "css/WebViewer.css",
      },
      viewerDiv.current as HTMLDivElement
    ).then((instance) => {});
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
