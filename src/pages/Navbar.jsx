import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons (optional, or use emojis)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Home"},
    { to: "/about", label: "About" },
    { to: "/project", label: "Projects" },
    { to: "/skills", label: "Skills" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black border-b border-[#1a1a1a] z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        <Link
          to="/"
          className="text-[#facc15] font-bold tracking-widest uppercase text-sm hover:opacity-90 transition"
        >
          Jaymark
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#facc15]"
                    : "text-gray-200 hover:text-[#facc15]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 hover:text-[#facc15] transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-[#1a1a1a] flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // close menu when clicked
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#facc15]"
                    : "text-gray-200 hover:text-[#facc15]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
