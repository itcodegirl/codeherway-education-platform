import { createBrowserRouter, Navigate } from 'react-router-dom';

import PublicLayout from '../layouts/publicLayout';
import AppLayout from '../layouts/appLayout';
import AdminLayout from '../layouts/adminLayout';

import ProtectedRoute from './protectedRoute';
import PublicOnlyRoute from './publicOnlyRoute';
import AdminRoute from './adminRoute';

import LandingPage from '../pages/public/landingPage';
import DemoPage from '../pages/public/demopage';
import LoginPage from '../pages/public/loginPage';
import SignupPage from '../pages/public/signupPage';

import DashboardPage from '../pages/app/dashboardPage';
import ProfilePage from '../pages/app/profilePage';
import SettingsPage from '../pages/app/settingsPage';

import AdminPage from '../pages/admin/adminPage';

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/demo', element: <DemoPage /> },
      {
        path: '/login',
        element: (
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <PublicOnlyRoute>
            <SignupPage />
          </PublicOnlyRoute>
        ),
      },
    ],
  },
  {
    path: '/app',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/app/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [{ index: true, element: <AdminPage /> }],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
