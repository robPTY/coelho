import HomePage from "../../pages/HomePage/HomePage.tsx";
import PDFLibrary from "../../pages/PDFLibrary/PDFLibrary.tsx";

export const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pdf-library",
    element: <PDFLibrary />,
  },
];
