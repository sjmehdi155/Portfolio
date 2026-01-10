export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Senior UI/UX Designer",
    company: "TechFlow Inc.",
    period: "2022 - Present",
    description:
      "Leading design initiatives for a SaaS platform with 50K+ users. Collaborated with product and engineering teams to ship features that increased user engagement by 40%. Established design system and component library.",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Digital Studio",
    period: "2020 - 2022",
    description:
      "Built responsive web applications using React and Next.js. Worked closely with designers to implement pixel-perfect interfaces. Improved site performance by 60% through code optimization and best practices.",
  },
  {
    id: "3",
    title: "Junior Designer",
    company: "Creative Agency",
    period: "2019 - 2020",
    description:
      "Designed interfaces for various clients across industries. Created wireframes, prototypes, and high-fidelity mockups. Participated in user research and usability testing sessions.",
  },
];

export const education: EducationItem[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    school: "State University",
    period: "2015 - 2019",
    description:
      "Focused on software engineering and human-computer interaction. Graduated magna cum laude. Relevant coursework included web development, database systems, and software design patterns.",
  },
  {
    id: "2",
    degree: "UI/UX Design Certification",
    school: "Design Institute",
    period: "2019",
    description:
      "Intensive 12-week program covering design thinking, user research, prototyping, and design tools. Completed with distinction and portfolio project focused on mobile app design.",
  },
];

