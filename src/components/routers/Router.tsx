import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';

function Router() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Main />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
