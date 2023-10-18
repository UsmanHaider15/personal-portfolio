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
    estimatedReadingTime,
  } = data ?? {}

  const publishedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : 'Unpublished'

  return (
    <div className="md:mx-auto md:w-7/12">
      <div className="mb-20">
        <h1 className="font-medium text-2xl md:text-4xl mb-2">{title}</h1>

        <div className="flex justify-between items-center mb-4">
          {!!publishedDate && author && (
            <div className="text-sm md:text-md">
              {formatDateToHumanReadable(publishedDate)} -{' '}
              {estimatedReadingTime} min read
            </div>
          )}
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

function formatDateToHumanReadable(dateStr: string): string {
  // Parse the date string into a Date object.
  const date = new Date(dateStr)

  // Check if the date is valid.
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format')
  }

  // Options for the date string format, without the 'weekday'.
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', // "2024", etc.
    month: 'long', // "December", "January", etc.
    day: 'numeric', // "1", "2", etc.
  }

  // Locale can be any valid BCP 47 language tag, here we're using US English.
  const locale = 'en-US'

  // Use the Intl.DateTimeFormat object to format the date.
  return new Intl.DateTimeFormat(locale, options).format(date)
}
