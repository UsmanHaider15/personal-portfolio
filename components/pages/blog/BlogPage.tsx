import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link'
import type { BlogPayload } from 'types'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import ShareIcons from './ShareIcon'

export interface BlogPageProps {
  data: BlogPayload | null
}

export function BlogPage({ data }: BlogPageProps) {
  const {
    title,
    author,
    publishedAt,
    mainImage,
    categories,
    body,
    overview,
    slug,
  } = data ?? {}

  const publishedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : 'Unpublished'

  return (
    <div className="md:mx-auto md:w-7/12">
      <div className="mb-20">
        <h1 className="font-bold text-2xl md:text-5xl mb-4">{title}</h1>

        <div className="border-t border-b flex justify-between items-center mb-6">
          {!!publishedDate && author && (
            <div className="text-sm md:text-md">
              {author} - {publishedDate}
            </div>
          )}
          <ShareIcons postSlug={slug} />
        </div>

        {/* <Header title={title} description={overview} /> */}

        <div className="rounded-md border mb-10">
          {/* Image */}
          <ImageBox
            image={mainImage}
            alt={`Main image for ${title}`}
            classesWrapper="relative aspect-[16/9]"
          />
        </div>

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="text-neutral-800 lg:text-lg lg:leading-8 sm:text-md sm:leading-7"
            value={body}
          />
        )}
      </div>
    </div>
  )
}

export default BlogPage
