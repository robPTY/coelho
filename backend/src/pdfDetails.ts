import mongoose from "mongoose";
const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
    uploadedAt: Date,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserDetails",
      required: true,
    },
  },
  { collection: "PdfDetails", timestamps: true }
);
mongoose.model("PdfDetails", PdfDetailsSchema);
export default mongoose.model("PdfDetails");
