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
        <img className="pdfThumbnail" src={thumbnail} />
      </div>
      <div className="pdfInformation">
        <div className="titleBar">
          <h4 className="pdfTitle">{title}</h4>
        </div>
        <div className="buttonBar">
          <p>{creationDate}</p>
          <p>{fileSize}</p>
          <button className="pdfOpenButton"></button>
        </div>
      </div>
    </div>
  );
};

export default PDFCard;
