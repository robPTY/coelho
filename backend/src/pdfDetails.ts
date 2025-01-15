import mongoose from "mongoose";

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
    uploadedAt: { type: Date, default: Date.now },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserDetails",
      required: true,
    },
  },
  { collection: "PdfDetails", timestamps: true }
);

const PdfDetails = mongoose.model("PdfDetails", PdfDetailsSchema);
export default PdfDetails;
