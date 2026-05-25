import { client, urlFor } from '../../sanity/client'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 0; 

// Updated to fetch author data
async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image
  }`)
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    // Hardcoding bg-gray-50 and colorScheme to strictly ignore dark mode
    <main className="min-h-screen bg-gray-50 py-20 px-6 font-sans" style={{ colorScheme: 'light' }}>
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post._id} className="block group">
              <div className="p-8 rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                <h2 className="text-3xl font-bold text-black group-hover:text-gray-600 transition-colors mb-6 tracking-tight">
                  {post.title}
                </h2>
                
                {/* Footer of the card */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {post.authorImage ? (
                        <div className="w-8 h-8 rounded-full overflow-hidden relative bg-orange-100">
                          <Image src={urlFor(post.authorImage).url()} alt={post.authorName || 'Author'} fill className="object-cover" />
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
                          {post.authorName ? post.authorName.charAt(0) : 'A'}
                        </div>
                    )}
                    <span className="font-mono text-sm text-black">{post.authorName || 'Author'}</span>
                  </div>
                  
                  {post.publishedAt && (
                    <span className="text-sm text-gray-500 font-mono">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'long', day: 'numeric', year: 'numeric'
                      })}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}