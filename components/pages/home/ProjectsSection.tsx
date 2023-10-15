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
          className="mb-2 block text-xs font-semibold uppercase text-gray-600"
          style={{ letterSpacing: 3 }}
        >
          Portfolio
        </span>
        <h2 className="mx-0 mb-6 mt-0 text-4xl font-normal leading-normal text-black">
          Projects Delivered
        </h2>
      </div>

      <div className="mx-auto md:grid md:grid-cols-2 md:gap-4">
        {showcaseProjects.map((project, key) => {
          const href = resolveHref(project._type, project.slug)
          if (!href) {
            return null
          }
          return (
            <div className="md:col-span-1 p-2 md:p-4 mb-4 shadow-md hover:shadow-xl cursor-pointer">
              <ProjectListItem project={project} href={href} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsSection
