import gql from 'graphql-tag';

const ORGANIZATION_FRAGMENT = gql`
  fragment OrganizationFragment on Organization {
    id
    name
    slug
    about
  }
`

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
  CREATE_ORGANIZATION
};
