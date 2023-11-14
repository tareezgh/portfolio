// import file from "../../public/"

export const handleDownload = () => {
  const fileName = "Tareez-Ghandour-CV.pdf";
  const pdfFilePath = "/assets/" + fileName;

  // Create an invisible anchor element
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + pdfFilePath;
  link.download = fileName || "downloaded-file.pdf";
  link.target = "_blank";

  // Append the anchor element to the DOM
  document.body.appendChild(link);

  // Trigger the click event to download the file
  link.click();

  // Remove the anchor element from the DOM after the download is initiated
  document.body.removeChild(link);
};
