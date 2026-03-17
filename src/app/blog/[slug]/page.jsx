import { client, urlFor } from '../../../sanity/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

// Fetch a single post based on the slug
async function getPost(slug) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    publishedAt
  }`, { slug })
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) return <div className="text-center py-20 text-2xl font-bold text-gray-600">Post not found</div>

  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{post.title}</h1>
      
      {post.publishedAt && (
        <p className="text-gray-500 mb-8 font-medium">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}

      {post.mainImage && (
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src={urlFor(post.mainImage).url()} 
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Renders the rich text from Sanity safely */}
      <div className="prose prose-lg max-w-none text-gray-800">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}