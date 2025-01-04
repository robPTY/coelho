import React from "react";
import "./PDFCard.css";

interface PDFCardProps {
  title: string;
  thumbnail: string;
  creationDate: string;
  fileSize: string;
}

const PDFCard: React.FC<PDFCardProps> = ({
  title,
  thumbnail,
  creationDate,
  fileSize,
}) => {
  return (
    <div className="pdfCard">
      <div className="pdfPreview">
        <img src={thumbnail} />
      </div>
      <div className="pdfInformation">
        <div className="titleBar">
          <h3>{title}</h3>
        </div>
        <div className="buttonBar">
          <p>{creationDate}</p>
          <p>{fileSize}</p>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default PDFCard;
