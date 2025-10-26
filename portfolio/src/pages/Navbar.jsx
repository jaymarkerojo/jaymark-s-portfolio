import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#0b0b0b] border-b border-[#1a1a1a]">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <Link
          to="/"
          className="text-[#facc15] font-bold tracking-widest uppercase text-lg"
        >
          PORTFOLIO
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive ? "text-[#facc15]" : "text-[#f5f5f5] hover:text-[#facc15]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive ? "text-[#facc15]" : "text-[#f5f5f5] hover:text-[#facc15]"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive ? "text-[#facc15]" : "text-[#f5f5f5] hover:text-[#facc15]"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
