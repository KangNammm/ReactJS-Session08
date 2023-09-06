import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter() {
    // navigate khác với useNavigate
    // Navigate chuyển hướng router và render component
    const isLogin = false;
    return ( 
        <div >
            isLogin ? <Outlet /> : <Navigate to={"/login"} />
        </div >
  )
}
