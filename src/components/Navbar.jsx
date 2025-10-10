import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
        {/* Logo / Name */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-pink-500 tracking-wide">
          Shifana<span className="text-white">.</span>
        </h1>

        {/* Desktop Nav Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-pink-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 text-base font-light">
          <Phone className="w-5 h-5 text-pink-400" />
          <span>8610293724</span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm text-center py-6 space-y-6 text-xl font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block hover:text-pink-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center items-center space-x-2 pt-4 text-base font-light">
            <Phone className="w-5 h-5 text-pink-400" />
            <span>8610293724</span>
          </div>
        </div>
      )}
    </header>
  );
}
