

import { fromPath } from 'pdf2pic';
import fs from 'fs';

const targetDir = 'C:\\Users\\at317\\Downloads\\展示物提出場所_R05成果発表会-20240311T052223Z-001\\展示物提出場所_R05成果発表会\\LoL';
const files = fs.readdirSync(targetDir).filter(file => file.endsWith('.pdf'));
console.log(files)




for (const file of files) {
    const options = {
        density: 100,
        saveFilename: `${file}`,
        savePath: `${targetDir}/images`,
        preserveAspectRatio:true,
        format: "png",
        width: 3307
      };
    const convert = fromPath(`${targetDir}/${file}`, options);
    const pageToConvertAsImage = 1;
    
    convert(pageToConvertAsImage, { responseType: "image" })
      .then((resolve) => {
        console.log("Page 1 is now converted as image");
    
        return resolve;
      });
}