import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { FiMenu } from 'react-icons/fi';
import { VscChromeClose } from 'react-icons/vsc';

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(true);
  return (
    <>
      <div className="navbar-container">
        <p style={{ fontSize: 20 }}>URL Shortening App</p>
        <div className="navigation-links">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { textDecoration: 'none', color: '#2ecc71' }
                : { color: 'white', textDecoration: 'none' }
            }
            to="/"
          >
            <p>Encode URL</p>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { textDecoration: 'none', color: '#2ecc71' }
                : { color: 'white', textDecoration: 'none' }
            }
            to="/decode"
          >
            {' '}
            <p>Decode URL</p>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { textDecoration: 'none', color: '#2ecc71' }
                : { color: 'white', textDecoration: 'none' }
            }
            to="/allUrls"
          >
            <p>All URLS</p>
          </NavLink>
        </div>

        <div className="hide">
          {mobileNavbar ? (
            <FiMenu
              className="navbarIcons"
              onClick={() => setMobileNavbar(false)}
            />
          ) : (
            <VscChromeClose
              className="navbarIcons"
              onClick={() => setMobileNavbar(true)}
            />
          )}
        </div>
      </div>
      {!mobileNavbar && (
        <div className={`hamburgerMenu hide animations `}>
          <div className="mobileNavbarLinks">
            <NavLink
              onClick={() => setMobileNavbar(true)}
              style={{ textDecoration: 'none' }}
              to="/"
            >
              <p>Encode URL</p>
            </NavLink>
            <NavLink
              onClick={() => setMobileNavbar(true)}
              style={{ textDecoration: 'none' }}
              to="/decode"
            >
              {' '}
              <p>Decode URL</p>
            </NavLink>
            <NavLink
              onClick={() => setMobileNavbar(true)}
              style={{ textDecoration: 'none' }}
              to="/allUrls"
            >
              <p>All URLS</p>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
