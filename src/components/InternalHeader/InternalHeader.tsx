import React from "react";
import "./InternalHeader.css";

interface internalHeaderProps {
  title: string;
}

const InternalHeader: React.FC<internalHeaderProps> = ({ title }) => {
  return (
    <header className="internalHeader">
      <div className="pdfTools">
        <button className="homeButton"></button>
        <button className="cursorButton"></button>
        <button className="highlightButton"></button>
        <button className="zoomButton"></button>
        <button className="undoButton"></button>
        <button className="redoButton"></button>
      </div>
      <div className="pdfInfoContent">{title}</div>
      <div className="pdfOperations">
        <button className="chatButton"></button>
        <button className="shareButton"></button>
      </div>
    </header>
  );
};

export default InternalHeader;
