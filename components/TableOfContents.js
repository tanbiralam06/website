"use client";

import { useState, useEffect } from 'react';

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Set the first item as active by default
    if (items.length > 0 && !activeId) {
      setActiveId(items[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Get the entry that is currently most visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Use the first visible entry as active
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { 
        rootMargin: '-20px 0px -50% 0px',
        threshold: 0.1 
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle initial scroll position
    const checkInitialPosition = () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveId(item.id);
          }
        }
      });
    };
    
    checkInitialPosition();

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items, activeId]);

  return (
    <div className="pr-6 sticky top-24">
      <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-4">
        On this page
      </h3>
      <nav className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm py-1.5 pl-3 border-l-2 transition-colors ${
              activeId === item.id
                ? 'text-primary-600 dark:text-primary-400 border-primary-600 dark:border-primary-400 font-medium'
                : 'text-secondary-600 dark:text-secondary-400 border-transparent hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400'
            }`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              if (element) {
                // Smooth scroll to the element
                element.scrollIntoView({ behavior: 'smooth' });
                // Set active ID
                setActiveId(item.id);
                // Update the URL hash without the jump
                window.history.pushState(null, '', `#${item.id}`);
              }
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
} 