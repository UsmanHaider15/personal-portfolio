import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const ShareIcons = ({ postSlug }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${postSlug}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postSlug}`
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${postSlug}`

  return (
    <div className="flex space-x-2 md:space-x-3 p-1">
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600"
      >
        <FaTwitter
          className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4"
          color="gray"
        />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 hover:text-blue-900"
      >
        <FaFacebookF
          className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4"
          color="gray"
        />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-800"
      >
        <FaLinkedinIn
          className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4"
          color="gray"
        />
      </a>
    </div>
  )
}

export default ShareIcons
