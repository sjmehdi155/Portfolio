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
              I’m Jaffar, a UI/UX Designer with 3+ years of experience crafting intuitive and visually engaging digital experiences. What started as curiosity about design and interfaces turned into a passion for building products that feel simple, clear, and meaningful for users.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My approach is straightforward: understand the user, design with purpose, and deliver with precision. I believe the best products are created when design, development, and strategy work together. That’s why I enjoy collaborating closely with developers and product teams to turn ideas into functional, user-centered interfaces.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              
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

