import React, { use, useEffect, useState } from "react";
import "./PDFUpload.css";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import { jwtDecode } from "jwt-decode";
import MainHeader from "../../components/MainHeader/MainHeader";

interface DecodedToken {
  id: string;
  email: string;
  exp: number;
  name: string;
}

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

    const token = localStorage.getItem("token");

    if (!token || typeof token !== "string") {
      console.log("Token is missing or invalid.");
      setUploadStatus("Token is missing or invalid.");
      return;
    }

    const decodedToken = jwtDecode<DecodedToken>(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken.exp < currentTime) {
      console.log("Token has expired. Please log in again.");
      localStorage.removeItem("token");
      navigate("/login");
      return;
    }

    if (!file) {
      setUploadStatus("Please choose a file to upload.");
      return;
    }

    setLoading(true);
    setUploadStatus(null);

    const userId = decodedToken.id;
    const formData = new FormData();
    formData.append("user", userId);
    formData.append("title", title);
    formData.append("file", file as Blob);
    const result = await axios.post(
      "http://localhost:3001/upload-files",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
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
