import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { BlogPosts } from 'types'

interface BlogProps {
  blog: BlogPosts
}

export function BlogListItem(props: BlogProps) {
  const { blog } = props

  return (
    <div className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50`}>
      <div className="w-full">
        <ImageBox
          image={blog.mainImage}
          alt={`Cover image from ${blog.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div>
      <div className="flex">
        <BlogTextBox blog={blog} />
      </div>
    </div>
  )
}

function BlogTextBox({ blog }: { blog: BlogPosts }) {
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
