import { CustomPortableText } from 'components/shared/CustomPortableText'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import type { ProjectPayload } from 'types'

export interface ProjectPageProps {
  data: ProjectPayload | null
}

export function ProjectPage({ data }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    tags,
    title,
  } = data ?? {}

  const startYear = new Date(duration?.start!).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  const imageUrl =
    coverImage &&
    urlForImage(coverImage)?.height(2000).width(3500).fit('crop').url()

  return (
    <div>
      <div className="mb-20 space-y-6">
        <div className="banner grid grid-cols-2 gap-4 ">
          <div className="col-span-2 md:col-span-1">
            {/* project title */}
            <h1
              className="m-0 mb-4 font-sans not-italic font-bold tracking-normal break-words text-neutral-800 lg:text-4xl sm:text-3xl sm:leading-9 sm:tracking-tight"
              style={{ lineHeight: '1.23', wordBreak: 'break-word' }}
            >
              {title}
            </h1>

            {/* Overview */}
            {overview && (
              <div>
                <CustomPortableText
                  paragraphClasses="m-0 mb-4 lg:text-lg sm:text-md font-serif text-gray-700"
                  value={overview}
                />
              </div>
            )}
            {/* project details info */}
            <ul className="mt-4 grid grid-cols-2 gap-4 text-black">
              <li className="">
                <div className="text-xs uppercase tracking-wider text-black/50">
                  Client
                </div>
                {/* Client */}
                {client && <div className="text-md md:text-lg">{client}</div>}
              </li>
              <li className="">
                <div className="text-xs uppercase tracking-wider text-black/50">
                  Timeline
                </div>
                <div className="mt-1 underline hover:no-underline">
                  {!!(startYear && endYear) && (
                    <div className="text-md md:text-lg">{`${startYear} -  ${endYear}`}</div>
                  )}
                </div>
              </li>
              <li className="">
                <div className="text-xs uppercase tracking-wider text-black/50">
                  Tags
                </div>
                {tags?.map((tag, key) => (
                  <div
                    key={key}
                    className="inline-block rounded-full bg-gray-200 px-3 text-sm capitalize text-black"
                  >
                    #{tag}
                  </div>
                ))}
              </li>
              <li className="">
                <div className="text-xs uppercase tracking-wider text-black/50">
                  website
                </div>
                <div className="mt-1 underline hover:no-underline">
                  {site && (
                    <Link
                      target="_blank"
                      className="text-md break-words md:text-lg"
                      href={site}
                    >
                      {site}
                    </Link>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            {imageUrl && (
              <Image
                alt={'alt'}
                width={3500}
                height={2000}
                src={imageUrl}
                className="rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Description */}
        {description && (
          <CustomPortableText
            paragraphClasses="font-serif text-neutral-800 lg:text-lg lg:leading-8 sm:text-md sm:leading-7"
            value={description}
          />
        )}
      </div>
    </div>
  )
}

export default ProjectPage
