var plugins = [{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[],"output":"/","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-google-tagmanager',
      plugin: require('/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr.js'),
      options: {"plugins":[],"id":"GTM-W2RR2D4M","includeInDevelopment":false,"defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}},"gtmAuth":"YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING","gtmPreview":"YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME","dataLayerName":"YOUR_DATA_LAYER_NAME","routeChangeEventName":"YOUR_ROUTE_CHANGE_EVENT_NAME","enableWebVitalsTracking":true,"selfHostedOrigin":"YOUR_SELF_HOSTED_ORIGIN","selfHostedPath":"YOUR_SELF_HOSTED_PATH"},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Bonaparte | Digital Strategist","short_name":"Bonaparte","start_url":"/","background_color":"#ffffff","display":"minimal-ui","icon":"src/images/Bonaparte_PFP.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"9663478629f9b29d75ecd4d87b5ec976"},
    },{
      name: 'default-site-plugin',
      plugin: require('/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'partytown',
      plugin: require('/Users/guidorossetti/Desktop/Work/Bonaparte/Web/Bonaparte_Website/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
