require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    author: process.env.SITE_COMPANY,
    description: process.env.SITE_TITLE,
    locale: {
      language: `it`,
      culture: `IT`,
    },
    siteUrl: process.env.SITE_URL,
    organization: {
      company: process.env.SITE_COMPANY,
      address: `Via Paolo Pavirani, 38`,
      url: process.env.SITE_URL,
      logo: `https://annazattoni.com/logo.jpg`,
      zipCode: `48121`,
      city: `Ravenna`,
      province: `RA`,
      country: `Italia`,
      email: `info@annazattoni.com`,
      taxId: ``,
      vatId: ``,
      registryId: ``,
    },
    theme: {
      background: process.env.COLOR_BACKGROUND,
      primary: process.env.COLOR_PRIMARY,
      secondary: process.env.COLOR_SECONDARY,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/page.jsx")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.SITE_TITLE,
        short_name: process.env.SITE_NAME,
        start_url: `/`,
        background_color: process.env.COLOR_BACKGROUND,
        theme_color: process.env.COLOR_PRIMARY,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `@pittica/gatsby-plugin-seo`,
      options: {
        image: `/share.jpg`,
        socials: {
          facebook: {
            app: ``
          }
        }
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-iubenda-cookie-footer`,
      options: {
        iubendaOptions: {
          "consentOnContinuedBrowsing": false,
          "whitelabel": false,
          "lang": "it",
          "siteId": 000000,
          "cookiePolicyId": 000000,
          "cookiePolicyUrl": "https://annazattoni.com/cookies",
          "cookiePolicyInOtherWindow": true,
          "banner": {
            "acceptButtonDisplay": true,
            "customizeButtonDisplay": false,
            "position": "float-bottom-center",
            "brandBackgroundColor": process.env.COLOR_BACKGROUND,
            "brandTextColor": process.env.COLOR_TEXT,
            "acceptButtonColor": process.env.COLOR_SECONDARY,
            "acceptButtonCaptionColor": process.env.COLOR_TEXT,
            "customizeButtonColor": process.env.COLOR_BACKGROUND,
            "customizeButtonCaptionColor": process.env.COLOR_SECONDARY,
            "rejectButtonColor": process.env.COLOR_PRIMARY,
            "rejectButtonCaptionColor": process.env.COLOR_TEXT,
            "textColor": process.env.COLOR_TEXT,
            "backgroundColor": process.env.COLOR_BACKGROUND,
            "logo": "/logo-banner.png",
            "closeButtonDisplay": false
          }
        }
      }
    }
  ],
}
