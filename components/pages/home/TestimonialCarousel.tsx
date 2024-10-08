'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Testimonial } from 'types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './index.css'
import { urlForImage } from 'lib/sanity.image'

interface TestimonialProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1">
      {testimonials &&
        testimonials.map((testimonial) => {
          const imageUrl =
            testimonial.image &&
            urlForImage(testimonial.image)
              ?.height(1000)
              .width(1000)
              .fit('crop')
              .url()
          return (
            <div className="col-span-1 text-black">
              <div className="max-w-screen-xl px-2 pt-6 md:px-4 md:pt-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <div className="text-lg">
                      <CustomPortableText
                        value={testimonial.content as PortableTextBlock[]}
                      />
                    </div>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-2 md:mt-4 space-x-3">
                    <Image
                      className="w-6 h-6 rounded-full"
                      src={imageUrl}
                      alt="profile picture"
                      width={24}
                      height={24}
                      layout="fixed"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium">
                        {testimonial.author}
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          )
        })}
    </div>
  )
}
