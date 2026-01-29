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
      "Jaffar is a dedicated and creative UI/UX designer with a strong grasp of user-centered design principles. During his time on Pixact, he consistently showed professionalism, attention to detail, and a genuine passion for learning. His ability to turn ideas into clean, functional, and visually appealing interfaces makes him a valuable asset for any team.",
    name: "Aziz Abidi",
    role: "CEO at Pixact",
  },
  {
    id: "2",
    content:
      "Jaffar is a highly motivated and skilled UI/UX designer with a strong eye for detail and usability. He approaches every project with creativity, clarity, and a problem-solving mindset. His ability to understand requirements and transform them into clean, user-friendly designs makes him a reliable and valuable professional.",
    name: "Abdul Wahid",
    role: "CEO at TechLabs",
  },
  {
    id: "3",
    content:
      "Jaffar is a creative and reliable UI/UX designer who brings clarity and structure to every project. His understanding of user experience, combined with clean visual design, helps turn ideas into practical and engaging digital products. He is focused, professional, and always eager to improve, making him a great asset for any team.",
    name: "Faisal Qamar",
    role: "CEO at DecibelBPO",
  },
];

