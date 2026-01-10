"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const designItems = [
  { id: 1, category: "Dashboard", emoji: "📊", description: "Analytics Dashboard", href: "/design/dashboard" },
  { id: 2, category: "Mobile", emoji: "📱", description: "Mobile App UI", href: "/design/mobile" },
  { id: 3, category: "Web", emoji: "💻", description: "Web Application", href: "/design/web" },
  { id: 4, category: "Dashboard", emoji: "🎨", description: "Design System", href: "/design/dashboard" },
  { id: 5, category: "Mobile", emoji: "⚡", description: "Onboarding Flow", href: "/design/mobile" },
  { id: 6, category: "Web", emoji: "🔐", description: "Authentication UI", href: "/design/web" },
  { id: 7, category: "Dashboard", emoji: "📈", description: "Data Visualization", href: "/design/dashboard" },
  { id: 8, category: "Mobile", emoji: "🎯", description: "Profile Screen", href: "/design/mobile" },
  { id: 9, category: "Web", emoji: "🛒", description: "E-commerce Design", href: "/design/web" },
];

const categories = ["All", "Dashboard", "Mobile", "Web"];

export function DesignShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? designItems
      : designItems.filter((item) => item.category === activeCategory);

  return (
    <section id="design" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Design Showcase</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A collection of UI designs, dashboards, and interfaces I&apos;ve created.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <Link key={item.id} href={item.href}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 group-hover:scale-105">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

