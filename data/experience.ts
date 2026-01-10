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
    company: "DecibelBPO",
    period: "2023 - Present",
    description:
      "Designed responsive and user-centered UI/UX interfaces aligned with business requirements. Collaborated with developers and QA teams for smooth design-to-development handoff. Conducted UI/UX research, R&D, and benchmarking to apply industry best practices. Reviewed team designs to maintain design consistency, usability, and quality standards. Prepared and maintained UI documentation to support implementation accuracy.",
  },
  {
    id: "2",
    title: "UI UX & Graphic Designer",
    company: "TechLabs",
    period: "2022 - 2023",
    description:
      "Designed user-centric UI screens for responsive web and mobile applications. Created wireframes, mockups, and prototypes to communicate design concepts effectively. Developed visual assets for marketing, including social  media, email campaigns, and print materials. Collaborated with cross-functional teams to deliver high- quality designs on time and within scope.",
  },
  {
    id: "3",
    title: "UI UX & Graphic Designer",
    company: "Pixact",
    period: "2020 - 2022",
    description:
      "Designed responsive websites, including e-commerce and portfolio platforms. Created wireframes, prototypes, and high-fidelity UI aligned with client goals and branding. Designed user interfaces for web and mobile applications based on user and project requirements. Managed multiple design projects while maintaining quality and meeting deadlines. Collaborated with developers and product managers to ensure accurate and timely implementation. Produced graphic designs for web, print, social media, and marketing campaigns. Developed brand identities, style guides, and marketing collateral to ensure consistent brand messaging.",
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

