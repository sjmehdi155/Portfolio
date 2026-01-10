"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { experiences, education } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 dark:bg-white rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-bold text-lg">{exp.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 dark:bg-white rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

