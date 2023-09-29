import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { SettingsPayload } from 'types'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])

  return (
    <div
      id="footer"
      className="block w-full md:p-32 text-sm leading-5 text-zinc-800 "
    >
      <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Let's Talk Section */}
        <div className="mb-20">
          <h2 className="mt-0 mb-4 font-serif text-3xl font-light tracking-wider text-black">
            Let's Talk
          </h2>
          <p className="mb-6 mt-0 font-sans font-normal">
            A small river named Duden flows by their place and supplies.
          </p>
          <p className="mb-6 mt-0 font-sans font-normal">
            <a
              href="#"
              className="cursor-pointer bg-transparent text-purple-400 hover:text-purple-400 focus:text-cyan-800"
            >
              noah@info.com
            </a>
          </p>
          <p className="m-0 font-sans font-normal flex gap-2">
            <a
              href="#"
              className="cursor-pointer bg-transparent text-purple-400 hover:text-purple-400 focus:text-cyan-800"
            >
              <FaHeart size={24} />
            </a>
            {/* Add more icons similarly */}
          </p>
        </div>

        {/* Latest Blog Section */}
        <div className="mb-20">
          <div
            className="px-4 mb-20 leading-7 text-zinc-500"
            style={{ minHeight: 1 }}
          >
            <h2
              className="mx-0 mt-0 mb-4 font-serif text-3xl font-light tracking-wider text-black"
              style={{ lineHeight: '1.1' }}
            >
              Latest Blog
            </h2>
            <div className="mb-10 text-zinc-500">
              <a
                href="#"
                className="text-purple-400 bg-transparent cursor-pointer hover:text-purple-400 focus:text-cyan-800"
                style={{
                  backgroundImage: 'url("images/img-1.jpg")',
                  textDecoration: 'none',
                  transition: 'all 0.5s ease 0s',
                }}
              />
              <div className="">
                <span
                  className="block mb-2 font-sans text-xs font-normal leading-5 text-black uppercase"
                  style={{ letterSpacing: 2 }}
                >
                  February 15, 2018
                </span>
                <h3
                  className="mx-0 mt-0 mb-2 font-serif text-xl font-medium text-zinc-800"
                  style={{ lineHeight: '1.4' }}
                >
                  <a
                    href="#"
                    className="bg-transparent cursor-pointer text-neutral-600 hover:text-purple-400 focus:text-cyan-800"
                    style={{
                      textDecoration: 'none',
                      transition: 'all 0.5s ease 0s',
                    }}
                  >
                    Art Gallery in Japan
                  </a>
                </h3>
              </div>
            </div>
            <div className="mb-10 text-zinc-500">
              <a
                href="#"
                className="text-purple-400 bg-transparent cursor-pointer hover:text-purple-400 focus:text-cyan-800"
                style={{
                  backgroundImage: 'url("images/img-2.jpg")',
                  textDecoration: 'none',
                  transition: 'all 0.5s ease 0s',
                }}
              />
              <div className="">
                <span
                  className="block mb-2 font-sans text-xs font-normal leading-5 text-black uppercase"
                  style={{ letterSpacing: 2 }}
                >
                  February 9, 2018
                </span>
                <h3
                  className="mx-0 mt-0 mb-2 font-serif text-xl font-medium text-zinc-800"
                  style={{ lineHeight: '1.4' }}
                >
                  <a
                    href="#"
                    className="bg-transparent cursor-pointer text-neutral-600 hover:text-purple-400 focus:text-cyan-800"
                    style={{
                      textDecoration: 'none',
                      transition: 'all 0.5s ease 0s',
                    }}
                  >
                    A Japanese Constellation
                  </a>
                </h3>
              </div>
            </div>
            <div className="mb-10 text-zinc-500">
              <a
                href="#"
                className="text-purple-400 bg-transparent cursor-pointer hover:text-purple-400 focus:text-cyan-800"
                style={{
                  backgroundImage: 'url("images/img-3.jpg")',
                  textDecoration: 'none',
                  transition: 'all 0.5s ease 0s',
                }}
              />
              <div className="">
                <span
                  className="block mb-2 font-sans text-xs font-normal leading-5 text-black uppercase"
                  style={{ letterSpacing: 2 }}
                >
                  February 15, 2018
                </span>
                <h3
                  className="mx-0 mt-0 mb-2 font-serif text-xl font-medium text-zinc-800"
                  style={{ lineHeight: '1.4' }}
                >
                  <a
                    href="#"
                    className="bg-transparent cursor-pointer text-neutral-600 hover:text-purple-400 focus:text-cyan-800"
                    style={{
                      textDecoration: 'none',
                      transition: 'all 0.5s ease 0s',
                    }}
                  >
                    Road Trip
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="mt-0 mb-4 font-serif text-3xl font-light tracking-wider text-black">
            Newsletter
          </h2>
          <p className="mb-6 mt-0 font-sans font-normal">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
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
      <p className="m-0 text-center font-sans font-normal leading-7 text-zinc-500">
        © Copyright 2023 All rights reserved Usman Haider
      </p>
    </div>
  )
  // return (
  //   <footer className="bottom-0 w-full bg-white py-12 text-center md:py-20">
  //     {footer && (
  //       <CustomPortableText
  //         paragraphClasses="text-md md:text-xl"
  //         value={footer}
  //       />
  //     )}

  //   </footer>
  // )
}
