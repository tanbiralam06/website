'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import SearchBar from './Searchbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const pathname = usePathname();

  // After mounting, we can access the window object
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchExpanded(false);
  }, [pathname]);

  // Handle overflowing when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden', 'md:overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Components', path: '/components' },
    { name: 'Docs', path: '/docs' },
    { name: 'Testimonials', path: '/testimonials' },
    // { name: 'Blog', path: '/blog' },
    // { name: 'Playground', path: '/playground' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle search expansion on mobile
  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (!isSearchExpanded) {
      // Focus search input when expanded
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c1222] border-b border-[#1e2a45]">
      <div className="container px-4 sm:px-6 max-w-full flex h-16 items-center justify-between">
        {/* Logo and Nav section */}
        <div className={`flex items-center ${isSearchExpanded ? 'hidden md:flex' : 'flex'}`}>
          <Link href="/" className="flex items-center group">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-indigo-300 group-hover:to-purple-300">ReacUI</span>
          </Link>
          
          <nav className="hidden md:ml-12 md:flex md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? 'text-white font-medium'
                    : 'text-gray-400 hover:text-white'
                } transition-colors text-sm px-4 py-2`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search bar and controls section */}
        <div className={`flex items-center ${isSearchExpanded ? 'w-full md:w-auto' : ''}`}>
          {/* Desktop Search */}
          <div className="hidden md:block md:w-[280px] mr-3">
            <SearchBar 
              placeholder="Search components..."
            />
          </div>
          
          {/* Mobile Search - Expanded */}
          {isSearchExpanded && (
            <div className="w-full md:hidden">
              <SearchBar 
                placeholder="Search components..."
              />
            </div>
          )}
          
          {/* Search toggle button - mobile only */}
          {!isSearchExpanded && (
            <button 
              onClick={toggleSearch} 
              className="md:hidden p-2 text-gray-400 hover:text-white rounded-full transition-colors mr-2"
              aria-label="Toggle search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}
          
          {/* Cancel search button - mobile only */}
          {isSearchExpanded && (
            <button 
              onClick={toggleSearch} 
              className="md:hidden p-2 text-gray-400 hover:text-white rounded-full transition-colors ml-2"
              aria-label="Close search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Theme toggle and GitHub link */}
          <div className={`flex items-center space-x-1 ${isSearchExpanded ? 'hidden md:flex' : 'flex'}`}>
            <div className="flex items-center">
              {mounted && <ThemeToggle />}
            </div>
            
            <a 
              href="https://github.com/reacui/reacui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center text-gray-400 hover:text-white p-2 rounded-full transition-colors"
              aria-label="GitHub Repository"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          {/* Mobile menu toggle button */}
          <button 
            className={`md:hidden p-2 text-gray-400 hover:text-white rounded-full transition-colors focus:outline-none ${isSearchExpanded ? 'hidden' : 'block'}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Search results dropdown */}
      {searchResults.length > 0 && (
        <div className="absolute top-16 left-0 right-0 bg-[#0c1222]/95 backdrop-blur-md border-b border-[#1e2a45] shadow-lg z-50">
          <div className="container px-4 sm:px-6 py-4">
            <h3 className="text-xs font-semibold text-gray-400 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
              Results ({searchResults.length})
            </h3>
            <ul className="space-y-1">
              {searchResults.map((result) => (
                <li key={result.name}>
                  <Link
                    href={result.path}
                    className="block p-3 rounded-lg hover:bg-[#1e2a45] text-gray-200 transition-colors"
                    onClick={() => {
                      setSearchResults([]);
                      // Optional: Clear the search input when a result is clicked
                      const searchInput = document.getElementById('search-input');
                      if (searchInput) searchInput.value = '';
                    }}
                  >
                    <div className="font-medium">{result.name}</div>
                    <div className="text-xs text-gray-400 mt-1">Navigate to {result.path}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-[#0c1222]/95 backdrop-blur-md overflow-y-auto">
          <div className="container py-6 px-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? 'text-white font-medium bg-[#1e2a45]'
                    : 'text-gray-400 hover:text-white hover:bg-[#1e2a45]/50'
                } flex items-center px-4 py-3 rounded-lg transition-colors text-base`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-[#1e2a45] my-3"></div>
            <a 
              href="https://github.com/reacui/reacui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-[#1e2a45]/50 rounded-lg transition-colors"
            >
              <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 