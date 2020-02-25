import gql from 'graphql-tag';

const ASSET_FRAGMENT = gql`
  fragment AssetFragment on Asset {
    id
    publicId
    version
    type
  }
`

const UPLOAD_ASSET = gql`
  mutation UPLOAD_ASSET_MUTATION($type: AssetType! $file: Upload!) {
    uploadAsset(type: $type file: $file) {
      ...AssetFragment
    }
  }

  ${ASSET_FRAGMENT}
`;

const GET_ASSETS = gql`
  query GET_ASSETS_QUERY($type: AssetType) {
    getAssets(type: $type) {
      ...AssetFragment
    }
  }

  ${ASSET_FRAGMENT}
`;

export { 
  GET_ASSETS,
  UPLOAD_ASSET
};
