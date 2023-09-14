import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link'
import type { BlogPayload } from 'types'

export interface BlogPageProps {
  data: BlogPayload | null
}

export function BlogPage({ data }: BlogPageProps) {
  const { title, author, publishedAt, mainImage, categories, body, overview } =
    data ?? {}

  const publishedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : 'Unpublished'

  return (
    <div>
      <div className="mb-20 space-y-6">
        {/* Header */}
        <Header title={title} description={overview} />

        <div className="rounded-md border">
          {/* Image */}
          <ImageBox
            image={mainImage}
            alt={`Main image for ${title}`}
            classesWrapper="relative aspect-[16/9]"
          />

          <div className="divide-inherit grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {/* Author */}
            {author && (
              <div className="p-3 lg:p-4">
                <div className="text-xs md:text-sm">Author</div>
                <div className="text-md md:text-lg">{author}</div>
              </div>
            )}

            {/* Published Date */}
            {!!publishedDate && (
              <div className="p-3 lg:p-4">
                <div className="text-xs md:text-sm">Published</div>
                <div className="text-md md:text-lg">{publishedDate}</div>
              </div>
            )}

            {/* Categories */}
            <div className="p-3 lg:p-4">
              <div className="text-xs md:text-sm">Categories</div>
              <div className="text-md flex flex-row flex-wrap md:text-lg">
                {categories?.map((category, key) => (
                  <div key={key} className="mr-1 break-words ">
                    #{category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
            value={body}
          />
        )}
      </div>
    </div>
  )
}

export default BlogPage
