export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  demo?: string;
  github?: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "TaskFlow - Productivity Platform",
    role: "Lead Designer & Developer",
    description:
      "A modern task management platform that helps teams collaborate seamlessly. Built with a focus on simplicity and powerful features hidden beneath an elegant interface.",
    problem:
      "Existing task management tools were either too complex or too simplistic. Teams needed something that balanced power with ease of use, without overwhelming users with options.",
    solution:
      "Designed an intuitive interface with progressive disclosure—advanced features are there when you need them, hidden when you don't. Implemented a clean, card-based layout with smooth animations that make work feel less like work.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma"],
    demo: "https://taskflow.demo",
    github: "https://github.com",
    emoji: "📋",
  },
  {
    id: "2",
    title: "EcoMarket - E-commerce Redesign",
    role: "UI/UX Designer",
    description:
      "Complete redesign of an e-commerce platform focused on sustainability. Increased conversion rates by 45% through improved user flows and visual hierarchy.",
    problem:
      "The original platform had confusing navigation, cluttered product pages, and a checkout process that lost customers at every step. Mobile experience was particularly poor.",
    solution:
      "Restructured the information architecture with clear categories and filters. Redesigned product cards with better imagery hierarchy and trust signals. Simplified checkout to three steps with clear progress indicators and saved payment methods.",
    tech: ["Figma", "React", "Next.js", "Stripe"],
    demo: "https://ecomarket.demo",
    emoji: "🛍️",
  },
  {
    id: "3",
    title: "HealthTrack - Fitness Dashboard",
    role: "Frontend Developer",
    description:
      "A comprehensive fitness tracking dashboard that visualizes health data beautifully. Real-time charts, goal tracking, and personalized insights in one cohesive interface.",
    problem:
      "Health apps bombard users with data but provide little context. Users wanted to understand their progress at a glance without digging through multiple screens.",
    solution:
      "Created a dashboard-first approach with customizable widgets. Used data visualization best practices to make complex health metrics digestible. Implemented smooth transitions and micro-interactions that celebrate achievements.",
    tech: ["React", "D3.js", "TypeScript", "Chart.js", "Tailwind CSS"],
    demo: "https://healthtrack.demo",
    github: "https://github.com",
    emoji: "💪",
  },
];

