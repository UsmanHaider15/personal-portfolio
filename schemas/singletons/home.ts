import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'name',
      description: 'This field is your full name.',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // add field for avatar
    defineField({
      name: 'avatar',
      description: 'This is your avatar.',
      title: 'Avatar',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagLine',
      description: 'This field is the your Tag Line.',
      title: 'Tag Line',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the About section.',
      title: 'About',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    // add field for contact me button which have a title and a url
    defineField({
      name: 'contactMeButton',
      description: 'This is the contact me button.',
      title: 'Contact me button',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          description: 'This field is the title of the button.',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'email',
          description: 'This field is the email of the button.',
          title: 'Email',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Here Are Some of My Skills',
      description: 'List of services you offer along with the sub-services.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Service',
          fields: [
            defineField({
              name: 'serviceName',
              title: 'Service Name',
              description: 'The name of the service, e.g., Graphic Design.',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subServices',
              title: 'Sub-Services',
              description: 'List of sub-services under this service.',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'string',
                }),
              ],
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
    defineField({
      name: 'blogPosts',
      title: 'Blog posts',
      description:
        'These are the blog that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'blog' }],
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      description:
        'These are the testimonials that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'testimonial' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
