import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import Link from 'next/link'
import type { ShowcaseProject } from 'types'

interface ProjectProps {
  project: ShowcaseProject
  href: string
}

export function ProjectListItem(props: ProjectProps) {
  const { project, href } = props

  return (
    <div>
      <Link href={href} passHref>
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
      </Link>
    </div>
  )
}

function ProjectTextBox({ project }) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        <div className="mb-2 text-lg font-extrabold tracking-tight md:text-xl text-left">
          {project.title}
        </div>
        <div className="font-serif text-left text-xs">
          <CustomPortableText
            paragraphClasses={`text-sm text-gray-800`}
            value={project.overview as PortableTextBlock[]}
          />
        </div>
      </div>
    </div>
  )
}
