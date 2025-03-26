
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, User, LogIn, Home, CreditCard, Dice } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Dice className="h-8 w-8 text-casino-gold" />
            <span className="text-2xl font-bold bg-gradient-to-r from-casino-gold to-yellow-500 text-transparent bg-clip-text ml-2">
              LuxCasino
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/games" active={isActive("/games")}>
            Games
          </NavLink>
          <NavLink to="/promotions" active={isActive("/promotions")}>
            Promotions
          </NavLink>
          <NavLink to="/about" active={isActive("/about")}>
            About
          </NavLink>
          <div className="flex items-center space-x-3 ml-6">
            <Button
              asChild
              variant="outline"
              className="border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-white"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="bg-casino-gold text-black hover:bg-opacity-90"
            >
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-casino-gold" />
          ) : (
            <Menu className="h-6 w-6 text-casino-gold" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink
              to="/"
              icon={<Home size={18} />}
              active={isActive("/")}
              onClick={closeMobileMenu}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              to="/games"
              icon={<Dice size={18} />}
              active={isActive("/games")}
              onClick={closeMobileMenu}
            >
              Games
            </MobileNavLink>
            <MobileNavLink
              to="/promotions"
              icon={<CreditCard size={18} />}
              active={isActive("/promotions")}
              onClick={closeMobileMenu}
            >
              Promotions
            </MobileNavLink>
            <MobileNavLink
              to="/about"
              icon={<User size={18} />}
              active={isActive("/about")}
              onClick={closeMobileMenu}
            >
              About
            </MobileNavLink>
            <div className="pt-4 flex flex-col space-y-3">
              <Button
                asChild
                variant="outline"
                className="border-casino-gold text-casino-gold w-full justify-center"
              >
                <Link to="/login" onClick={closeMobileMenu}>
                  <LogIn size={18} className="mr-2" /> Login
                </Link>
              </Button>
              <Button
                asChild
                className="bg-casino-gold text-black w-full justify-center"
              >
                <Link to="/register" onClick={closeMobileMenu}>
                  <User size={18} className="mr-2" /> Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({
  children,
  to,
  active,
}: {
  children: React.ReactNode;
  to: string;
  active: boolean;
}) => (
  <Link
    to={to}
    className={`relative text-sm font-medium transition-colors ${
      active
        ? "text-casino-gold"
        : "text-gray-800 hover:text-casino-gold"
    }`}
  >
    {children}
    {active && (
      <motion.span
        layoutId="activeIndicator"
        className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-casino-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </Link>
);

const MobileNavLink = ({
  children,
  to,
  icon,
  active,
  onClick,
}: {
  children: React.ReactNode;
  to: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 py-2 px-3 rounded-md transition-colors ${
      active
        ? "bg-casino-gold bg-opacity-10 text-casino-gold"
        : "text-gray-700 hover:bg-gray-100"
    }`}
    onClick={onClick}
  >
    {icon}
    <span>{children}</span>
  </Link>
);

export default Header;
