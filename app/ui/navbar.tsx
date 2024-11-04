"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const navlinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/products",
    },
    {
      name: "Sign in",
      href: "/dasboard",
    },
  ];
  const handlemenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="bg-slate-50 lg:bg-transparent">
      <div className="sub-header col-lg-11 col-xl-11 col-xxl-9">
        <div className="logo">
          <div>
            <span>E</span>Essence
          </div>
          <div className="menuContainer">
            <div
              className={`menu-icon ${showMenu ? "active" : ""}`}
              onClick={handlemenu}
            >
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
        <ul className={!showMenu ? "desktopheader" : ""}>
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <Link
                href={navlink.href}
                className={
                  pathname == navlink.href ? "navbarlink-active" : "navbarlink"
                }
              >
                {navlink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
