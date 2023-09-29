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
            <h1 className="mb-4 text-4xl leading-tight md:text-5xl">{title}</h1>

            {/* Overview */}
            {description && (
              <div className="mt-4 font-serif text-xl text-gray-600 md:text-2xl">
                <CustomPortableText value={description} />
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
            paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
            value={description}
          />
        )}
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}

export default ProjectPage
