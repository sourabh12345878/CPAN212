export type Blog = {
  title: string;
  description: string;   // short summary shown on the card
  date: string;          // YYYY-MM-DD
  readTime: string;      // e.g., "6 min read"
};

export const blogs: Blog[] = [
  {
    title: "Building a Bank Management System in Java",
    description:
      "How I designed a Java-based bank system with customers, accounts, branches, and transactions.",
    date: "2025-03-01",
    readTime: "8 min read",
  },
  {
    title: "Creating a Portfolio with Next.js & Tailwind CSS",
    description:
      "My process to build this portfolio using Next.js, Tailwind, and Framer Motion animations.",
    date: "2025-02-20",
    readTime: "6 min read",
  },
  {
    title: "MongoDB CRUD — Simple Guide with Examples",
    description:
      "Insert, update, delete, and find operations in MongoDB with commands I used in class.",
    date: "2025-02-15",
    readTime: "5 min read",
  },
  {
    title: "E-commerce Demo: Products, Cart, and Stripe",
    description:
      "What I learned building a small full-stack shop with product pages and a Stripe checkout.",
    date: "2025-02-10",
    readTime: "7 min read",
  },
  {
    title: "React Native Expense Tracker (Expo)",
    description:
      "A mobile app to track income/expenses with Expo, React Native, and local storage.",
    date: "2025-01-28",
    readTime: "6 min read",
  },
  {
    title: "Express Basics — Routes for Name, Greeting & Math",
    description:
      "Setting up an Express server with simple routes like /name, /greeting, /add, and /calculate.",
    date: "2025-01-20",
    readTime: "4 min read",
  },
];
