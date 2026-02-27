import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'h1vtoxwl',
  dataset: 'production',
  apiVersion: '2026-02-27',
  useCdn: true,
})

export default async function BlogIndex() {
  const posts = await client.fetch(`*[_type == "post"]{title, "slug": slug.current}`)

  return (
    <div style={{ padding: '50px' }}>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.slug} style={{ margin: '20px 0' }}>
          <a href={`/blog/${post.slug}`} style={{ fontSize: '22px', color: 'blue' }}>
            {post.title} →
          </a>
        </div>
      ))}
    </div>
  )
}