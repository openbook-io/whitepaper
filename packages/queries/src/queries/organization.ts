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
      type
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

const MY_ORGANIZATION = gql`
  query MY_ORGANIZATION_QUERY {
    myOrganizations {
      ...OrganizationFragment
    }
  }

  ${ORGANIZATION_FRAGMENT}
`;

const CREATE_ORGANIZATION = gql`
  mutation CREATE_ORGANIZATION_MUTATION($data: OrganizationInput!) {
    createOrganization(data: $data) {
      ...OrganizationFragment
    }
  }

  ${ORGANIZATION_FRAGMENT}
`;

export { 
  MY_ORGANIZATION,
  CREATE_ORGANIZATION,
  MY_CURRENT_ORGANIZATION,
  EDIT_ORGANIZATION
};
