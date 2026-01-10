export interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    content:
      "Alex has an incredible eye for detail and understands both design and development deeply. Working with them was a game-changer for our product. The interfaces they created aren't just beautiful—they solve real problems.",
    name: "Sarah Chen",
    role: "Product Manager at TechFlow",
  },
  {
    id: "2",
    content:
      "I've collaborated with many designers over the years, but Alex stands out. They think in systems, not just screens. Every component they designed fits perfectly into our larger product ecosystem. Highly recommend.",
    name: "Michael Torres",
    role: "Engineering Lead",
  },
  {
    id: "3",
    content:
      "Alex transformed our e-commerce platform. The new design increased our conversion rate significantly, and users consistently praise how intuitive everything feels. They truly understand user psychology and business goals.",
    name: "Emily Rodriguez",
    role: "CEO at EcoMarket",
  },
];

