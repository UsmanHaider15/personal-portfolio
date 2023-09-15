import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    blogPosts[]->{
      _type,
      mainImage,
      overview,
      "slug": slug.current,
      title,
    },
    name,
    avatar,
    tagLine,
    socialLinks,
    contactMeButton,
    services,
    testimonials
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    overview,
    author,
    publishedAt,
    mainImage,
    categories,
    body
  }
`

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`

export const blogPaths = groq`
  *[_type == "blog" && slug.current != null].slug.current
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
