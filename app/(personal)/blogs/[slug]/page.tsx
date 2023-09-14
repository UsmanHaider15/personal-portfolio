import { toPlainText } from '@portabletext/react'
import { BlogPage } from 'components/pages/blog/BlogPage'
import BlogPreview from 'components/pages/blog/BlogPreview'
import {
  getBlogBySlug,
  getHomePageTitle,
  getBlogsPaths,
} from 'lib/sanity.fetch'
import { blogBySlugQuery } from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { LiveQuery } from 'next-sanity/preview/live-query'

export const runtime = 'edge'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const [homePageTitle, blog] = await Promise.all([
    getHomePageTitle(),
    getBlogBySlug(slug),
  ])

  return defineMetadata({
    baseTitle: homePageTitle ?? undefined,
    description: blog?.overview ? toPlainText(blog.overview) : '',
    image: blog?.mainImage,
    title: blog?.title,
  })
}

export async function generateStaticParams() {
  const slugs = await getBlogsPaths()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogSlugRoute({ params }: Props) {
  const data = await getBlogBySlug(params.slug)

  if (!data && !draftMode().isEnabled) {
    notFound()
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={blogBySlugQuery}
      params={params}
      initialData={data}
      as={BlogPreview}
    >
      <BlogPage data={data} />
    </LiveQuery>
  )
}
