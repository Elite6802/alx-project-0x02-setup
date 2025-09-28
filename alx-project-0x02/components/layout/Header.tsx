import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  const navItems = [
    { name: 'Index', href: '/' },
    { name: 'Home', href: '/home' },
    { name: 'Posts', href: '/posts' }, // Link to the new Posts page
    { name: 'About', href: '/about' },
    { name: 'Users', href: '/users' },
  ];

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Next.js Project
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-white hover:text-blue-400 transition font-medium">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
