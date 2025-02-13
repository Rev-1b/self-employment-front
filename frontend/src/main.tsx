import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import CorePage from './features/start/pages/СorePage/СorePage.tsx';
import AuthPage from './features/start/pages/authPage/authPage.tsx';
import RegisterPage from './features/start/pages/registerPage/registerPage.tsx';
import PassRecoveryPage from './features/start/pages/passRecoveryPage/passRecoveryPage.tsx';
import ProfilePage from './features/main/pages/profilePage/ProfilePage.tsx';
import MainPage from './features/main/pages/mainPage/MainPage.tsx';
import CoreNavigationPage from './features/common/pages/CoreNavigationPage/CoreNavigationPage.tsx';
import DocumentNavPage from './features/documents/pages/DocumentNavPage/DocumentNavPage.tsx';
import AgreementListPage from './features/documents/pages/AgreementListPage/AgreementListPage.tsx';
import AgreementPage from './features/documents/pages/AgreementPage/AgreementPage.tsx';
import AgreementSectionPage from './features/documents/pages/AgreementSectionPage/AgreementSectionPage.tsx';
import AdditionalPage from './features/documents/pages/AdditionalPage/AdditionalPage.tsx';
import AdditionalForm from './features/documents/pages/AdditionalPage/components/AdditionalForm.tsx';

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
    element: <CoreNavigationPage />,
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
        element: <DocumentNavPage/>,
        children: [
          {
            path: 'agreements/',
            element: <AgreementSectionPage/>,
            children: [
              {
                path: 'create/',
                element: <AgreementPage/>,
              },
              {
                path: 'additional/',
                element: <AdditionalPage/>,
                children: [
                  {
                      path: 'create',
                      element: <AdditionalForm />
                  },
                  {
                      path: ':id',
                      element: <AdditionalForm />
                  }
              ]
              }
            ]
          },
          {
            path: 'agreements/list/',
            element: <AgreementListPage />,
          },
        ]
      }
    ]
  }
]);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
