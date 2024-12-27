import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store';
import { Suspense } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function ProtectedRoute() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet />
    </Suspense>
  );
} 