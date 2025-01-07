import React from "react";
import "./PDFCard.css";
import { useNavigate } from "react-router-dom";

interface PDFCardProps {
  id: string;
  title: string;
  thumbnail: string;
  creationDate: string;
  fileSize: string;
}

const PDFCard: React.FC<PDFCardProps> = ({
  id,
  title,
  thumbnail,
  creationDate,
  fileSize,
}) => {
  const openPage = "/icons/openPage.png";
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/pdf-library/${id}`);
  };

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
          <button className="pdfOpenButton" onClick={handleButtonClick}>
            <img src={openPage} alt="Open Page" className="openPageIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFCard;
