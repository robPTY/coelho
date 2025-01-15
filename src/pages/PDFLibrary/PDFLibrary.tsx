import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PDFLibrary.css";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import PDFCard from "./components/PDFCard";

const PDFLibrary: React.FC = () => {
  const [allImage, setAllImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPDF();
  }, []);

  const getPDF = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get("http://localhost:3001/get-files", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error(
        "Error fetching files:",
        error.response?.data || error.message
      );
    }
  };

  const handleUpload = () => {
    navigate("/pdf-upload");
  };

  const testImageUrl = "/images/otter.jpg";
  return (
    <>
      <MainHeader />
      <div className="pdfLibrary">
        <div className="pdfLibraryHeader">
          <button className="decoy">Upload PDF</button>
          <h1 className="libraryHeader">PDF Library</h1>
          <button className="uploadButton" onClick={handleUpload}>
            Upload PDF
          </button>
        </div>
        <div className="pdfLibraryContainer">
          {allImage &&
            allImage.map((data: any) => (
              <PDFCard
                id={data._id}
                title={data.title}
                thumbnail={testImageUrl}
                fileSize={"10MB"}
                creationDate={
                  data.uploadedAt
                    ? new Date(data.uploadedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    : undefined
                }
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default PDFLibrary;
