// ProtectedRoute.js

import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const ProtectedRoute = ({ path, ...props }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Route path={path} {...props} /> : <Navigate to="/login" />;
};
