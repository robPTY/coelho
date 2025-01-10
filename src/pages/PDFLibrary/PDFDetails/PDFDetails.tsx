import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PDFViewer from "../../../components/PDFViewer";
import PdfEditor from "../../../components/PDFEditor/PdfEditor";
import InternalHeader from "../../../components/InternalHeader/InternalHeader";

const PDFDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // const [isChatOpen, setIsChatOpen] = useState(false);
  // const toggleChat = () => {
  //   setIsChatOpen(!isChatOpen);
  // };
  const pdfUrl = `${process.env.PUBLIC_URL}/pdfs/Katz.pdf`;
  return (
    <>
      <InternalHeader title="test" />
      <div className="mainContainer">
        <h1>PDF Details for ID: {id}</h1>
        <div>
          {/* <div className={`middlePanel ${isChatOpen ? "compressed" : ""}`}> */}
          {/* <PDFViewer fileUrl={pdfUrl} /> */}
          <PdfEditor />
        </div>
      </div>
    </>
  );
};

export default PDFDetails;
