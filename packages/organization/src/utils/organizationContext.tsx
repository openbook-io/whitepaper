import React, {useContext} from 'react'

type OrganizationProps = { 
  name: string;
  slug: string;
};

const OrganizationContext = React.createContext<Partial<OrganizationProps>>({})

export const OrganizationProvider = OrganizationContext.Provider
export const OrganizationConsumer = OrganizationContext.Consumer

export const useOrganization = () => {
  return useContext(OrganizationContext);
};

export default OrganizationContext