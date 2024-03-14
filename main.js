const fromPath = require("pdf2pic") ;
const fs = require('fs');

const targetDir = 'C:\\Users\\at317\\Documents\\2023exbit\\LoL-20240311T042121Z-001\\LoL';
const files = fs.readdirSync(targetDir).filter(file => file.endsWith('.pdf'));
console.log(files)




for (const file of files) {
    const options = {
        density: 100,
        saveFilename: `${file}`,
        savePath: `${targetDir}/images`,
        format: "jpeg",
        width: 3307,
        height: 4678
      };
    const convert = fromPath(file, options);
    const pageToConvertAsImage = 1;
    
    convert(pageToConvertAsImage, { responseType: "image" })
      .then((resolve) => {
        console.log("Page 1 is now converted as image");
    
        return resolve;
      });
}