import React from "react";
import "./PDFLibrary.css";
import MainHeader from "../../components/MainHeader/MainHeader.tsx";
import PDFCard from "./components/PDFCard.tsx";

const PDFLibrary: React.FC = () => {
  const testImageUrl = "/images/otter.jpg";
  return (
    <div>
      <MainHeader />
      <h1>PDF Library</h1>
      <div className="pdfLibraryContainer">
        {/*<PDFCard
          title={"Uber Receipt"}
          thumbnail={testImageUrl}
          fileSize={"98MB"}
          creationDate={"Jan 1"}
        />
        */}
      </div>
    </div>
  );
};

export default PDFLibrary;
