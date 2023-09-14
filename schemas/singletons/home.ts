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
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
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
      name: 'name',
      description: 'This field is your full name.',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      description: 'This field is the your Job Title.',
      title: 'Job title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // add fields for social links
    defineField({
      name: 'socialLinks',
      description: 'These are the links to your social media profiles.',
      title: 'Social links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              description: 'This field is the title of the social link.',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              description: 'This field is the url of the social link.',
              title: 'Url',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
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
    // add field for work experience, enddata would be current for current job
    defineField({
      name: 'workExperience',
      description: 'This is your work experience.',
      title: 'Work experience',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'company',
              description: 'This field is the company name.',
              title: 'Company',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'jobTitle',
              description: 'This field is the job title.',
              title: 'Job title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'startDate',
              description: 'This field is the start date.',
              title: 'Start date',
              type: 'date',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'endDate',
              description:
                'This field is the end date. Leave blank if current job.',
              title: 'End date',
              type: 'date',
            }),
            defineField({
              name: 'description',
              description: 'This field is the job description.',
              title: 'Description',
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
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    // add field for education
    defineField({
      name: 'education',
      description: 'This is your education.',
      title: 'Education',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'school',
              description: 'This field is the school name.',
              title: 'School',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'degree',
              description: 'This field is the degree.',
              title: 'Degree',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'startDate',
              description: 'This field is the start date.',
              title: 'Start date',
              type: 'date',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'endDate',
              description:
                'This field is the end date. Leave blank if current education.',
              title: 'End date',
              type: 'date',
            }),
            defineField({
              name: 'description',
              description: 'This field is the education description.',
              title: 'Description',
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
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    // add field for services
    defineField({
      name: 'services',
      description: 'These are the services you offer.',
      title: 'Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              description: 'This field is the title of the service.',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              description: 'This field is the service description.',
              title: 'Description',
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
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    // add field skills, skills fiels has a title and a percentage
    defineField({
      name: 'skills',
      description: 'These are your skills.',
      title: 'Skills',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              description: 'This field is the title of the skill.',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'percentage',
              description: 'This field is the skill percentage.',
              title: 'Percentage',
              type: 'number',
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
