import project1 from "/assets/projects/project-1.png";
import project2 from "/assets/projects/project-2.png";
import project3 from "/assets/projects/project-3.png";
import project4 from "/assets/projects/project-4.png";

export const HERO = {
  name: "Sohaib Shah",
  title: "Full Stack Developer (Next.js, TypeScript)",
  subtitle:
    "I build fast, scalable, and user-focused web applications using Next.js, Tailwind CSS, and Node.js. With 5+ years of experience, I help startups and businesses turn ideas into polished, production-ready products.",
};

export const ABOUT_TEXT = [
  "I'm a full stack developer with 5+ years of professional experience, specializing in Next.js, React, and modern UI development. I've built and maintained production applications using TypeScript, Node.js, MongoDB, and Tailwind CSS, focusing on performance, accessibility, and clean architecture.",
  "I enjoy solving real-world problems, collaborating with cross-functional teams, and delivering features end-to-end. I'm comfortable working remotely, communicating clearly, and shipping reliably. Outside of development, I explore new technologies and contribute to open-source projects.",
];

export const EXPERIENCES = [
  {
    year: "2023-2025",
    role: "Full Stack Developer",
    company: "Connextar Technologies LTD",
    bullets: [
      "Built and optimized production web applications using Next.js, TypeScript, and Tailwind CSS.",
      "Improved UI/UX and performance across multiple projects.",
      "Collaborated with designers and backend teams to deliver features end-to-end.",
      "Recognized for outstanding contributions with an 84% salary increase and performance bonuses.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
  },
  {
    year: "2021-2023",
    role: "Web Developer Intern",
    company: "Connextar Technologies",
    bullets: [
      "Built responsive web interfaces with Next.js and Tailwind CSS.",
      "Completed a Full-Stack Web Development Bootcamp covering React, Node.js, MongoDB, and REST APIs.",
      "Assisted in developing and maintaining internal and client projects.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "MongoDB"],
  },
];

export const EDUCATION = [
  {
    year: "2019-2024",
    institution: "Islamic University of Tafheem ul Quran",
    program: "7-Year Certificate in Quranic Studies and Islamic Education",
    bullets: [
      "Advanced studies in Arabic, Quranic interpretation, and Islamic jurisprudence.",
      "Strengthened discipline, analytical thinking, and communication skills.",
    ],
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "GitHub",
      "Responsive Design",
      "UI/UX Best Practices",
      "Accessibility",
    ],
  },
];

export const PROJECTS = {
  featured: [
    {
      title: "Almansoor Academy - Full Education Platform (UK)",
      summary:
        "Full-scale education management platform built with Next.js, handling both frontend and backend, designed for real academic operations.",
      highlights: [
        "Built 4 role-based dashboards: Admin, Staff, Student, and Parent.",
        "Implemented authentication, authorization, and role-based access control.",
        "Developed bilingual English/Arabic support with RTL/LTR compatibility.",
        "Built scalable UI components with Tailwind CSS and optimized responsiveness.",
        "Integrated backend logic to manage users and academic data.",
      ],
      techStack: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "REST APIs",
        "i18n",
      ],
      liveUrl: "https://almansouracademy.co.uk/en",
      repoUrl: "",
    },
    {
      title: "Masjid App Suite - SaaS Platform & Subscription System (UK)",
      summary:
        "SaaS landing and subscription management platform with Stripe billing and subscription lifecycle management.",
      highlights: [
        "Built responsive marketing website with Next.js and Tailwind CSS.",
        "Implemented subscription plans and billing workflows.",
        "Integrated Stripe for secure subscription purchase and management.",
        "Built onboarding flow and subscription lifecycle logic.",
      ],
      techStack: ["Next.js", "Tailwind CSS", "Stripe API", "Node.js", "REST APIs"],
      liveUrl: "https://masjidappsuite.com/",
      repoUrl: "",
    },
  ],
  personal: [
    {
      title: "3D Portfolio Website",
      image: project1,
      summary:
        "Personal portfolio with 3D interactions showcasing responsive layout and performance.",
      highlights: [
        "Built with Next.js, Tailwind CSS, and Three.js for immersive visuals.",
        "Optimized layout for fast load times and smooth navigation.",
        "Focused on clear sections and recruiter-friendly content.",
      ],
      techStack: ["Next.js", "Tailwind CSS", "Three.js"],
      liveUrl: "https://sohaib.umairshah.dev/",
      repoUrl: "",
    },
    {
      title: "REST Countries API",
      image: project2,
      summary:
        "Country explorer with dark/light mode and detailed country data.",
      highlights: [
        "Integrated REST Countries API for real-time country information.",
        "Implemented dark/light theme toggle with responsive layout.",
        "Built filters and details views for quick exploration.",
      ],
      techStack: ["Next.js", "Tailwind CSS", "REST API"],
      liveUrl: "https://find-country-api.vercel.app/",
      repoUrl: "",
    },
    {
      title: "Age Calculator",
      image: project3,
      summary:
        "Frontend Mentor challenge delivering a clean and responsive age tool.",
      highlights: [
        "Implemented accurate age calculations with edge-case handling.",
        "Built a pixel-clean UI with Tailwind CSS and semantic HTML.",
        "Optimized for mobile and accessible form inputs.",
      ],
      techStack: ["HTML", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://turbosohaib.github.io/age-calculator-frontend-mentor/",
      repoUrl: "",
    },
    {
      title: "Chat App Illustration",
      image: project4,
      summary: "Stylized chat app illustration focused on layout and polish.",
      highlights: [
        "Recreated the design with pixel-level accuracy in HTML and Tailwind.",
        "Used layered gradients and spacing to match the mockup.",
        "Delivered a responsive layout with clean utility classes.",
      ],
      techStack: ["HTML", "Tailwind CSS"],
      liveUrl:
        "https://turbosohaib.github.io/chat-app-css-illustration-master-frontend-mentor/",
      repoUrl: "",
    },
  ],
};

export const CONTACT = {
  address: "Haji Korona Baghdada Mardan, kpk, Pakistan",
  phoneNo: "+92 3179949739",
  email: "turbosohaib1234@gmail.com",
};
