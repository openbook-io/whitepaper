import gql from 'graphql-tag';

const ORGANIZATION_FRAGMENT = gql`
  fragment OrganizationFragment on Organization {
    id
    name
    slug
    about
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

export { 
  MY_CURRENT_ORGANIZATION
};
