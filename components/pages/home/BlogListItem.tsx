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

  if (!blog) return null

  const imageUrl =
    blog.mainImage && urlForImage(blog.mainImage)?.fit('crop').url()

  return (
    <Link href={href} passHref>
      <div className="cursor-pointer p-2 hover:rounded-md">
        <div className="relative" style={{ height: 200 }}>
          {imageUrl && <Image alt={blog.title} src={imageUrl} fill={true} />}
        </div>
        <div className="flex">
          <BlogTextBox blog={blog} />
        </div>
      </div>
    </Link>
  )
}

function BlogTextBox({ blog }) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        <div className="mb-2 text-lg font-extrabold tracking-tight md:text-xl text-left">
          {blog.title}
        </div>
        <div className="font-serif text-left">
          <CustomPortableText
            paragraphClasses={`text-sm text-gray-800`}
            value={blog.overview as PortableTextBlock[]}
          />
        </div>
      </div>
    </div>
  )
}
