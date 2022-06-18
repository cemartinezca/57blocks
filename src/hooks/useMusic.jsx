import { useContext } from 'react';
import { MusicContext } from './AppContexts';

const useMusic = () => {
    return useContext(MusicContext);
}

export default useMusic;