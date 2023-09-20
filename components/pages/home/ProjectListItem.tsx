import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { ShowcaseProject } from 'types'

interface ProjectProps {
  project: ShowcaseProject
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props

  return (
    <div>
      <div>
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div>
      <div>
        <ProjectTextBox project={project} />
      </div>
    </div>
  )
}

function ProjectTextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div>
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {project.title}
        </div>
        {/* Overview  */}
        <p className="mx-0 mt-0 mb-6 font-sans font-normal leading-7 text-gray-700">
          <CustomPortableText value={project.overview as PortableTextBlock[]} />
        </p>
      </div>
      <div>
        <p className="mx-0 mt-0 mb-6 font-sans font-normal leading-7 text-right text-zinc-500">
          <a
            href="#"
            className="w-10 h-px text-xs leading-5 text-black uppercase cursor-pointer hover:text-purple-400 focus:text-cyan-800"
          >
            View details
          </a>
        </p>
      </div>
      {/* Tags */}
      {/* <div className="mt-4 flex flex-row gap-x-2">
        {project.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </div> */}
    </div>
  )
}
