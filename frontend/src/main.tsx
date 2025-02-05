import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import CorePage from './features/start/pages/corePage/corePage.tsx'
import AuthPage from './features/start/pages/authPage/authPage.tsx'
import RegisterPage from './features/start/pages/registerPage/registerPage.tsx'
import PassRecoveryPage from './features/start/pages/passRecoveryPage/passRecoveryPage.tsx'
import BasePage from './features/main/pages/BasePage/BasePage.tsx'
import ProfilePage from './features/main/pages/profilePage/ProfilePage.tsx'
import MainPage from './features/main/pages/mainPage/MainPage.tsx'
import AgrTempHistBasePage from './features/main/pages/AgrTempHistBasePage/AgrTempHistBasePage.tsx'
import AgrListPage from './features/main/pages/AgrListPage/AgrListPage.tsx'

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
        path: 'profile/',
        element: <ProfilePage />,
      },
      {
        path: 'main/',
        element: <MainPage />,
      },
      {
        path: 'documents/',
        element: <AgrTempHistBasePage />,
        children: [
          {
            path: 'agreements/',
            element: <AgrListPage />,
          }
        ]
      }
    ]
  }
])

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
