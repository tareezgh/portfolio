export const handleDownload = () => {
  const fileName = "Tareez-Ghandour-CV.pdf";
  const pdfFilePath = "/assets/" + fileName;

  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + pdfFilePath;
  link.download = fileName || "downloaded-file.pdf";
  link.target = "_blank";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
