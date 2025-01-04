import React from "react";
import PDFCard from "./components/PDFCard.tsx";

const PDFLibrary: React.FC = () => {
  return (
    <div>
      <h1>PDF Library</h1>
      <PDFCard
        title={"hi"}
        thumbnail={"test.png"}
        fileSize={"98MB"}
        creationDate={"Jan 1"}
      />
    </div>
  );
};

export default PDFLibrary;
