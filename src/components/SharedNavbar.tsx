import React from "react";

interface SharedNavbarProps {
  useNextRouter?: boolean;
}

const SharedNavbar: React.FC<SharedNavbarProps> = ({
  useNextRouter = false,
}) => {
  if (useNextRouter) {
    // Dynamic import for Next.js Link to avoid SSR issues
    const Link = require("next/link").default;
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/newpage">New Page</Link>
          </li>
        </ul>
      </nav>
    );
  }

  // Use React Router for existing React app
  const { Link } = require("react-router-dom");
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newpage">New Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SharedNavbar;
