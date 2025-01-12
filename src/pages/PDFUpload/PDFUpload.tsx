import React, { use, useEffect, useState } from "react";
import "./PDFUpload.css";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import MainHeader from "../../components/MainHeader/MainHeader";

const PDFUpload: React.FC = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/pdf-library");
  };

  const submitPDF = async (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus("Please choose a file to upload.");
      return;
    }

    setLoading(true);
    setUploadStatus(null);

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
    if (result.status === 200) {
      setUploadStatus("File uploaded successfully!");
      setLoading(false);
    } else {
      setUploadStatus("Failed to upload the file.");
    }
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
          <div className="uploadButtonContainer">
            <label htmlFor="fileInput" className="pdfUploadLabel">
              Choose File
              <MdCloudUpload className="uploadIcon" />
            </label>
            <input
              className="pdfUploadFile"
              type="file"
              id="fileInput"
              accept="application/pdf"
              required
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>
          <button className="pdfUploadButton" type="submit">
            {loading ? "Uploading..." : "Upload PDF"}
          </button>
          {uploadStatus && (
            <div
              className={`uploadStatus ${
                uploadStatus.includes("successfully") ? "success" : "error"
              }`}
            >
              {uploadStatus}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default PDFUpload;
