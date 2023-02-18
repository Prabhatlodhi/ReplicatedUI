import React from "react";
const File = ({fileName}) => {
    //console.log(fileName);
    return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
      <span>{fileName}</span>
    </>
  );
};

export const FileDocsContainer = () => {
  const files = [
    "Check Up Results.pdf",
    "Check Up Results2.pdf",
    "Medical Prescription.pdf",
    "Dental X-Ray Result.pdf",
  ];
  return (
    <div className="ml-2 mt-10">
      <h3 className=" pl-4 text-lg text-gray-600 ">Files / Documents</h3>
      <div className="mt-10 ml-6">
        <ul>
          {files.map((file, index) => {
            return <li key={index} className="flex pl-3 p-2 rounded mt-8 text-gray-500 bg-gray-200"><File fileName={file} /></li>;
          })}
          
        </ul>
      </div>
    </div>
  );
};
