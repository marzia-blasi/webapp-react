import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-2">Naviga tra...</p>
        <div>
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
          <NavLink
            className="nav-link active"
            to="/Details"
            aria-current="page"
          >
            Details
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
