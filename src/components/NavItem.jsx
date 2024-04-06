import { Link } from "react-router-dom";
import { memo } from 'react';

export const NavItem = memo(({to, label}) => {
  return (
    <li className="mr-5 hover:text-red-600">
      <Link to={to}>{label}</Link>
    </li>
  );
})
