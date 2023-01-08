// import React ,{useState} from "react";
// import {Document,Page} from 'react-pdf/dist/esm/entry.webpack5';

// function Resumecom() {
//     const [pdflink]=useState("https://drive.google.com/file/d/1CuHyKUJS8n0BjCLqNUGnuEzwTx8e-uHV/preview")
//     const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file={pdflink} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       {/* <iframe src="https://drive.google.com/file/d/1CuHyKUJS8n0BjCLqNUGnuEzwTx8e-uHV/preview" width="640" height="480" allow="autoplay"></iframe> */}
//     </div>
//   );
// }

// export default Resumecom;