import { client, urlFor } from '../../../sanity/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export const revalidate = 0;

// Updated to fetch author data
async function getPost(slug) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image
  }`, { slug })
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) return <div className="text-center py-20 text-2xl font-bold text-black bg-white min-h-screen">Post not found</div>

  return (
    // Hardcoding bg-white to strictly ignore dark mode
    <main className="min-h-screen bg-white py-16 px-6 font-sans" style={{ colorScheme: 'light' }}>
      <article className="max-w-3xl mx-auto">
        
        <header className="mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-black tracking-tight leading-tight">
            {post.title}
          </h1>
          
          {/* Author & Date Row */}
          <div className="flex items-center space-x-3 mb-8 border-b border-gray-100 pb-8">
            {post.authorImage ? (
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-orange-100">
                  <Image src={urlFor(post.authorImage).url()} alt={post.authorName || 'Author'} fill className="object-cover" />
                </div>
            ) : (
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  {post.authorName ? post.authorName.charAt(0) : 'A'}
                </div>
            )}
            <div>
                <div className="font-mono text-sm text-black font-bold">{post.authorName || 'Author'}</div>
                {post.publishedAt && (
                  <div className="text-xs text-gray-500 font-mono mt-0.5">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'long', day: 'numeric', year: 'numeric'
                    })}
                  </div>
                )}
            </div>
          </div>
        </header>

        {post.mainImage && (
          <div className="relative w-full aspect-video mb-12 overflow-hidden bg-gray-50 border border-gray-100">
            <Image 
              src={urlFor(post.mainImage).url()} 
              alt={post.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}

        {/* Clean Prose with Orange Links to match your screenshot */}
        <div className="prose prose-lg max-w-none text-gray-800 prose-headings:text-black prose-headings:font-bold prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-li:marker:text-gray-400">
          <PortableText value={post.body} />
        </div>
        
      </article>
    </main>
  )
}