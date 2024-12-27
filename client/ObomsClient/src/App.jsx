import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import { store } from './store';
import { queryClient } from './lib/react-query';
import { ThemeProvider } from './context/ThemeContext';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';

const LandingPage = lazy(() => import('./pages/LandingPage'));

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <LandingPage />
                </Suspense>
              } 
            />
          </Routes>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
