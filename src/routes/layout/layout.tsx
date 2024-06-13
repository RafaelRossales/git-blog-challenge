import React from 'react';
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../link'; // Adjust the import path as needed

export function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet /> 
    </div>
  );
}

export default Layout;
