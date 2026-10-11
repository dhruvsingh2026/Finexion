import React, { useState } from 'react';
import { footerNavigation, footerServices, footerContact } from '../data/footer';
import { useToast } from './ui/Toast';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setNewsletterStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!emailRegex.test(email)) {
      setNewsletterStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterStatus('success');
    setErrorMessage('');
    setEmail('');
    showToast('Subscribed! Sample newsletter confirmed.', 'success');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative p-2.5 sm:p-4 md:p-6 bg-[#F8F9FA]" role="contentinfo">
      <div className="rounded-[28px] sm:rounded-[36px] md:rounded-[44px] bg-[#080D16] text-white p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden">
        {/* Top: Giant Finexa Wordmark + Year */}
        <div className="pb-10 md:pb-14 border-b border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-sans font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white select-none leading-none">
            Finexa
          </h2>
          <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white/60 mb-2">
            <span>© 2026</span>
          </div>
        </div>

        {/* Middle Grid: Newsletter + Nav Columns */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 border-b border-white/10">
          {/* Newsletter Column */}
          <div className="md:col-span-5 lg:col-span-5">
            <h3 className="font-sans font-bold text-lg sm:text-xl text-white mb-2">
              Get News & Growth Tips
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mb-5 leading-relaxed">
              Receive actionable personal finance insights and platform updates directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (newsletterStatus !== 'idle') setNewsletterStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#D8FF4F] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#D8FF4F] hover:bg-[#cbf738] text-[#080D16] font-semibold text-sm transition-all hover:shadow-md cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </div>

              {/* Status Message */}
              <div aria-live="polite" className="text-xs mt-1.5 min-h-[20px]">
                {newsletterStatus === 'error' && (
                  <span className="text-rose-400 font-medium">{errorMessage}</span>
                )}
                {newsletterStatus === 'success' && (
                  <span className="text-emerald-400 font-medium">
                    Thanks — this is a demo, no email was saved.
                  </span>
                )}
              </div>

              <p className="text-[11px] text-white/40 mt-1">
                By subscribing you agree to our{' '}
                <a href="#privacy" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {footerNavigation.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {footerServices.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
                Social Share
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="#facebook"
                  aria-label="Finexa on Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  f
                </a>
                <a
                  href="#linkedin"
                  aria-label="Finexa on LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  in
                </a>
                <a
                  href="#instagram"
                  aria-label="Finexa on Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  ig
                </a>
                <a
                  href="#x"
                  aria-label="Finexa on X"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/60 border-b border-white/10">
          <div>
            <span className="block text-white/40 uppercase tracking-wider text-[10px] mb-0.5">Contact</span>
            <span className="font-medium text-white/80">{footerContact.phone}</span>
          </div>
          <div>
            <span className="block text-white/40 uppercase tracking-wider text-[10px] mb-0.5">Address</span>
            <span className="font-medium text-white/80">{footerContact.address}</span>
          </div>
          <div>
            <span className="block text-white/40 uppercase tracking-wider text-[10px] mb-0.5">Support Hours</span>
            <span className="font-medium text-white/80">{footerContact.hours}</span>
          </div>
        </div>

        {/* Bottom Legal Row & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© 2026 Finexa®. All rights reserved.</span>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/40 italic">
              Sample figures and testimonials are shown for demonstration purposes only.
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
