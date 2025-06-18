"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
  fileType: string;
  image: string;
  likes: number;
  comments: number;
}

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [liked, setLiked] = useState<{ [slug: string]: boolean }>({});

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/blogs");
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleLike = (e: React.MouseEvent, index: number, slug: string) => {
    e.preventDefault(); // prevent link navigation
    const updatedBlogs = [...blogs];
    const isLiked = liked[slug];

    updatedBlogs[index].likes += isLiked ? -1 : 1;
    setBlogs(updatedBlogs);
    setLiked({ ...liked, [slug]: !isLiked });
  };

  return (
    <section className="bg-white py-10 px-6">
      <h2 className="text-3xl font-semibold mb-6">Travel Blogs</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index}>
            <Card className="cursor-pointer hover:shadow-lg transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-t-md"
              />

              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{post.title}</h3>

                {/* ❤️ Like Section Only */}
                <div className="flex justify-end items-center mt-4">
                  <button
                    onClick={(e) => handleLike(e, index, post.slug)}
                    className={`flex items-center gap-1 text-sm ${
                      liked[post.slug] ? "text-red-600" : "text-gray-500"
                    } hover:text-red-500 transition`}
                  >
                    <Heart
                      size={16}
                      className={
                        liked[post.slug]
                          ? "fill-red-500 text-red-500"
                          : ""
                      }
                    />
                    {post.likes}
                  </button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
