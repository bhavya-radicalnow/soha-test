import { client } from '../../sanity/client'
import Link from 'next/link'

// This tells Next.js NEVER to cache this page, so your new posts show up instantly
export const revalidate = 0; 

// Fetch all posts, ordered by newest first
async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt
  }`)
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-white">Latest Updates</h1>
      
      {posts.length === 0 && (
        <p className="text-gray-400">No posts found. Check your Sanity Studio!</p>
      )}

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post._id} className="block group">
            <div className="p-6 border border-gray-800 rounded-lg shadow-sm hover:border-gray-500 transition-colors bg-gray-900">
              <h2 className="text-2xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              {post.publishedAt && (
                <p className="text-gray-400 mt-2 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}