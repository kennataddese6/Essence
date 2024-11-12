import path from "path";
import fs from "fs";
export async function GET(req: any, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const imagePath = path.join(process.cwd(), `storage/images/${id}.WebP`);
    const imageBuffer = fs.readFileSync(imagePath);
    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/webp",
      },
    });
  } catch (error) {
    return new Response("Image not found", {
      status: 404,
    });
  }
}
