import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-black border-b-2 border-neonPink shadow-glowPink">
      <h1 className="text-neonPink font-retro text-xl">My Retro Portfolio</h1>
      <nav>
        <ul className="flex space-x-6 font-retro text-neonCyan">
          <li><a href="#projects" className="hover:text-neonPink transition">Projects</a></li>
          <li><a href="#about" className="hover:text-neonPink transition">About</a></li>
          <li><a href="#contact" className="hover:text-neonPink transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;