const withTM = require('next-transpile-modules')(['@whitepaper/ui'])

require('dotenv').config()

const nextJsConfig = {
  publicRuntimeConfig: {
    openbookGraphqlUrl: process.env.OPENBOOK_GRAPHQL_URL,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cookieDomain: process.env.COOKIE_DOMAIN
  }
}

module.exports = withTM(nextJsConfig)