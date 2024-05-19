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
          'bg-gray-100',
          'border',
          'border-gray-200',
          'dark:bg-gray-800',
          'dark:bg-gray-900',
          'dark:border-gray-700',
          'dark:divide-gray-700',
          'dark:focus:ring-gray-800',
          'dark:hover:bg-gray-800',
          'dark:text-gray-400',
          'dark:text-white',
          'divide-gray-200',
          'divide-y',
          'first:rounded-t-lg',
          'flex',
          'focus:ring-4',
          'focus:ring-gray-200',
          'font-medium',
          'h2',
          'hover:bg-gray-100',
          'items-center',
          'justify-between',
          'last:rounded-b-lg',
          'mt-6',
          'p-5',
          'rounded-lg',
          'text-gray-500',
          'text-gray-900',
          'text-left',
          'text-sm',
          'text-xl',
          'w-full'
        ]
      },
    }
  ],
}
