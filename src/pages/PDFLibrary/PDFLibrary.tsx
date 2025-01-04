import React from "react";
import "./PDFLibrary.css";
import PDFCard from "./components/PDFCard.tsx";

const PDFLibrary: React.FC = () => {
  const testImageUrl = "/images/otter.jpg";
  return (
    <div>
      <h1>PDF Library</h1>
      <div className="pdfLibraryContainer">
        <PDFCard
          title={"Uber Receipt"}
          thumbnail={testImageUrl}
          fileSize={"98MB"}
          creationDate={"Jan 1"}
        />
      </div>
    </div>
  );
};

export default PDFLibrary;
