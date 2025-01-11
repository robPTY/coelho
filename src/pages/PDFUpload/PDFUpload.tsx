import React, { use, useEffect, useState } from "react";
import "./PDFUpload.css";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";

const PDFUpload: React.FC = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [image, setAllImage] = useState(null);
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/pdf-library");
  };

  const submitPDF = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file as Blob);
    const result = await axios.post(
      "http://localhost:3001/upload-files",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(result);
  };

  return (
    <>
      <MainHeader />
      <div className="pdfUploadArea">
        <div className="arrowIconContainer" onClick={handleBackButton}>
          <IoMdArrowRoundBack className="arrowIcon" />
        </div>
        <form className="pdfUploadForm" onSubmit={submitPDF}>
          <h3>Upload PDF Here</h3>
          <input
            className="pdfUploadTitle"
            type="text"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="pdfUploadFile"
            type="file"
            accept="application/pdf"
            required
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <button className="pdfUploadButton" type="submit">
            Upload PDF
          </button>
        </form>
      </div>
    </>
  );
};

export default PDFUpload;
