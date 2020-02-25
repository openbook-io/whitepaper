import React, {useContext} from 'react'
import {UserFragment} from '@whitepaper/queries';

const UserContext = React.createContext<Partial<UserFragment>>({})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext