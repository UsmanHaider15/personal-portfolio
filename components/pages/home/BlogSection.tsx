import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import * as React from 'react'
import { BlogPosts } from 'types'
import { BlogListItem } from './BlogListItem'

interface BlogSectionProps {
  blogPosts: BlogPosts[]
}

const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  return (
    <div>
      {' '}
      <div
        className="relative mb-12 px-4 text-center leading-7 text-gray-700 lg:float-left lg:w-full"
        style={{
          animationDuration: '1s',
          animationFillMode: 'both',
          animationName: 'fadeInUp',
          minHeight: 1,
        }}
      >
        <span
          className="mb-2 block font-sans text-xs font-semibold uppercase leading-5 text-stone-300"
          style={{ letterSpacing: 3 }}
        >
          Blog
        </span>
        <h2 className="relative mx-0 mb-6 mt-0 font-serif text-4xl font-normal leading-normal text-black">
          Read Our Case
        </h2>
      </div>
      <div className="mx-auto max-w-[100rem] rounded-md border">
        {blogPosts.map((blog, key) => {
          const href = resolveHref(blog._type, blog.slug)
          if (!href) {
            return null
          }
          return (
            <Link key={key} href={href}>
              <BlogListItem blog={blog} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default BlogSection
