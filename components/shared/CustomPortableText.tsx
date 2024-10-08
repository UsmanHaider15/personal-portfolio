import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import ImageBox from 'components/shared/ImageBox'
import { TimelineSection } from 'components/shared/TimelineSection'
import { Image } from 'sanity'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
      h1: ({ children }) => {
        return (
          <h1 className="text-3xl sm:text-4xl md:text-5xl py-2 sm:py-3 md:py-4">
            {children}
          </h1>
        )
      },
      h2: ({ children }) => {
        return (
          <h2 className="text-2xl sm:text-3xl md:text-4xl py-2 sm:py-3 md:py-4">
            {children}
          </h2>
        )
      },
      h3: ({ children }) => {
        return (
          <h3 className="text-xl sm:text-2xl md:text-3xl py-1 sm:py-2 md:py-3">
            {children}
          </h3>
        )
      },
      h4: ({ children }) => {
        return (
          <h4 className="text-lg sm:text-xl md:text-2xl py-1 sm:py-2 md:py-3">
            {children}
          </h4>
        )
      },
      h5: ({ children }) => {
        return (
          <h5 className="text-base sm:text-lg md:text-xl py-1 sm:py-2">
            {children}
          </h5>
        )
      },
      h6: ({ children }) => {
        return (
          <h6 className="text-sm sm:text-base md:text-lg py-1">{children}</h6>
        )
      },
    },

    list: {
      bullet: ({ children }) => {
        return (
          <ul className="list-disc list-inside text-base sm:text-lg">
            {children}
          </ul>
        )
      },
      number: ({ children }) => {
        return (
          <ol className="list-decimal list-inside text-base sm:text-lg">
            {children}
          </ol>
        )
      },
    },

    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="text-sm text-gray-600">{value.caption}</div>
            )}
          </div>
        )
      },
      code: ({ value }) => {
        return (
          <SyntaxHighlighter language={value.language} style={docco}>
            {value.code}
          </SyntaxHighlighter>
        )
      },
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
