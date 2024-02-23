module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"GTM-W2RR2D4M","includeInDevelopment":false,"defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}},"gtmAuth":"YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING","gtmPreview":"YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME","dataLayerName":"YOUR_DATA_LAYER_NAME","routeChangeEventName":"YOUR_ROUTE_CHANGE_EVENT_NAME","enableWebVitalsTracking":true,"selfHostedOrigin":"YOUR_SELF_HOSTED_ORIGIN","selfHostedPath":"YOUR_SELF_HOSTED_PATH"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":630,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withWebp":false,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Starter Blog","short_name":"Gatsby","start_url":"/","background_color":"#ffffff","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
