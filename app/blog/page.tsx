import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";
import { getViewsCount } from "lib/metrics";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  const allViews = await getViewsCount();

  return (
    <section>
      <h1 className='font-bold text-neutral-200 text-3xl mb-8 tracking-tighter'>
        My blogs
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className='flex flex-col space-y-1 mb-4'
            href={`/blog/${post.slug}`}>
            <div className='w-full flex flex-col'>
              <p className='text-neutral-100 tracking-'>{post.title}</p>
              <ViewCounter
                allViews={allViews}
                slug={post.slug}
                trackView={false}
              />
            </div>
          </Link>
        ))}
    </section>
  );
}
