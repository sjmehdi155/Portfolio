"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { dashboardDesigns } from "@/data/designs";

export default function DashboardDesigns() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/#design"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Design
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Dashboard Designs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Analytics dashboards, admin panels, and data visualization interfaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboardDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
                {design.images && design.images[0] ? (
                  <img 
                    src={design.images[0]} 
                    alt={design.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="text-6xl">{design.emoji}</div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{design.title}</h3>
                  <span className="text-sm text-gray-500">{design.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{design.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={design.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View on Behance
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}