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
    <div>
      <div className="mb-20 space-y-6">
        {/* Header */}
        <h1
          className="m-0 mb-4 font-sans not-italic font-bold tracking-normal break-words text-neutral-800 lg:text-4xl sm:text-3xl sm:leading-9 sm:tracking-tight"
          style={{ lineHeight: '1.23', wordBreak: 'break-word' }}
        >
          8 Advanced JavaScript Interview Questions for Senior Roles
        </h1>

        <div>
          <CustomPortableText
            paragraphClasses="m-0 mb-4 lg:text-lg sm:text-md font-serif text-gray-700"
            value={overview}
          />
        </div>

        <div className="border-t border-b p-2 flex justify-between items-center mb-6">
          {!!publishedDate && author && (
            <div className="m-0">
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
            paragraphClasses="font-serif text-neutral-800 lg:text-lg lg:leading-8 sm:text-md sm:leading-7"
            value={body}
          />
        )}
      </div>
    </div>
  )
}

export default BlogPage
