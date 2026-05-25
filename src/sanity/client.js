import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: 'production',
  apiVersion: '2024-03-18', 
  useCdn: true, 
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)