'use client'
import { resolveHref } from 'lib/sanity.links'
import * as React from 'react'
import { BlogPosts } from 'types'
import { BlogListItem } from './BlogListItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import './blog.css'

interface BlogSectionProps {
  blogPosts: BlogPosts[]
}

const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  return (
    <div>
      {' '}
      <div className="mb-12 text-center">
        <span
          className="mb-2 block text-xs font-semibold uppercase text-gray-600"
          style={{ letterSpacing: 3 }}
        >
          Blog
        </span>
        <h2 className="mx-0 mt-0 text-4xl font-normal leading-normal text-black">
          My Thoughts
        </h2>
      </div>
      <div className="mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{ 480: { slidesPerView: 3, spaceBetween: 15 } }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {blogPosts.map((blog, key) => {
            const href = resolveHref(blog._type, blog.slug)
            if (!href) {
              return null
            }
            return (
              <SwiperSlide>
                {' '}
                <BlogListItem blog={blog} href={href} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default BlogSection
