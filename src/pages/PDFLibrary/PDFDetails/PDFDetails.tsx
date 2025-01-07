import React from "react";
import { useParams } from "react-router-dom";
import InternalHeader from "../../../components/InternalHeader/InternalHeader.tsx";

const PDFDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <InternalHeader title="test" />
      <div>
        <h1>PDF Details for ID: {id}</h1>
      </div>
    </>
  );
};

export default PDFDetails;
