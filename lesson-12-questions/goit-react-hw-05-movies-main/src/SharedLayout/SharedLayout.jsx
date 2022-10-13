import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';

export default function SharedLayout() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    console.log(location);
    // if (params['*']) {
    //   navigate('/');
    // }
  }, []);
  return <Outlet />;
}
