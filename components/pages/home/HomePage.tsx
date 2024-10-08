import type { HomePagePayload } from 'types'
import Introduction from './Introduction'
import ServicesSection from './Services'
// import Testimonial from './Testimonial'
import TestimonialCarousel from './TestimonialCarousel'
import ProjectsSection from './ProjectsSection'
import BlogSection from './BlogSection'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview = [],
    showcaseProjects = [],
    blogPosts = [],
    name = '',
    avatar = null,
    tagLine = '',
    socialLinks = [],
    services = [],
    testimonials = [],
  } = data ?? {}

  return (
    <div>
      <Introduction
        name={name}
        avatar={avatar}
        tagLine={tagLine}
        overview={overview}
        socialLinks={socialLinks}
      />
      <div className="py-20"></div>
      <ServicesSection services={services} />
      {/* Header */}
      <div className="py-20"></div>
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <ProjectsSection showcaseProjects={showcaseProjects} />
      )}

      <div className="py-20"></div>

      {blogPosts && blogPosts.length > 0 && (
        <BlogSection blogPosts={blogPosts} />
      )}

      <div className="py-20"></div>

      <div>
        <div className="px-4 text-center leading-7">
          <span
            className="mb-2 block text-xs font-semibold uppercase text-gray-600"
            style={{ letterSpacing: '3px' }}
          >
            Testimonies
          </span>
          <h2 className="relative mx-0 md:mb-4 mt-0 text-4xl font-normal leading-normal text-black">
            What The Clients Say
          </h2>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
      <div className="py-20"></div>
    </div>
  )
}

export default HomePage
