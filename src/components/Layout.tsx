import { Outlet, Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Chatbot } from './Chatbot';

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/shop' },
    { name: 'Industries', path: '/industries' },
    { name: 'Preparedness Hub', path: '/hub' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-navy-dark text-white font-sans">
      {/* Navigation */}
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled ? 'bg-navy-dark/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            <span className="font-display font-bold text-2xl tracking-tight">
              TRUENESS <span className="text-primary">BLUE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-gray-cool'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-sm font-medium uppercase tracking-wider text-sm transition-all hover-glow"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy-dark pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-2xl font-display font-bold uppercase tracking-wider',
                    location.pathname === link.path ? 'text-primary' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <span className="font-display font-bold text-2xl tracking-tight">
                  TRUENESS <span className="text-primary">BLUE</span>
                </span>
              </Link>
              <p className="text-gray-cool mb-6 max-w-sm">
                Advanced safety, health, and emergency solutions built to keep people, businesses, and communities ready.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer">
                  <span className="text-sm font-bold">tw</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Solutions</h4>
              <ul className="space-y-4">
                <li><Link to="/shop" className="text-gray-cool hover:text-primary transition-colors">First Aid</Link></li>
                <li><Link to="/shop" className="text-gray-cool hover:text-primary transition-colors">Fire Safety</Link></li>
                <li><Link to="/shop" className="text-gray-cool hover:text-primary transition-colors">PPE & Health</Link></li>
                <li><Link to="/shop" className="text-gray-cool hover:text-primary transition-colors">Disaster Prep</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-cool hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/industries" className="text-gray-cool hover:text-primary transition-colors">Industries</Link></li>
                <li><Link to="/hub" className="text-gray-cool hover:text-primary transition-colors">Preparedness Hub</Link></li>
                <li><Link to="/contact" className="text-gray-cool hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Stay Ready</h4>
              <p className="text-gray-cool text-sm mb-4">Get emergency planning tips and product updates.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-navy-dark border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-primary text-white"
                />
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-sm font-medium uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2">
                  Subscribe <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-cool">
            <p>&copy; {new Date().getFullYear()} Trueness Blue. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}
