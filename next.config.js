require("dotenv").config();

const nextJsConfig = {
  publicRuntimeConfig: {
    openbookGraphqlUrl: process.env.OPENBOOK_GRAPHQL_URL,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME
  },
}

module.exports = nextJsConfig