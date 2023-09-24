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
      <div className="mb-12 px-4 text-center leading-7 text-gray-700 ">
        <span
          className="mb-2 block font-sans text-xs font-semibold uppercase leading-5 text-stone-300"
          style={{ letterSpacing: 3 }}
        >
          Blog
        </span>
        <h2 className=" mx-0 mt-0 font-serif text-4xl font-normal leading-normal text-black">
          Read Our Case
        </h2>
      </div>
      <div className="mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
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
