import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface SocialLinks {
  key: string
  url: string
  _key: string
}

export interface ContactMeButton {
  email: string
  title: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface BlogPosts {
  _type: string
  mainImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  title?: string
}

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  blogPosts?: BlogPosts[]
  title?: string
  name?: string
  avatar?: Image
  tagLine?: string
  socialLinks?: SocialLinks[]
  contactMeButton?: ContactMeButton
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface BlogPayload {
  title: string
  slug: string
  overview?: PortableTextBlock[]
  author?: string
  publishedAt?: string
  mainImage?: Image
  categories?: string[]
  body?: PortableTextBlock[]
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}
