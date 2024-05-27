import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = async (data) => {
  const pdf = new jsPDF();

  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      pdf.addPage();
    }
    pdf.setFontSize(24);
    pdf.text(data[i].title, 10, 10);
    pdf.setFontSize(18);
    pdf.text(data[i].content, 10, 30);
    for (let j = 0; j < data[i].image_urls.length; j++) {
      const img = await loadImage(data[i].image_urls[j]);
      pdf.addImage(img, 'JPEG', 10, 50 + (j * 40), 180, 40);
    }
  }

  pdf.save("presentation.pdf");
};

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Image load error"));
  });
};


export default generatePDF;
