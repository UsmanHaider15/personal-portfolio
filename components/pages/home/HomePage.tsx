import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { BlogListItem } from './BlogListItem'
import Introduction from './Introduction'
import ServicesSection from './Services'
import Testimonial from './Testimonial'
import TestimonialCarousel from './TestimonialCarousel'

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
      {/* {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem]">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProjectListItem project={project} />
              </Link>
            )
          })}
        </div>
      )}
      {blogPosts && blogPosts.length > 0 && (
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
      )} */}

      {/* <Testimonial testimonials={testimonials} /> */}
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  )
}

export default HomePage
