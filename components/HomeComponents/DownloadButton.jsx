"use client";

import { FiDownload } from "react-icons/fi";

import { Button } from "@/components/ui/button";

import { documents } from "@/utils/assets";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = documents.resume;
    link.download = "Ahmed Elzyat_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="flex items-center gap-2 uppercase"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;
