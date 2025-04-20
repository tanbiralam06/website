// website/components/SearchBar.js

"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Common components that can be searched - moved here to be accessible from all instances
const SEARCHABLE_COMPONENTS = [
  { name: 'Button', path: '/components/button' },
  { name: 'Modal', path: '/components/modal' },
  { name: 'Card', path: '/components/card' },
  { name: 'Dropdown', path: '/components/dropdown' },
  { name: 'Table', path: '/components/table' },
  { name: 'Form', path: '/components/form' },
  { name: 'Input', path: '/components/input' },
  { name: 'Checkbox', path: '/components/checkbox' }
];

const SearchBar = ({ onSearch, placeholder = "Search for components...", customComponents }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  // Use custom components list if provided, otherwise use default list
  const components = customComponents || SEARCHABLE_COMPONENTS;

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      // CMD+K or CTRL+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        document.getElementById('search-input')?.focus();
      }
      // ESC to close search
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    // Don't trigger search while typing - only on form submission
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    // Perform the search logic here
    const matches = components.filter(comp => 
      comp.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    console.log(`Search submitted for "${searchQuery}" - Found ${matches.length} matches`);
    
    // If there's a custom onSearch handler, use it
    if (onSearch) {
      onSearch(searchQuery, matches);
      return;
    }
    
    // Default behavior if no custom handler is provided
    if (matches.length === 1) {
      // Navigate to the exact match
      window.location.href = matches[0].path;
    } else if (matches.length > 0) {
      // Navigate to search results page
      window.location.href = `/components?search=${encodeURIComponent(searchQuery)}`;
    } else {
      // No matches found
      window.location.href = `/components?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`w-full sm:max-w-xl rounded-full border ${isFocused 
        ? 'border-primary-500/50 dark:border-primary-500/30 shadow-sm shadow-primary-500/10' 
        : 'border-secondary-200/70 dark:border-secondary-700/70'} 
         dark:bg-secondary-800/50 backdrop-blur-sm hover:border-primary-400/50 dark:hover:border-primary-500/30 transition-all duration-300`}
    >
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="absolute left-3.5 text-secondary-400 dark:text-secondary-500">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent py-2 sm:py-2.5 pl-10 pr-16 text-secondary-900 dark:text-secondary-100 placeholder-secondary-400 dark:placeholder-secondary-500 focus:outline-none text-sm"
        />
        <div className="absolute right-3.5 hidden sm:flex items-center space-x-1.5 text-xs text-secondary-400 dark:text-secondary-500">
          <kbd className="px-1.5 py-0.5 rounded border  dark:border-secondary-700  dark:bg-secondary-800/80">⌘</kbd>
          <kbd className="px-1.5 py-0.5 rounded border dark:border-secondary-700 dark:bg-secondary-800/80">K</kbd>
        </div>
        {/* Submit button - visible when there's text */}
        {searchQuery && (
          <button
            type="submit"
            className="absolute right-3.5 p-1.5 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 sm:right-20 transition-colors"
            aria-label="Submit search"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        )}
        {/* Mobile clear button when text is entered */}
        {searchQuery && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault(); // Prevent form submission
              e.stopPropagation(); // Stop event bubbling
              setSearchQuery('');
              // Don't trigger search when clearing
            }}
            className="sm:hidden absolute right-3.5 p-1.5 text-secondary-400 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </form>
    </motion.div>
  );
};

export default SearchBar;