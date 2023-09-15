import { Testimonial } from 'types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { PortableTextBlock } from '@portabletext/types'

interface TestimonialProps {
  testimonials: Testimonial[]
}

const Testimonial = ({ testimonials }: TestimonialProps) => {
  return (
    <div>
      {testimonials.map((testimonial) => {
        return (
          <div>
            <div>{testimonial.name}</div>
            <div>
              <CustomPortableText
                value={testimonial.overview as PortableTextBlock[]}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Testimonial
