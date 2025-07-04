import React, { useState } from 'react';
import { Search, Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

// Types for navbar configuration
interface SubItem {
  id: number;
  title: string;
  href: string;
}

interface MenuItem {
  id: number;
  title: string;
  type: 'dropdown' | 'link';
  href?: string;
  items?: SubItem[];
}

interface NavbarData {
  brand: string;
  searchPlaceholder: string;
  menuItems: MenuItem[];
  buttons: {
    signup: {
      text: string;
      bgColor: string;
      hoverColor: string;
    };
  };
}

// JSON configuration for navbar data
const navbarData: NavbarData = {
  brand: "Skillora",
  searchPlaceholder: "Search courses, topics, or instructors...",
  menuItems: [
    {
      id: 1,
      title: "Courses",
      type: "dropdown",
      items: [
        { id: 11, title: "XYZ Course 1", href: "/courses/xyz-1" },
        { id: 12, title: "XYZ Course 2", href: "/courses/xyz-2" }
      ]
    },
    {
      id: 2,
      title: "Free Courses",
      type: "dropdown",
      items: [
        { id: 21, title: "Free Course A", href: "/free-courses/course-a" },
        { id: 22, title: "Free Course B", href: "/free-courses/course-b" }
      ]
    },
    {
      id: 3,
      title: "Instructors",
      type: "link",
      href: "/instructors"
    },
    {
      id: 4,
      title: "Contact",
      type: "link",
      href: "/contact"
    }
  ],
  buttons: {
    signup: {
      text: "Sign Up",
      bgColor: "bg-emerald-500",
      hoverColor: "hover:bg-emerald-600"
    }
  }
};

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleTheme = (): void => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (itemId: number): void => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  // Animation variants
  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: easeOut
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: easeOut
      }
    }
  };

  const themeToggleVariants = {
    hover: {
      scale: 1.1,
      rotate: 180,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
        ease: easeOut
      }
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} sticky top-0 z-40` }>
      <motion.nav 
        className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200 "
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo/Brand */}
            <div className="flex items-center">
              <motion.div 
                className="flex-shrink-0 mr-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {navbarData.brand}
                </h1>
              </motion.div>
              
              {/* Search Box - Desktop */}
              <motion.div 
                className="hidden md:block relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder={navbarData.searchPlaceholder}
                    className="w-80 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 focus:scale-105"
                    style={{ borderRadius: '6px' }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navbarData.menuItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.type === 'dropdown' ? (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.id)}
                        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium py-2 transition-colors duration-200"
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.id && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 z-50">
                          <div className="py-1">
                            {item.items?.map((subItem) => (
                              <a
                                key={subItem.id}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium py-2 transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Theme Toggle & Signup */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                variants={themeToggleVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  )}
                </motion.div>
              </motion.button>

              {/* Signup Button */}
              <motion.button
                className={`px-6 py-2 ${navbarData.buttons.signup.bgColor} ${navbarData.buttons.signup.hoverColor} text-white font-medium rounded-lg transition-colors duration-200`}
                style={{ borderRadius: '8px' }}
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {navbarData.buttons.signup.text}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <motion.button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Mobile Search */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder={navbarData.searchPlaceholder}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    style={{ borderRadius: '6px' }}
                  />
                </div>

                {/* Mobile Navigation Items */}
                {navbarData.menuItems.map((item) => (
                  <div key={item.id}>
                    {item.type === 'dropdown' ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.id)}
                          className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                        >
                          <span>{item.title}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {activeDropdown === item.id && (
                          <div className="pl-4 space-y-1">
                            {item.items?.map((subItem) => (
                              <a
                                key={subItem.id}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;