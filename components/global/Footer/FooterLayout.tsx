import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { SettingsPayload } from 'types'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { RiTwitterXFill } from 'react-icons/ri'
import { CiLinkedin } from 'react-icons/ci'
import { LuGithub } from 'react-icons/lu'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])

  return (
    <div id="footer" className="block w-full md:p-32 text-sm">
      <div className="mx-auto px-4 lg:grid lg:grid-cols-2 text-center lg:text-left">
        {/* Let's Talk Section */}
        <div className="md:grid-span-1 mb-20 lg:mb-0">
          <h2 className="mt-0 mb-4 font-serif text-3xl font-light tracking-wider text-black">
            Let's Talk
          </h2>
          {/* <p className="mb-6 mt-0 font-sans font-normal">
            A small river named Duden flows by their place and supplies.
          </p> */}
          <p className="mb-6 mt-0 font-sans font-normal">
            <a
              href="#"
              className="cursor-pointer bg-transparent text-purple-400 hover:text-purple-400 focus:text-cyan-800"
            >
              usman.haider.developer@gmail.com
            </a>
          </p>
          <p className="m-0 font-sans font-normal flex gap-2 text-purple-400 justify-center lg:justify-start">
            <FiFacebook size={24} />
            <RiTwitterXFill size={24} />
            <CiLinkedin size={24} />
            <LuGithub size={24} />
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="md:grid-span-1">
          <h2 className="mt-0 mb-4 font-serif text-3xl font-light tracking-wider text-black">
            Newsletter
          </h2>
          {/* <p className="mb-6 mt-0 font-sans font-normal">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p> */}
          <div className="text-center">
            <div className="mb-8">
              <input
                type="text"
                className="mb-1 mt-0 block h-12 w-full cursor-text border border-solid border-neutral-200 bg-zinc-50 px-5 py-2 text-base font-normal text-neutral-600 focus:border-2 focus:border-solid focus:border-purple-300"
                placeholder="Enter Email address"
              />
              <input
                type="submit"
                value="Subscribe"
                className="mb-1 ml-0 mr-1 mt-0 inline-block w-full cursor-pointer select-none whitespace-nowrap border-2 border-solid border-purple-400 bg-purple-400 px-0 py-2 align-middle text-base font-normal uppercase text-white hover:border-purple-300 hover:bg-purple-300 hover:text-white focus:border-purple-300 focus:bg-purple-300 focus:text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="m-0 mb-4 text-center font-sans font-normal leading-7 text-zinc-500">
        © Copyright 2023 All rights reserved Usman Haider
      </p>
    </div>
  )
}
