import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, Smartphone, Apple } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Mobile Apps', href: '#apps' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#privacy' },
];

const BRANDS = [
  {
    name: 'Jixxii',
    url: 'https://www.jixxii.com',
    display: 'www.jixxii.com',
    description: 'A digital platform delivering premium content and services to users worldwide through an elegant online experience.',
  },
  {
    name: 'Photobooth Kawaii',
    url: 'https://photobooth-kawaii.online',
    display: 'photobooth-kawaii.online',
    description: 'A creative online photobooth experience bringing fun, kawaii-style photo filters and frames to users everywhere.',
  },
];

const APPS = [
  {
    name: 'Wedding Guide and Tips',
    description: 'A comprehensive guide for planning your perfect wedding with expert tips and checklists.',
  },
  {
    name: 'Travel Knowledge: ASEAN & East Asia App',
    description: 'Explore destinations across ASEAN and East Asia with curated travel knowledge and cultural insights.',
  },
  {
    name: 'Food Recipe Philippines Encyclopedia',
    description: 'Discover authentic Filipino recipes, cooking techniques, and culinary traditions in one place.',
  },
  {
    name: 'Travel Philippines Encyclopedia',
    description: 'Your complete guide to exploring the Philippines — islands, heritage sites, festivals, and more.',
  },
];

function Header({ scrolled, mobileOpen, setMobileOpen }: { scrolled: boolean; mobileOpen: boolean; setMobileOpen: (v: boolean) => void }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-violet-dark/95 backdrop-blur-md shadow-lg shadow-violet-950/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/images/images_(1).jfif"
            alt="Joycyi LLC Logo"
            className="h-10 w-10 rounded-full object-cover border border-gold-DEFAULT/40 group-hover:border-gold-DEFAULT transition-all duration-300"
          />
          <span className="font-heading text-xl tracking-widest text-gradient-gold">JOYCYI LLC</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-gold-DEFAULT hover:text-gold-light transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-violet-dark/98 backdrop-blur-md border-t border-gold-DEFAULT/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm tracking-widest text-gold-200 hover:text-gold-DEFAULT transition-colors py-2 border-b border-violet-800/50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/images_(1).jfif')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-dark/85 via-violet-dark/70 to-violet-dark" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-DEFAULT/5 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="gold-line w-16 md:w-24" />
          <span className="mx-4 text-gold-DEFAULT font-heading text-xs tracking-[0.3em] uppercase">Est. 2022</span>
          <div className="gold-line w-16 md:w-24" />
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest mb-6 leading-tight">
          <span className="text-gradient-gold">JOYCYI</span>
          <span className="block text-white text-4xl md:text-5xl lg:text-6xl mt-2">LLC</span>
        </h1>

        <div className="gold-line max-w-xs mx-auto mb-8" />

        <h2 className="font-heading text-lg md:text-2xl tracking-widest text-violet-200 uppercase mb-6">
          Building Digital Brands, Websites,<br className="hidden md:block" /> and Mobile Applications
        </h2>

        <p className="font-body text-base md:text-lg text-violet-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Joycyi LLC develops online platforms and educational mobile applications that provide useful knowledge and services to users worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about" className="btn-gold">Discover More</a>
          <a href="#contact" className="btn-outline-gold">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-line opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-violet-700/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-gold-DEFAULT/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-heading text-xs tracking-[0.4em] text-gold-DEFAULT uppercase block mb-4">Who We Are</span>
          <h2 className="section-heading text-gradient-gold mb-6">About Joycyi LLC</h2>
          <div className="gold-line max-w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative inline-block mb-8">
              <img
                src="/images/images_(1).jfif"
                alt="Joycyi LLC"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-gold-DEFAULT/30 shadow-2xl shadow-violet-950/60"
              />
              <div className="absolute -inset-2 rounded-2xl border border-gold-DEFAULT/15 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-body text-violet-200 text-lg leading-relaxed">
              Joycyi LLC is an organization focused on creating digital brands, websites, and educational mobile applications. Our mission is to provide useful and accessible resources for people around the world through innovative web and mobile technologies.
            </p>
            <p className="font-body text-violet-300 leading-relaxed">
              We believe in the power of technology to educate, inspire, and connect people across boundaries. Each product we build reflects our commitment to quality, accessibility, and meaningful user experiences.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { number: '2+', label: 'Digital Brands' },
                { number: '4+', label: 'Mobile Apps' },
                { number: '∞', label: 'Global Reach' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 border border-gold-DEFAULT/20 rounded-xl bg-violet-900/20">
                  <div className="font-heading text-3xl text-gradient-gold mb-1">{stat.number}</div>
                  <div className="font-body text-xs text-violet-300 tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-line opacity-30" />
    </section>
  );
}

