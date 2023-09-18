'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Testimonial } from 'types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { PortableTextBlock } from '@portabletext/types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import './index.css'

interface TestimonialProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialProps) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide className="pb-6">
              {' '}
              <div>
                <div>
                  <CustomPortableText
                    value={testimonial.overview as PortableTextBlock[]}
                  />
                </div>
                <div>{testimonial.name}</div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
