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
    links {
      id
      url
      socialProvider {
        id
        name
        iconName
      }
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

const ADD_ORGANIZATION_LINK = gql`
  mutation ADD_ORGANIZATION_LINK_MUTATION($data: OrganizationLinkInput!) {
    addOrganizationLink(data: $data) {
      id
      url
    }
  }
`;

const EDIT_ORGANIZATION_LINK = gql`
  mutation EDIT_ORGANIZATION_LINK_MUTATION($data: OrganizationEditLinkInput!) {
    editOrganizationLink(data: $data) {
      id
      url
    }
  }
`;

const DELETE_ORGANIZATION_LINK = gql`
  mutation DELETE_ORGANIZATION_LINK_MUTATION($id: ID!) {
    deleteOrganizationLink(id: $id)
  }
`;

const GET_TRENDING_ORGANIZATIONS = gql`
  query GET_TRENDING_ORGANIZATIONS_QUERY {
    getTrendingOrganizations  {
      ...OrganizationFragment
    }
  }

  ${ORGANIZATION_FRAGMENT}
`;

export { 
  MY_ORGANIZATION,
  CREATE_ORGANIZATION,
  MY_CURRENT_ORGANIZATION,
  EDIT_ORGANIZATION,
  ADD_ORGANIZATION_LINK,
  EDIT_ORGANIZATION_LINK,
  DELETE_ORGANIZATION_LINK,
  GET_TRENDING_ORGANIZATIONS
};
