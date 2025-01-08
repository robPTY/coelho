import React from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { PiCursorFill } from "react-icons/pi";
import { TbZoomFilled } from "react-icons/tb";
import { FaHighlighter } from "react-icons/fa";
import { IoIosUndo } from "react-icons/io";
import { IoIosRedo } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import "./InternalHeader.css";

interface internalHeaderProps {
  title: string;
}

const InternalHeader: React.FC<internalHeaderProps> = ({ title }) => {
  return (
    <header className="internalHeader">
      <div className="pdfTools">
        <button className="homeButton">
          <BiSolidHomeAlt2 className="headerIcon" />
        </button>
        <button className="cursorButton">
          <PiCursorFill className="headerIcon" />
        </button>
        <button className="highlightButton">
          <FaHighlighter className="headerIcon" />
        </button>
        <button className="zoomButton">
          <TbZoomFilled className="headerIcon" />
        </button>
        <button className="undoButton">
          <IoIosUndo className="headerIcon" />
        </button>
        <button className="redoButton">
          <IoIosRedo className="headerIcon" />
        </button>
      </div>
      <div className="pdfInfoContent">{title}</div>
      <div className="pdfOperations">
        <button className="chatButton">
          <IoChatbox className="headerIcon" />
        </button>
        <button className="shareButton">
          <FaShareAlt className="headerIcon" />
          Share
        </button>
      </div>
    </header>
  );
};

export default InternalHeader;
