"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define icons for sidebar
function Icon({ name, className }) {
  const icons = {
    CircleInfo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    Download: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    Square: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      </svg>
    ),
    Tag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    CreditCard: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    FormInput: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    Loader2: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    ),
    Table: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    CheckSquare: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    Calendar: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    CircleDot: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    ToggleLeft: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
        <circle cx="8" cy="12" r="3" />
      </svg>
    ),
    Moon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    GitHub: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    ChevronDown: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    AlignLeft: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="17" y1="10" x2="3" y2="10" />
        <line x1="21" y1="6" x2="3" y2="6" />
        <line x1="21" y1="14" x2="3" y2="14" />
        <line x1="17" y1="18" x2="3" y2="18" />
      </svg>
    )
  };

  return icons[name] || <div className={className}></div>;
}

export default function ComponentsLayout({ children }) {
  const pathname = usePathname();
  
  const sidebarCategories = [
    {
      title: "GETTING STARTED",
      items: [
        { name: "Introduction", href: "/docs/introduction", icon: "CircleInfo" },
        { name: "Installation", href: "/docs/installation", icon: "Download" }
      ]
    },
    {
      title: "BASIC COMPONENTS",
      items: [
        { name: "Accordion", href: "/components/accordion", icon: "ChevronDown", isNew: true },
        { name: "Alert", href: "/components/alert", icon: "CircleInfo", isNew: true },
        { name: "Avatar", href: "/components/avatar", icon: "CircleDot", isNew: true },
        { name: "Button", href: "/components/button", icon: "Square" },
        { name: "Badge", href: "/components/badge", icon: "Tag", isNew: true },
        { name: "Card", href: "/components/card", icon: "CreditCard" },
        { name: "Grid", href: "/components/grid", icon: "Table", isNew: true },
        { name: "Input", href: "/components/input", icon: "FormInput" },
        { name: "Spinner", href: "/components/spinner", icon: "Loader2" },
        { name: "Table", href: "/components/table", icon: "Table" },
        { name: "Toast", href: "/components/toast", icon: "AlignLeft", isNew: true }
      ]
    },
    {
      title: "FORM COMPONENTS",
      items: [
        { name: "Checkbox", href: "/components/checkbox", icon: "CheckSquare" },
        { name: "DateTimePicker", href: "/components/datetimepicker", icon: "Calendar", isNew: true },
        { name: "File Input", href: "/components/file-input", icon: "Download", isNew: true },
        { name: "Radio", href: "/components/radio", icon: "CircleDot", isNew: true },
        { name: "Range Slider", href: "/components/range-slider", icon: "AlignLeft", isNew: true },
        { name: "Select", href: "/components/select", icon: "ChevronDown", isNew: true },
        { name: "Slider", href: "/components/slider", icon: "AlignLeft", isNew: true },
        { name: "Switch", href: "/components/switch", icon: "ToggleLeft", isNew: true },
        { name: "Textarea", href: "/components/textarea", icon: "AlignLeft", isNew: true }
      ]
    },
    {
      title: "OVERLAY COMPONENTS",
      items: [
        { name: "Modal", href: "/components/modal", icon: "Square", isNew: true },
        { name: "Popover", href: "/components/popover", icon: "CreditCard", isNew: true },
        { name: "Tooltip", href: "/components/tooltip", icon: "CircleInfo", isNew: true }
      ]
    }
  ];

  return (
    <div className="flex relative">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-secondary-200 dark:border-[#1e2030] bg-white dark:bg-[#0d1117] overflow-y-auto hidden md:block md:sticky top-16 self-start h-[calc(100vh-4rem)]">
        <nav className="p-4">
          {sidebarCategories.map((category) => (
            <div key={category.title} className="mb-6">
              <h3 className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-2">
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center px-2 py-1.5 text-sm rounded-md group ${
                          isActive
                            ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
                            : "text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-[#1e2030]"
                        }`}
                      >
                        <span className="mr-2">
                          <Icon name={item.icon} className="h-4 w-4" />
                        </span>
                        {item.name}
                        {item.isNew && (
                          <span className="ml-auto bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs px-1.5 py-0.5 rounded-full">
                            NEW
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 pb-16 mt-4">
        {children}
      </main>
    </div>
  );
} 