import path from "path";
import fs from "fs";

export async function saveImage(formData: FormData, imageName: string) {
  const image: any = formData.get("image");
  const imagePath = path.join(
    process.cwd(),
    "storage/images",
    imageName + ".WebP"
  );
  const buffer: any = Buffer.from(await image.arrayBuffer());

  return new Promise((resolve, reject) => {
    fs.writeFile(imagePath, buffer, (err) => {
      if (err) {
        console.error("Error writing the file:", err);
        reject(err);
      } else {
        resolve(image.name);
      }
    });
  });
}
