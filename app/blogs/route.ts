import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const blogsDir = path.join(process.cwd(), "public", "blogs");
  const folders = fs.readdirSync(blogsDir);

  const blogPosts = folders
    .filter((folder) => fs.lstatSync(path.join(blogsDir, folder)).isDirectory())
    .map((folder) => {
      const blogPath = path.join(blogsDir, folder);
      const files = fs.readdirSync(blogPath);

      const fileName = files.find(f => f.endsWith(".txt") || f.endsWith(".pdf"));
      const imageFile = files.find(f => f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg"));

      if (!fileName) return null;

      const slug = folder;
      const title = slug.replace(/-/g, " ");
      const fileType = fileName.endsWith(".pdf") ? "pdf" : "txt";
      const image = imageFile ? `/blogs/${slug}/${imageFile}` : "https://via.placeholder.com/400x300?text=No+Image";

      return {
        title,
        slug,
        fileType,
        fileName,
        likes: Math.floor(Math.random() * 30),
        comments: Math.floor(Math.random() * 10),
        image,
      };
    })
    .filter(Boolean);

  return NextResponse.json(blogPosts);
}
