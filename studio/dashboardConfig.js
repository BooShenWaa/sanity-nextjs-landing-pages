export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '636028039e2f0b20525fe6a1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fopk7jrh',
                  apiId: 'c76b259a-b86d-4c9e-9a10-a15b3a600fc9'
                },
                {
                  buildHookId: '636028036c10bc24713a0045',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q66u1q1c',
                  apiId: '9d6c2f34-b14c-4aed-8fa2-50204969f572'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BooShenWaa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q66u1q1c.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
