'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const Navbar = () => {
  const pathname = usePathname();
  const [menuicon, setMenuIcon] = useState(false);
  const navlinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Products',
      href: '/products',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/products',
    },
    {
      name: 'Sign in',
      href: '/signin',
    },
  ];
  const handlemenu = () => {
    setMenuIcon(!menuicon);
  };
  return (
    <header>
      <div className="sub-header col-lg-11 col-xl-11">
        <div className="logo">
          <div>
            <span>E</span>Essence
          </div>
          <div className="menuContainer">
            <div
              className={`menu-icon ${menuicon ? 'active' : ''}`}
              onClick={handlemenu}
            >
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
        {menuicon && (
          <ul className={menuicon ? 'open' : ''}>
            {navlinks.map((navlink, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className={
                    pathname == navlink.href
                      ? 'navbarlink-active'
                      : 'navbarlink'
                  }
                >
                  {navlink.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};
export default Navbar;
