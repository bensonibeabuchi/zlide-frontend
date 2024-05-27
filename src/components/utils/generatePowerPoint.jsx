import PptxGenJS from "pptxgenjs";


const generatePowerPoint = (data) => {
  let pptx = new PptxGenJS();

  data.forEach((slideData, index) => {
    let slide = pptx.addSlide();
    slide.addText(slideData.title, { x: 0.5, y: 0.5, fontSize: 24, w:"40%", bold: true });
    slide.addText(slideData.content, { x: 0.5, y: 1.5, fontSize: 16, w:"40%", });
    slideData.image_urls.forEach((url, i) => {
      slide.addImage({ path: url, x: "53%", y: 0.2 + (i * 2), w: "46%", h: "80%" });
    });
  });

  pptx.writeFile({ fileName: "presentation.pptx" });
};

export default generatePowerPoint;