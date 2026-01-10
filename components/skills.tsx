"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 92 },
      { name: "UX Research", level: 85 },
      { name: "Design Systems", level: 88 },
      { name: "User Testing", level: 80 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 93 },
      { name: "Next.js", level: 91 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Framer Motion", level: 88 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 },
      { name: "Node.js", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A blend of design thinking and technical execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

