import mongoose from "mongoose";
const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
    uploadedAt: Date,
  },
  { collection: "PdfDetails" }
);
mongoose.model("PdfDetails", PdfDetailsSchema);
export default mongoose.model("PdfDetails");
