import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-4">
      <strong>404</strong>
      <p>Page Not Found.</p>
      <NavLink to="/" className="text-blue-700 underline">
        Go to Home
      </NavLink>
    </div>
  );
}

export default NotFound;
