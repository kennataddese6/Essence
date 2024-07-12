"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname, "path");
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
      href: "/signin",
    },
  ];
  return (
    <header>
      <div className="sub-header col-lg-11 col-xl-9">
        <div className="logo">
          <span>E</span>Essence
        </div>
        <ul>
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <Link
                href="#"
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
