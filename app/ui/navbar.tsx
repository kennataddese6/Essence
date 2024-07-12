import Link from "next/link";
const Navbar = () => {
  return (
    <header>
      <div className="sub-header col-lg-11 col-xl-9">
        <div className="logo">
          <span>E</span>Essence
        </div>
        <ul>
          <li>
            <Link href="#" className="navbarlink">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="navbarlink">
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="navbarlink">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="navbarlink">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#" className="navbarlink">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
