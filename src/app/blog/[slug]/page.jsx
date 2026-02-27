import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'

const client = createClient({
  projectId: 'h1vtoxwl',
  dataset: 'production',
  apiVersion: '2026-02-27',
  useCdn: true,
})

export default async function SinglePost({ params }) {
  const { slug } = await params
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })

  if (!post) return <div>Post not found</div>

  return (
    <article style={{ padding: '50px', maxWidth: '700px' }}>
      <h1>{post.title}</h1>
      <div style={{ marginTop: '30px' }}>
        <PortableText value={post.body} />
      </div>
    </article>
  )
}