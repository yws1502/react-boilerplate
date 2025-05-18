import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}

export default MainLayout;
