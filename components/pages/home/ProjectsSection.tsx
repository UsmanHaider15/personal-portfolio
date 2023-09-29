import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import * as React from 'react'
import { ShowcaseProject } from 'types'
import { ProjectListItem } from './ProjectListItem'

interface ProjectsSectionProps {
  showcaseProjects: ShowcaseProject[]
}

const ProjectsSection = ({ showcaseProjects }: ProjectsSectionProps) => {
  return (
    <div>
      <div className="mb-12 px-4 text-center leading-7 text-zinc-500 ">
        <span
          className="mb-2 block font-sans text-xs font-semibold uppercase leading-5 text-gray-500"
          style={{ letterSpacing: 3 }}
        >
          Portfolio
        </span>
        <h2 className=" mx-0 mb-6 mt-0 font-serif text-4xl font-normal leading-normal text-black">
          Done Projects
        </h2>
      </div>

      <div className="mx-auto md:grid md:grid-cols-2 md:gap-4">
        {showcaseProjects.map((project, key) => {
          const href = resolveHref(project._type, project.slug)
          if (!href) {
            return null
          }
          return (
            <div className="md:col-span-1">
              <ProjectListItem project={project} href={href} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsSection
