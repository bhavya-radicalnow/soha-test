export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'body', type: 'array', title: 'Body', of: [{ type: 'block' }] },
  ],
}