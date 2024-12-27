import React from "react";
import PdfViewer from "./components/PDFViewer";

const App: React.FC = () => {
  return (
    <div>
      <h1>PDF Reader</h1>
      <PdfViewer fileUrl="/path/to/your/sample.pdf" />
    </div>
  );
};

export default App;
