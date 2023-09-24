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
    contactMeButton = null,
    services = [],
    testimonials = [],
  } = data ?? {}

  return (
    <div className="space-y-20">
      <Introduction
        name={name}
        avatar={avatar}
        tagLine={tagLine}
        overview={overview}
        socialLinks={socialLinks}
        contactMeButton={contactMeButton}
      />
      <ServicesSection services={services} />
      {/* Header */}
      {/* {title && <Header centered title={title} description={overview} />} */}
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <ProjectsSection showcaseProjects={showcaseProjects} />
      )}
      {blogPosts && blogPosts.length > 0 && (
        <BlogSection blogPosts={blogPosts} />
      )}
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  )
}

export default HomePage
