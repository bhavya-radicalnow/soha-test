import { client } from '../../sanity/client'
import Link from 'next/link'

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
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Latest Updates</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post._id} className="block group">
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              {post.publishedAt && (
                <p className="text-gray-500 mt-2 text-sm">
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