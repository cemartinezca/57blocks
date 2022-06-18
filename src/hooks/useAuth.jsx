import { useContext } from 'react';
import { AuthContext } from './AppContexts';

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;
