import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import CorePage from './features/start/pages/corePage/corePage.tsx'
import AuthPage from './features/start/pages/authPage/authPage.tsx'
import RegisterPage from './features/start/pages/registerPage/registerPage.tsx'
import PassRecoveryPage from './features/start/pages/passRecoveryPage/passRecoveryPage.tsx'
import BasePage from './features/main/pages/basePage/basePage.tsx'
import ProfilePage from './features/main/pages/profilePage/profilePage.tsx'
import MainPage from './features/main/pages/mainPage/mainPage.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const router = createBrowserRouter([
  {
    path: '/',
    element: <CorePage />,
    children: [
      {
        path: '/',
        element: <AuthPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/pass-recovery',
        element: <PassRecoveryPage />,
      },
    ]
  },
  {
    path: '/base',
    element: <BasePage />,
    children: [
      {
        path: '/base/profile',
        element: <ProfilePage />,
      },
      {
        path: '/base/main/',
        element: <MainPage />,
      }
    ]
  }
])

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
