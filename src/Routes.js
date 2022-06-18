import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from './hooks';
import { CanvasPage, DashboardPage, FavoritesPage, LoginPage, MusicPage } from './pages';

const RequireAuth = ({children}) => {
    const { token } = useAuth();
    let location = useLocation();
    
    if(!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
}
 
const AppRoutes = () => {
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
        <Route index element={<MusicPage />} />
        <Route path="music" element={<MusicPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="canvas" element={<CanvasPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;