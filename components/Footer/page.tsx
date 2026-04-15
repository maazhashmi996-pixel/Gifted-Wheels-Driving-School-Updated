"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-20 pb-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <img
                src="/Final logo.png"
                alt="Gifted Wheels Logo"
                className="h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
              Confidence behind the wheel starts here! Expert female-led
              guidance for a safer and more confident driving experience.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580819650511"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Manual Instagram SVG */}
              <a
                href="https://www.instagram.com/giftedwheelsds?igsh=MTIwY25tN291MHA5YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#E4405F] transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current text-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-10">
            <h3 className="text-lg font-bold mb-6">Quick Navigation</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="text-slate-400 hover:text-blue-400 flex items-center gap-2 group transition-colors font-medium"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-slate-300 font-bold">972-632-8113</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-slate-300 font-medium break-all text-sm">
                  Giftedwheelsdriving@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-slate-300 font-medium">Carrollton, TX</p>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Location</h3>
            <div className="rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
              {/* Updated Map Link for Accuracy */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107141.05608889423!2d-96.9634710178494!3d33.01166669894411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c24479e001851%3A0xa942a420b8f6738c!2sCarrollton%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Gifted Wheels Carrollton Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium order-2 md:order-1">
            © 2026 Gifted Wheels Driving.
          </p>

          <div className="order-1 md:order-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-xl"
            ></motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
