import type { GatsbyConfig } from "gatsby";

/**
* The currently active environment.
* This is used to set the corresponding Tag Manager environment config.
*/
const activeEnv =
 process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

// The Tag Manager Container ID.
const gtmContainerId = "GTM-W2RR2D4M"

/**
* Tag Manager Environment values to configure gatsby-plugin-google-tagmanager.
* null values will cause the default (live/production) snippet to load.
*/
const gtmEnv = {
 development: {
   gtmAuth: "gtm_auth=zpgQPt616uoy5-1SJ9PmKA",
   gtmPreview: "gtm_preview=env-6",
 },

 production: {
   gtmAuth: 'gtm_auth=EYhab9NKz2KAtGLyFfBqcQ',
   gtmPreview: 'gtm_preview=env-1',
 },
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Bonaparte`,
    siteUrl: `https://www.bonapartedigital.com`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.svg',
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtmContainerId,
        includeInDevelopment: false,
   
        // GTM environment details.
        gtmAuth: gtmEnv[activeEnv].gtmAuth,
        gtmPreview: gtmEnv[activeEnv].gtmPreview,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.bonapartedigital.com',
        sitemap: 'https://www.bonapartedigital.com/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
  ],
};

export default config;