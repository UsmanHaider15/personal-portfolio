import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { SettingsPayload } from 'types'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { RiTwitterXFill } from 'react-icons/ri'
import { CiLinkedin } from 'react-icons/ci'
import { LuGithub } from 'react-icons/lu'
import ContactForm from './ContactForm'
import Link from 'next/link'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])

  const ICON_MAP = {
    twitter: <RiTwitterXFill size={24} />,
    linkedin: <CiLinkedin size={24} />,
    github: <LuGithub size={24} />,
  }

  return (
    <div id="footer" className="block w-full max-w-xl mx-auto text-sm">
      <div>
        <ContactForm />
      </div>
      <div className="text-center md:flex md:justify-between py-4">
        <div>© Copyright 2023 All rights reserved Usman Haider</div>
        <div className="flex justify-center">
          {data.socialMediaLinks.map((link) => {
            const IconComponent = ICON_MAP[link.name]
            if (!IconComponent) return null // Skip if the platform is not in the map
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                {IconComponent}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
