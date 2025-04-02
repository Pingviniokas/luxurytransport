import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luxury Transport | Premium Vehicle Rentals",
  description: "Experience luxury and comfort with our premium vehicle rental service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="bg-black text-white">
          {/* Upper Footer with Gradient */}
          <div className="bg-gradient-to-b from-black via-black/95 to-[#0c0c0c]">
            <div className="container-custom py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
                {/* Brand Column */}
                <div className="space-y-6">
                  <div className="flex items-center">
                    <h2 className="text-xl font-montserrat tracking-widest text-white">LUXURY<span className="text-gold">TRANSPORT</span></h2>
                  </div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Experience unparalleled luxury and comfort with our premium fleet of vehicles and professional chauffeur services.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-gold/10 hover:bg-gold/10 hover:text-gold transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 5.8a8.6 8.6 0 0 1-2.36.7 4.1 4.1 0 0 0 1.8-2.27 8.5 8.5 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.5 4.3a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 4 4 0 0 1-1.9.08 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.3a11.6 11.6 0 0 0 6.3 1.8A11.5 11.5 0 0 0 20 8.5v-.5A8.2 8.2 0 0 0 22 5.8z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-gold/10 hover:bg-gold/10 hover:text-gold transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-gold/10 hover:bg-gold/10 hover:text-gold transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-gold/10 hover:bg-gold/10 hover:text-gold transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-montserrat text-lg mb-5 border-b border-gold/20 pb-2">Quick Links</h3>
                  <ul className="space-y-3 text-gray-400 font-light">
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Home</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">About Us</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Our Fleet</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Services</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Pricing</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Contact</a></li>
                  </ul>
                </div>
                
                {/* Services */}
                <div>
                  <h3 className="text-white font-montserrat text-lg mb-5 border-b border-gold/20 pb-2">Our Services</h3>
                  <ul className="space-y-3 text-gray-400 font-light">
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Airport Transfers</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Corporate Travel</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Wedding Transportation</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Special Events</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">Roadshows</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors duration-300">City Tours</a></li>
                  </ul>
                </div>
                
                {/* Contact */}
                <div>
                  <h3 className="text-white font-montserrat text-lg mb-5 border-b border-gold/20 pb-2">Contact Us</h3>
                  <ul className="space-y-4 text-gray-400 font-light">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>123 Luxury Avenue, Berlin, Germany</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>info@luxurytransport.com</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+49 1234 567890</span>
                    </li>
                    <li className="mt-6">
                      <button className="btn-outline text-white border-gold hover:bg-gold/10 text-sm px-5 py-2 uppercase">
                        Book Now
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lower Footer with Copyright */}
          <div className="border-t border-gold/10">
            <div className="container-custom py-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm font-light mb-4 md:mb-0">
                © {new Date().getFullYear()} LuxuryTransport. All rights reserved.
              </div>
              
              <div className="flex space-x-6 text-sm text-gray-500 font-light">
                <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-gold transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
