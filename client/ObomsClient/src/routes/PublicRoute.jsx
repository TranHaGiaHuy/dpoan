import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store';
import { Suspense } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function PublicRoute() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Redirect authenticated users to dashboard
  if (isAuthenticated && window.location.pathname === '/login') {
    return <Navigate to="/app" replace />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet />
    </Suspense>
  );
} 