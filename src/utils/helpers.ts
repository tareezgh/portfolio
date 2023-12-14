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

export const scrollToSectionById = (sectionId: string) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    const offsetValue = section.getBoundingClientRect().top - 100;

    window.scrollBy({
      top: offsetValue,
      behavior: "smooth",
    });
  }
};
