import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface IntroductionProps {
  name: string
  avatar: any
  tagLine: string
  overview: PortableTextBlock[]
}

const Introduction = ({
  name,
  avatar,
  tagLine,
  overview,
}: IntroductionProps) => {
  const imageUrl =
    avatar && urlForImage(avatar)?.height(972).width(800).fit('crop').url()

  return (
    <div className="md:grid md:grid-cols-3 md:gap-4">
      <div className="col-span-1">
        <Image src={imageUrl} alt={name} width={800} height={972} />
      </div>
      <div className="md:col-span-2 md:p-10">
        {' '}
        <div className="pt-10 pb-10 block text-5xl font-normal text-black">
          {name}
        </div>
        <div className="relative pl-12 leading-7 text-zinc-500">
          <div className="absolute" style={{ top: '7px', left: '30px' }}>
            <h2
              className="absolute mx-0 mt-0 mb-4 w-10 h-px text-sm font-medium uppercase bg-black text-zinc-800"
              style={{
                lineHeight: 1.3,
                letterSpacing: '16px',
                transform: 'rotate(90deg)',
                transformOrigin: 'left top 0px',
                top: '8px',
                right: '-40px',
                content: '""',
              }}
            >
              About
            </h2>
          </div>

          <div className="mx-0 mt-0 mb-4 font-normal text-zinc-500">
            <CustomPortableText value={overview as PortableTextBlock[]} />
          </div>

          <p className="mx-0 mt-0 mb-4 font-normal text-zinc-500">
            <Link
              className="inline-block py-2 px-5 border rounded-none text-base font-normal text-center uppercase tracking-wider cursor-pointer text-neutral-600 border-zinc-300 hover:border-purple-300 hover:bg-purple-400 hover:text-white focus:border-purple-300 focus:bg-purple-400 focus:text-white transition-all duration-300 ease-in-out"
              href="#contact_section"
            >
              Message Me
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
