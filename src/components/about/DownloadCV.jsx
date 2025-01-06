import React from "react";

export function DownloadCVButton() {
  return (
    <a
      href="/resume.pdf"
      download="Jirachaya_Songrattanakajorn_CV.pdf"
      className="px-6 py-3 bg-[#1c47f581] hover:bg-[#1c47f56f] rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition"
    >
      Download CV
    </a>
  );
}

export default DownloadCVButton;