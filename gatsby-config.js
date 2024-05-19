module.exports = {
  siteMetadata: {
    title: `Seafood Source`,
    description: `POC capstone project for climatebase fellowship. A platform for sustainable seafood sourcing.`,
    author: `@mcull`,
  },
  flags: {
    //THE_FLAG: false
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fish-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
        safelist: [
          'flex',
          'w-full',
          'items-center',
          'justify-between',
          'p-5',
          'text-left',
          'font-medium',
          'text-gray-500',
          'first:rounded-t-lg',
          'last:rounded-b-lg',
          'dark:text-gray-400',
          'hover:bg-gray-100',
          'focus:ring-4',
          'focus:ring-gray-200',
          'dark:hover:bg-gray-800',
          'dark:focus:ring-gray-800',
          'text-sm',
          'divide-y',
          'divide-gray-200',
          'border-gray-200',
          'dark:divide-gray-700',
          'dark:border-gray-700',
          'rounded-lg',
          'border',
          'mt-6',
          'p-5',
          'first:rounded-t-lg',
          'last:rounded-b-lg',
          'dark:bg-gray-900',
          'flex',
          'w-full',
          'items-center',
          'justify-between',
          'p-5',
          'text-left',
          'font-medium',
          'first:rounded-t-lg',
          'last:rounded-b-lg',
          'hover:bg-gray-100',
          'focus:ring-4',
          'focus:ring-gray-200',
          'dark:hover:bg-gray-800',
          'dark:focus:ring-gray-800',
          'bg-gray-100',
          'text-gray-900',
          'dark:bg-gray-800',
          'dark:text-white',
          'text-sm',
          'p-5',
          'first:rounded-t-lg',
          'last:rounded-b-lg',
          'dark:bg-gray-900'
        ]
      },
    }
  ],
}
