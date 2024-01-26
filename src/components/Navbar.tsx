import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/map", label: "Map" },
];

export function Navbar() {
  return (
    <nav
      id="nav"
      className="flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full"
    >
      <div className="self-center mb-2 sm:mb-0 flex flex-row">
        <Link
          to="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-bold"
        >
          Dreame adapter sharing map
        </Link>
      </div>

      <div className="sm:mb-0 self-center">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
