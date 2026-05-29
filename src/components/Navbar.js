import { useState, useEffect } from "react";
import { Search, Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .navbar {
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }
        
        .nav-glow {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .nav-scrolled {
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }
        
        .nav-link {
          position: relative;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .nav-link.active {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .search-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          border-color: #8b5cf6;
          background: rgba(255,255,255,0.08);
          box-shadow: 0 0 15px rgba(139,92,246,0.2);
        }
        
        .mobile-menu {
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
          backdrop-filter: blur(10px);
        }
        
        .logo-text {
          background: linear-gradient(135deg, #ffffff, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <nav
        className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "nav-scrolled" : "nav-glow"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/Logo/Logo.jpeg"
                  alt="Logo"
                  className="h-10 w-auto lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className="text-white font-bold text-xl lg:text-2xl hidden sm:block">
                <span className="logo-text">PrintWonders</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className={`nav-link px-4 py-2 text-sm lg:text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? "active text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side - Search & Cart */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <div
                  className={`flex items-center transition-all duration-300 ${
                    isSearchExpanded ? "w-80" : "w-auto"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
                    className={`search-input absolute right-0 h-10 pl-4 pr-12 rounded-full text-white placeholder-gray-400 transition-all duration-300 ${
                      isSearchExpanded
                        ? "w-80 opacity-100"
                        : "w-0 opacity-0 pointer-events-none"
                    }`}
                    onBlur={() => !search && setIsSearchExpanded(false)}
                    autoFocus={isSearchExpanded}
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Search
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isSearchExpanded
                          ? "text-purple-400"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Cart Button */}
              <Link to="/cart" className="relative group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300">
                  <ShoppingBag className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                    0
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative">
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-white" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-400 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden mobile-menu border-t border-white/10`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="h-px bg-white/10 my-3"></div>

            {/* Mobile Search */}
            <div className="px-4 py-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-5 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Search className="w-4 h-4 text-gray-400" />
                </button>
              </form>
            </div>

            {/* Mobile Cart */}
            <Link
              to="/cart"
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 mx-4 mt-2 transition-all hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-gray-300 font-medium">Shopping Cart</span>
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4 text-gray-400" />
                <span className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;
