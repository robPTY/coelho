import React from "react";
import { useParams } from "react-router-dom";

const PDFDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>PDF Details for ID: {id}</h1>
    </div>
  );
};

export default PDFDetails;
