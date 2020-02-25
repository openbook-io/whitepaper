import React, {useContext} from 'react'
import {OrganizationFragment} from '@whitepaper/queries';

const OrganizationContext = React.createContext<Partial<OrganizationFragment>>({})

export const OrganizationProvider = OrganizationContext.Provider
export const OrganizationConsumer = OrganizationContext.Consumer

export const useOrganization = () => {
  return useContext(OrganizationContext);
};

export default OrganizationContext