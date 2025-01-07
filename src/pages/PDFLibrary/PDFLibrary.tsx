import React from "react";
import "./PDFLibrary.css";
import MainHeader from "../../components/MainHeader/MainHeader.tsx";
import PDFCard from "./components/PDFCard.tsx";

const PDFLibrary: React.FC = () => {
  const testImageUrl = "/images/otter.jpg";
  return (
    <>
      <MainHeader />
      <div className="pdfLibrary">
        <h1 className="libraryHeader">PDF Library</h1>
        <div className="pdfLibraryContainer">
          <PDFCard
            id={"1"}
            title={"Uber Receipt"}
            thumbnail={testImageUrl}
            fileSize={"98MB"}
            creationDate={"Jan 1"}
          />
          {/* <PDFCard
            title={"Uber Receipt"}
            thumbnail={testImageUrl}
            fileSize={"98MB"}
            creationDate={"Jan 1"}
          />
          <PDFCard
            title={"Uber Receipt"}
            thumbnail={testImageUrl}
            fileSize={"98MB"}
            creationDate={"Jan 1"}
          />
          <PDFCard
            title={"Uber Receipt"}
            thumbnail={testImageUrl}
            fileSize={"98MB"}
            creationDate={"Jan 1"}
          />
          <PDFCard
            title={"Uber Receipt"}
            thumbnail={testImageUrl}
            fileSize={"98MB"}
            creationDate={"Jan 1"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default PDFLibrary;
