import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link'
import type { BlogPosts } from 'types'

interface BlogProps {
  blog: BlogPosts
  href: string
}

export function BlogListItem(props: BlogProps) {
  const { blog, href } = props

  return (
    <div className="">
      <div className="" style={{ width: 400 }}>
        <ImageBox
          image={blog.mainImage}
          alt={`Cover image from ${blog.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
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
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {blog.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-500">
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
