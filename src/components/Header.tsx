import React, { useState, useRef, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { navItems } from '../data/nav';
import { useToast } from './ui/Toast';

export const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { showToast } = useToast();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (dropdownOpen) setDropdownOpen(false);
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dropdownOpen, mobileMenuOpen]);

  const handleAuthClick = (type: string) => {
    showToast(`Demo only — ${type} authentication is simulated`);
  };

  return (
    <header className="relative w-full pt-4 md:pt-6 px-3 sm:px-6 z-30">
      <div className="max-w-6xl mx-auto">
        <nav
          aria-label="Main Navigation"
          className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/60 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all"
        >
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#303640] hover:text-[#080D16] transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-500 rounded"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-[#5B6470] ${
                          dropdownOpen ? 'rotate-180 text-[#080D16]' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl bg-white shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-[#080D16] group-hover:text-[#0B77B0] transition-colors">
                              {child.label}
                            </div>
                            <div className="text-xs text-[#5B6470] mt-0.5 leading-relaxed">
                              {child.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-[#303640] hover:text-[#080D16] transition-colors py-1"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right auth actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleAuthClick('Login')}
              className="text-sm font-medium text-[#303640] hover:text-[#080D16] px-3 py-1.5 transition-colors cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => handleAuthClick('Sign Up')}
              className="bg-[#080D16] text-white hover:bg-black text-sm font-medium px-5 py-2 rounded-full transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 text-[#080D16] hover:bg-slate-100 rounded-full focus-visible:outline-2 focus-visible:outline-sky-500 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown sheet */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden mt-2 p-5 bg-white/98 backdrop-blur-lg rounded-3xl shadow-2xl border border-slate-100 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#303640] hover:text-[#080D16] px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAuthClick('Login');
                }}
                className="w-full text-center py-2.5 text-sm font-medium text-[#303640] hover:bg-slate-50 rounded-xl"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAuthClick('Sign Up');
                }}
                className="w-full py-2.5 bg-[#080D16] text-white text-sm font-medium rounded-full shadow-md"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
