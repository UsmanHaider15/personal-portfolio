import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPosts } from 'types'

interface BlogProps {
  blog: BlogPosts
  href: string
}

export function BlogListItem(props: BlogProps) {
  const { blog, href } = props

  const imageUrl =
    blog.mainImage && urlForImage(blog.mainImage)?.fit('crop').url()

  return (
    <div>
      <div className="relative" style={{ width: 300, height: 200 }}>
        {imageUrl && <Image alt={blog.title} src={imageUrl} fill={true} />}
      </div>
      <div className="flex">
        <BlogTextBox blog={blog} href={href} />
      </div>
    </div>
  )
}

function BlogTextBox({ blog, href }: BlogProps) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-lg font-extrabold tracking-tight md:text-xl text-left">
          {blog.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-700 text-sm text-left">
          <CustomPortableText value={blog.overview as PortableTextBlock[]} />
        </div>
      </div>
      <div>
        <p className="mx-0 mt-0 font-sans font-normal leading-7 text-right text-zinc-500">
          <Link
            href={href}
            className="w-10 h-px text-xs leading-5 text-black uppercase cursor-pointer hover:text-purple-400 focus:text-cyan-800"
          >
            View details
          </Link>
        </p>
      </div>
      {/* Tags */}
      <div className="mt-4 flex flex-row gap-x-2">
        {/* {blog.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))} */}
      </div>
    </div>
  )
}
