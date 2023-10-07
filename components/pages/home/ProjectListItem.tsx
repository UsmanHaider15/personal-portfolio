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
    <>
      <div>
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div>
      <div>
        <ProjectTextBox project={project} href={href} />
      </div>
    </>
  )
}

function ProjectTextBox({ project, href }: ProjectProps) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        <div className="mb-2 text-lg font-extrabold tracking-tight md:text-xl text-left">
          {project.title}
        </div>
        <div className="font-serif text-gray-700 text-sm text-left">
          <CustomPortableText value={project.overview as PortableTextBlock[]} />
        </div>
      </div>

      <div>
        <p className="mx-0 mt-0 font-sans font-normal leading-7 text-right text-zinc-500">
          <Link
            href={href}
            className="w-10 h-px text-xs leading-5 text-black uppercase cursor-pointer hover:text-purple-400 focus:text-cyan-800 underline"
          >
            View details
          </Link>
        </p>
      </div>
    </div>
  )
}
