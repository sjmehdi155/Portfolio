"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
              <Image
                src="/images/img.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey, I&apos;m Alex. I&apos;ve spent the last five years diving deep into the world of
              digital design and development. What started as curiosity about how websites
              work evolved into a passion for creating experiences that feel effortless.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My approach is simple: understand the problem, design with intention, and
              build with care. I believe great products happen when design and engineering
              work in harmony, not in silos. That&apos;s why I bridge both worlds—translating
              ideas into beautiful, functional interfaces.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not pushing pixels or writing code, you&apos;ll find me exploring new
              design systems, contributing to open-source projects, or sharing insights
              with the design community. I&apos;m always learning, always iterating, always
              pushing for better.
            </p>
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium">
                  UI/UX Designer
                </span>
                <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium">
                  Frontend Developer
                </span>
                <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

