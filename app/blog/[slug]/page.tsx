import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const blogDir = path.join(process.cwd(), "public", "blogs", params.slug);
  const txtPath = path.join(blogDir, `${params.slug}.txt`);
  const pdfPath = path.join(blogDir, `${params.slug}.pdf`);

  let content = "";
  let fileType: "txt" | "pdf" | null = null;

  if (fs.existsSync(txtPath)) {
    content = fs.readFileSync(txtPath, "utf-8");
    fileType = "txt";
  } else if (fs.existsSync(pdfPath)) {
    fileType = "pdf";
  } else {
    notFound();
  }

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      {fileType === "txt" ? (
        <>
          <h1 className="text-3xl font-bold mb-6 capitalize">{params.slug.replace(/-/g, " ")}</h1>
          <pre className="whitespace-pre-wrap text-lg text-gray-800">{content}</pre>
        </>
      ) : (
        <iframe
          src={`/blogs/${params.slug}/${params.slug}.pdf#toolbar=0`}
          className="w-full h-[90vh] border"
          title="PDF Viewer"
          
        />
      )}
    </main>
  );
}
