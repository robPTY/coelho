import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PDFLibrary.css";
import MainHeader from "../../components/MainHeader/MainHeader";
import PDFCard from "./components/PDFCard";

const PDFLibrary: React.FC = () => {
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getPDF();
  }, []);

  const getPDF = async () => {
    const result = await axios.get("http://localhost:3001/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const testImageUrl = "/images/otter.jpg";
  return (
    <>
      <MainHeader />
      <div className="pdfLibrary">
        <h1 className="libraryHeader">PDF Library</h1>
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
