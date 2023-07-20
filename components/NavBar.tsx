import Link from 'next/link';
import { GiLion } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="navbar max-w-1800 mx-auto">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <GiLion size={30} style={{ marginRight: "10px" }} />
          JRPS
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/CommercialServices">
              Commercial Services
            </Link>
          </li>
          <li>
            <Link href="/ResidentialServices">
              Residential Services
            </Link>
          </li>
          <li>
            <Link href="/ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

