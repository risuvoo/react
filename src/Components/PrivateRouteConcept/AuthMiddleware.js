import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import CheckAuth from './CheckAuth';

export default function AuthMiddleware() {
    const auth = CheckAuth();
    console.log(auth);
    return auth ? <Outlet /> : <Navigate to="/login" />;
}
