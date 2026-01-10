"use client";

import { Mail, Github, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "LinkedIn", icon: ExternalLink, href: "https://linkedin.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Portfolio", icon: Globe, href: "https://behance.net" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Alex Rivera. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

