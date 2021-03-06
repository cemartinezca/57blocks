import React, { useCallback } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth, useMusic } from './hooks';
import { CanvasPage, DashboardPage, LoginPage, MusicPage } from './pages';

const RequireAuth = ({children}) => {
    const { token } = useAuth();
    let location = useLocation();
    
    if(!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
}
 
const AppRoutes = () => {
  const data = useMusic();

  const musicObj = {
    musicList: data.musicList,
    updateList: useCallback((change) => {
      data.updateMusicList(change)
    }, [data]), 
    showMore: !data.isLastPage,
  }
  
  const favoriteObj = {
    musicList: data.favorites,
    updateList: useCallback((change) => {
      data.updateFavorites(change)
    }, [data]),
    showMore: !data.isFLastPage,
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="/dashboard" element={
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      }>
        <Route index element={<MusicPage {...musicObj} />} />
        <Route path="music" element={<MusicPage {...musicObj} />} />
        <Route path="favorites" element={<MusicPage {...favoriteObj} />} />
        <Route path="canvas" element={<CanvasPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;