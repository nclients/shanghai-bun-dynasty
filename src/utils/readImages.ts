import fs from 'fs';
import path from 'path';

export function getImagesFromFolder(folderPath: string) {
  const imagesDir = path.join(process.cwd(), folderPath);
  const fileNames = fs.readdirSync(imagesDir);

  const images = fileNames
    .filter(fileName => fileName !== '.DS_Store')  // Filter out .DS_Store files
    .map(fileName => ({
      src: path.join(folderPath, fileName),
      name: formatFileName(fileName),
    }));

  return images;
}

function formatFileName(fileName: string) {
  // Remove the file extension
  const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

  // Replace all _ with spaces
  const formattedName = nameWithoutExtension.replace(/[_]/g, " ");

  // Capitalize the first letter of each word
//   const capitalized = formattedName.replace(/\b\w/g, char => char.toUpperCase());

  return formattedName;
}