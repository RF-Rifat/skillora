import { Outlet, Link, useLocation } from 'react-router';
import { useState } from 'react';
import LenisScroll from '../components/LenisScroll';
import Navbar from '../components/ui/Navbar';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', target: '/' },
    { name: 'Courses', href: '/courses', target: '/courses' },
    { name: 'About', href: '#about', target: 'about' },
    { name: 'Contact', href: '#contact', target: 'contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
    <LenisScroll/>
    <div className="min-h-screen bg-background">
      
      <Navbar/>
      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="ml-2 text-xl font-bold text-foreground">Skillora</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Transform your career with our comprehensive online learning platform. 
                Master new skills with expert-led courses designed for real-world success.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <button
                    
                    className="text-muted-foreground hover:text-primary transition-colors p-0 h-auto"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                   
                    className="text-muted-foreground hover:text-primary transition-colors p-0 h-auto"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground">
              © 2024 Skillora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    
    </div></>
  );
};

export default MainLayout; 