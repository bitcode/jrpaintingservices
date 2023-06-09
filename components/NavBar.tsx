import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="navbar max-w-1800 mx-auto">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/CommercialServices" passHref>
              Commercial Services
            </Link>
          </li>
          <li>
            <Link href="/ResidentialServices" passHref>
              Residential Services
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" passHref>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

