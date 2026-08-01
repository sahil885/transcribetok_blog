import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { chipColorForCategory } from "@/lib/clusters";

// "Related guides" block rendered at the bottom of every post.
// Concentrates topical authority by interlinking sibling articles.

export default function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-gray-100 pt-10">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Related guides</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="group flex flex-col border border-gray-100 rounded-xl p-4 hover:border-rose-200 hover:shadow-sm transition-all"
          >
            <span
              className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${chipColorForCategory(
                post.category
              )}`}
            >
              {post.category}
            </span>
            <span className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors leading-snug text-sm">
              {post.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
