import gql from 'graphql-tag';

const ORGANIZATION_FRAGMENT = gql`
  fragment OrganizationFragment on Organization {
    id
    name
    slug
    about
    website
    picture {
      id
      version
      publicId
    }
  }
`

const MY_CURRENT_ORGANIZATION = gql`
  query MY_CURRENT_ORGANIZATION_QUERY {
    whatIsMyCurrentOrganization {
      ...OrganizationFragment
    }
  }

  ${ORGANIZATION_FRAGMENT}
`;

const EDIT_ORGANIZATION = gql`
  mutation EDIT_ORGANIZATION_MUTATION($data: OrganizationEditInput!) {
    editOrganization(data: $data) {
      ...OrganizationFragment
    }
  }

  ${ORGANIZATION_FRAGMENT}
`;

export { 
  MY_CURRENT_ORGANIZATION,
  EDIT_ORGANIZATION
};
