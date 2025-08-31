import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  // Mock cart data for demo
  const cart = [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 2 },
  ];

  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/Logo/MugifyLogo.png"
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
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative pr-10">
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
                  className={`absolute right-0 h-10 pl-4 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white ${
                    isSearchExpanded ? "w-64 opacity-100" : "w-0 opacity-0"
                  }`}
                  onBlur={() => !search && setIsSearchExpanded(false)}
                />
                <button
                  type="button"
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors relative z-10"
                >
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Cart */}
            <a
              href="/cart"
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.to}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-lg text-base font-medium transition-colors"
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
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Cart */}
          <a
            href="/cart"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-lg text-base font-medium transition-colors flex items-center justify-between"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Cart</span>
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
