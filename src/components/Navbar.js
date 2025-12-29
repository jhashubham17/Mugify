import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/Logo/Logo.jpeg"
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.to}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div
                className={`flex items-center transition-all duration-300 ${
                  isSearchExpanded ? "w-64" : "w-10"
                }`}
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`absolute right-0 h-10 pl-4 pr-12 rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-all duration-300 bg-gray-900 text-white placeholder-gray-400 ${
                    isSearchExpanded ? "w-64 opacity-100" : "w-0 opacity-0"
                  }`}
                  onBlur={() => !search && setIsSearchExpanded(false)}
                />
                <button
                  type="button"
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors relative z-10"
                >
                  <Search className="w-5 h-5 text-gray-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black border-t border-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.to}
              className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 rounded-lg text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Search */}
          <div className="px-3 py-2">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-700 rounded-lg focus:border-white focus:outline-none bg-gray-900 text-white placeholder-gray-400"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
