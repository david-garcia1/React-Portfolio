import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu state
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-200">
              David Garcia
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className="text-gray-900 dark:text-gray-200 hover:underline"
            >
              About Me
            </NavLink>
            <NavLink
              to="/portfolio"
              className="text-gray-900 dark:text-gray-200 hover:underline"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-900 dark:text-gray-200 hover:underline"
            >
              Contact
            </NavLink>
            <NavLink
              to="/resume"
              className="text-gray-900 dark:text-gray-200 hover:underline"
            >
              Resume
            </NavLink>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex justify-between items-center">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-900 dark:text-gray-200 hover:text-blue-500"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-100 dark:bg-gray-800`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <NavLink
            to="/"
            className="text-gray-900 dark:text-gray-200 hover:underline"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className="text-gray-900 dark:text-gray-200 hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-900 dark:text-gray-200 hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            className="text-gray-900 dark:text-gray-200 hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