function BrandsSection() {
  return (
    <section id="brands" className="py-28 px-6 relative overflow-hidden bg-violet-950/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-700/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-heading text-xs tracking-[0.4em] text-gold-DEFAULT uppercase block mb-4">Our Portfolio</span>
          <h2 className="section-heading text-gradient-gold mb-6">Brands</h2>
          <div className="gold-line max-w-24 mx-auto mb-8" />
          <p className="font-body text-violet-300 max-w-xl mx-auto">
            Discover the digital brands and platforms built and managed by Joycyi LLC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="card-hover group relative bg-gradient-to-br from-violet-900/60 to-violet-950/60 border border-gold-DEFAULT/20 rounded-2xl p-8 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-DEFAULT/5 rounded-full blur-2xl group-hover:bg-gold-DEFAULT/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 flex items-center justify-center mb-6">
                  <ExternalLink size={20} className="text-gold-DEFAULT" />
                </div>

                <h3 className="font-heading text-xl tracking-widest text-white mb-2 uppercase">{brand.name}</h3>
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gold-DEFAULT text-sm hover:text-gold-light transition-colors mb-4 block"
                >
                  {brand.display}
                </a>
                <p className="font-body text-violet-300 text-sm leading-relaxed mb-6">{brand.description}</p>

                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading text-xs tracking-widest text-gold-DEFAULT hover:text-gold-light transition-colors uppercase group-hover:gap-3 duration-300"
                >
                  Visit Website
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppsSection() {
  return (
    <section id="apps" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 gold-line opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gold-DEFAULT/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-heading text-xs tracking-[0.4em] text-gold-DEFAULT uppercase block mb-4">Digital Products</span>
          <h2 className="section-heading text-gradient-gold mb-4">Mobile Apps</h2>
          <p className="font-heading text-sm tracking-widest text-violet-300 uppercase mb-6">Available on iOS and Android</p>
          <div className="gold-line max-w-24 mx-auto mb-8" />
          <p className="font-body text-violet-300 max-w-xl mx-auto">
            Educational and lifestyle mobile applications built by Joycyi LLC for users worldwide.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
          <div className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-gold-DEFAULT/30 bg-violet-900/40 backdrop-blur-sm">
            <Apple size={32} className="text-gold-DEFAULT" />
            <div>
              <div className="font-body text-xs text-violet-300 uppercase tracking-wide">Download on the</div>
              <div className="font-heading text-lg tracking-widest text-white">App Store</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-gold-DEFAULT/30 bg-violet-900/40 backdrop-blur-sm">
            <Smartphone size={32} className="text-gold-DEFAULT" />
            <div>
              <div className="font-body text-xs text-violet-300 uppercase tracking-wide">Get it on</div>
              <div className="font-heading text-lg tracking-widest text-white">Google Play</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {APPS.map((app, i) => (
            <div
              key={app.name}
              className="card-hover group relative bg-gradient-to-br from-violet-900/50 to-violet-950/50 border border-gold-DEFAULT/20 rounded-2xl p-7 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/0 to-gold-DEFAULT/0 group-hover:from-gold-DEFAULT/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10 flex gap-5 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-gold-DEFAULT/20 to-gold-DEFAULT/5 border border-gold-DEFAULT/30 flex items-center justify-center font-heading text-gold-DEFAULT text-lg font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading text-base tracking-widest text-white mb-2 uppercase leading-snug">{app.name}</h3>
                  <p className="font-body text-violet-300 text-sm leading-relaxed mb-4">{app.description}</p>
                  <span className="inline-flex items-center gap-2 font-body text-xs text-gold-DEFAULT/80 bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 px-3 py-1 rounded-full">
                    <Smartphone size={12} />
                    Available on iOS & Android
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-line opacity-30" />
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-violet-950/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-700/8 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <span className="font-heading text-xs tracking-[0.4em] text-gold-DEFAULT uppercase block mb-4">Reach Out</span>
        <h2 className="section-heading text-gradient-gold mb-6">Contact</h2>
        <div className="gold-line max-w-24 mx-auto mb-12" />

        <div className="bg-gradient-to-br from-violet-900/60 to-violet-950/60 border border-gold-DEFAULT/20 rounded-2xl p-12 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

          <div className="w-16 h-16 rounded-2xl bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 flex items-center justify-center mx-auto mb-8">
            <Mail size={28} className="text-gold-DEFAULT" />
          </div>

          <h3 className="font-heading text-xl tracking-widest text-white uppercase mb-4">Email</h3>
          <a
            href="mailto:support@joycyi.com"
            className="font-body text-gold-DEFAULT text-lg hover:text-gold-light transition-colors block mb-8"
          >
            support@joycyi.com
          </a>

          <div className="gold-line max-w-32 mx-auto mb-8" />

          <p className="font-body text-violet-300 text-base leading-relaxed">
            For inquiries and support, please contact us through email.
          </p>
        </div>
      </div>
    </section>
  );
}

function PrivacyPolicySection() {
  return (
    <section id="privacy" className="py-28 px-6 relative overflow-hidden bg-violet-950/30">
      <div className="absolute top-0 left-0 right-0 gold-line opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-violet-700/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-gold-DEFAULT/5 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-heading text-xs tracking-[0.4em] text-gold-DEFAULT uppercase block mb-4">Legal</span>
          <h2 className="section-heading text-gradient-gold mb-4">Privacy Policy</h2>
          <p className="font-body text-violet-400 text-sm mb-6">Last updated: June 27, 2026</p>
          <div className="gold-line max-w-24 mx-auto" />
        </div>

        <div className="space-y-10 font-body text-violet-200 leading-relaxed">
          <p>
            This Privacy Policy applies to all mobile and web applications published by{' '}
            <strong className="text-white">Joycyi LLC</strong> ("we," "us," or "our"),
            including all apps available on the Google Play Store and Apple App Store.
            This single policy is referenced from each individual app's store listing.
          </p>
          <p>
            By using any app or website published by Joycyi LLC, you agree to the
            collection and use of information in accordance with this policy.
          </p>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              1. Information We Collect
            </h3>
            <p className="mb-3">Depending on the specific app, we may collect the following types of information:</p>
            <p className="text-white font-semibold mb-1">Account Information</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-violet-300">
              <li>Email address (if you create an account or sign in)</li>
              <li>Name or display name (if provided)</li>
              <li>Password (stored securely and encrypted — we never see your plain-text password)</li>
            </ul>
            <p className="text-white font-semibold mb-1">Advertising &amp; Analytics Data</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-violet-300">
              <li>Device identifiers (such as Android Advertising ID)</li>
              <li>Approximate location (derived from IP address, for ad targeting purposes)</li>
              <li>App usage data (screens viewed, interactions, crash reports)</li>
              <li>Ad interaction data (impressions, clicks) via our advertising partners</li>
            </ul>
            <p className="text-white font-semibold mb-1">Automatically Collected Data</p>
            <ul className="list-disc pl-6 space-y-1 text-violet-300">
              <li>Device type, operating system, and app version</li>
              <li>General usage statistics used to improve app performance</li>
            </ul>
          </div>

          <p>
            Some of our apps are purely informational and do not require an account or
            collect personal data beyond what is described under Advertising &amp;
            Analytics above (if ads are present in that particular app).
          </p>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              2. How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-violet-300">
              <li>To provide and maintain the app's core functionality</li>
              <li>To create and manage your account, if applicable</li>
              <li>To display relevant advertisements through third-party ad networks</li>
              <li>To understand how the app is used so we can fix bugs and improve features</li>
              <li>To communicate with you regarding your account or support requests</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              3. Third-Party Services
            </h3>
            <p className="mb-3">
              Our apps may use third-party services that collect information used to
              identify you, as governed by their own privacy policies. These may include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-violet-300 mb-3">
              <li>
                <strong className="text-white">Google AdMob</strong> — for displaying advertisements (
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold-DEFAULT hover:text-gold-light">
                  Google Privacy Policy
                </a>)
              </li>
              <li><strong className="text-white">Google Play Services</strong> — for app distribution and core device functionality</li>
              <li>Other analytics or authentication providers, as disclosed within each app's Data Safety section on its Play Store listing</li>
            </ul>
            <p>
              We do not sell your personal data to third parties. Any data shared with
              the providers above is used solely to operate and improve the app, or to
              display advertising.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              4. Data Storage &amp; Security
            </h3>
            <p>
              We take reasonable measures to protect your information from unauthorized
              access, alteration, or disclosure. Account data, where applicable, is
              stored using industry-standard encrypted services. No method of
              transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              5. Data Retention &amp; Deletion
            </h3>
            <p>
              We retain account information for as long as your account remains active.
              You may request deletion of your account and associated personal data at
              any time by contacting us using the details below. We will respond to
              deletion requests within a reasonable timeframe, except where retention
              is required by law.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              6. Children's Privacy
            </h3>
            <p>
              Our apps are not directed at children under the age of 13 (or the
              applicable age in your jurisdiction), and we do not knowingly collect
              personal information from children. If you believe a child has provided
              us with personal information, please contact us so we can remove it.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              7. Your Rights
            </h3>
            <p>
              Depending on your location, you may have rights to access, correct, or
              delete your personal data, or to object to certain processing. To
              exercise any of these rights, contact us using the details below.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              8. Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated "Last updated" date. Continued use
              of any app after changes are posted constitutes acceptance of the
              revised policy.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base tracking-widest text-gold-light uppercase mb-4 border-b border-gold-DEFAULT/20 pb-2">
              9. Contact Us
            </h3>
            <div className="bg-violet-900/30 border border-gold-DEFAULT/20 rounded-xl p-6">
              <p className="mb-3">If you have any questions about this Privacy Policy, please contact us:</p>
              <p>
                <strong className="text-white">Developer:</strong> Joycyi LLC<br />
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:support@joycyi.com" className="text-gold-DEFAULT hover:text-gold-light">
                  support@joycyi.com
                </a><br />
                <strong className="text-white">Website:</strong>{' '}
                <a href="https://joycyi.com" className="text-gold-DEFAULT hover:text-gold-light">
                  joycyi.com
                </a>
              </p>
            </div>
          </div>

          <p className="text-sm text-violet-400 pt-4 border-t border-gold-DEFAULT/10">
            This privacy policy applies to all current and future applications published
            under the Joycyi LLC developer account, including Wedding Guide and Tips,
            Travel Knowledge: ASEAN &amp; East Asia, Food Recipe Philippines Encyclopedia,
            and Travel Philippines Encyclopedia.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0520] border-t border-gold-DEFAULT/20 pt-16 pb-8 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-gold-DEFAULT/3 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-violet-700/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/images_(1).jfif"
                alt="Joycyi LLC"
                className="h-10 w-10 rounded-full object-cover border border-gold-DEFAULT/40"
              />
              <span className="font-heading text-lg tracking-widest text-gradient-gold">JOYCYI LLC</span>
            </div>
            <p className="font-body text-violet-400 text-sm leading-relaxed">
              Building digital brands, websites, and educational mobile applications for users worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs tracking-[0.3em] text-gold-DEFAULT uppercase mb-6">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-violet-400 hover:text-gold-DEFAULT transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-xs tracking-[0.3em] text-gold-DEFAULT uppercase mb-6">Contact</h4>
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-gold-DEFAULT mt-1 flex-shrink-0" />
              <a
                href="mailto:support@joycyi.com"
                className="font-body text-sm text-violet-400 hover:text-gold-DEFAULT transition-colors"
              >
                support@joycyi.com
              </a>
            </div>
            <p className="font-body text-xs text-violet-500 mt-4 leading-relaxed">
              For inquiries and support, please contact us through email.
            </p>
          </div>
        </div>

        <div className="gold-line opacity-30 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-violet-500">
            &copy; 2026 Joycyi LLC. All rights reserved.
          </p>
          <p className="font-heading text-xs tracking-widest text-gold-DEFAULT/50 uppercase">
            joycyi.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-violet-dark">
      <Header scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <HeroSection />
        <AboutSection />
        <BrandsSection />
        <AppsSection />
        <ContactSection />
        <PrivacyPolicySection />
      </main>
      <Footer />
    </div>
  );
}