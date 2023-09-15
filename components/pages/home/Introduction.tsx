import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import { ContactMeButton, SocialLinks } from 'types'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'

interface IntroductionProps {
  name: string
  avatar: any
  tagLine: string
  overview: PortableTextBlock[]
  socialLinks: SocialLinks[]
  contactMeButton: ContactMeButton | null
}

const Introduction = ({
  name,
  avatar,
  tagLine,
  overview,
  socialLinks,
  contactMeButton,
}: IntroductionProps) => {
  const imageUrl =
    avatar && urlForImage(avatar)?.height(972).width(800).fit('crop').url()

  return (
    <div className="container mx-auto">
      <div>
        <Image src={imageUrl} alt={name} width={800} height={972} />
      </div>

      <div className="py-10 block mb-0 font-serif text-5xl font-normal text-black">
        {name}
      </div>

      <div className="relative pl-24 leading-7 text-zinc-500">
        <div className="absolute" style={{ top: '7px', left: '30px' }}>
          <h2
            className="absolute mx-0 mt-0 mb-4 w-10 h-px font-sans text-sm font-medium uppercase bg-black text-zinc-800"
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

        <div className="mx-0 mt-0 mb-4 font-sans font-normal text-zinc-500">
          <CustomPortableText value={overview as PortableTextBlock[]} />
        </div>

        <div className="flex item-center mx-0 mt-0 mb-4 font-sans font-normal leading-7 text-zinc-500">
          {socialLinks.map((link) => {
            let Icon
            if (link.key === 'facebook') {
              Icon = AiFillFacebook
            } else if (link.key === 'twitter') {
              Icon = AiFillTwitterSquare
            } else if (link.key === 'linkedin') {
              Icon = AiFillLinkedin
            } else if (link.key === 'github') {
              Icon = AiFillGithub
            } else {
              return null
            }
            return (
              <a
                href={link.url} // assuming link.url is the URL you want to navigate to
                className="text-purple-400 bg-transparent cursor-pointer hover:text-purple-400 focus:text-cyan-800"
                style={{
                  textDecoration: 'none',
                  transition: 'all 0.5s ease 0s',
                }}
              >
                <Icon
                  size={24}
                  className="text-2xl not-italic leading-none normal-case"
                  style={{
                    speak: 'none',
                    fontWeight: 'normal',
                    fontVariant: 'normal',
                    fontFamily: 'icomoon',
                  }}
                />
              </a>
            )
          })}
        </div>

        <p className="mx-0 mt-0 mb-4 font-sans font-normal text-zinc-500">
          <a
            className="inline-block py-2 px-5 border rounded-none text-base font-normal text-center uppercase tracking-wider cursor-pointer text-neutral-600 border-zinc-300 hover:border-purple-300 hover:bg-purple-400 hover:text-white focus:border-purple-300 focus:bg-purple-400 focus:text-white transition-all duration-300 ease-in-out"
            href={`mailto:${contactMeButton?.email}`}
          >
            {contactMeButton?.title}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Introduction
