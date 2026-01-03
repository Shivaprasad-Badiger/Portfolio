import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Building,
  ExternalLink,
  Globe,
} from "lucide-react";

import { IconThemeToggle } from "@/components/mode-toggle";
import { AnimatedBackground } from "@/components/AnimatedBackground";

type SectionId = "hero" | "about" | "experience" | "skills" | "projects" | "contact";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<SectionId, boolean>>({
    hero: true,
    about: false,
    experience: false,
    skills: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections: SectionId[] = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const newVisible: Record<SectionId, boolean> = { ...isVisible };
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisible[section] = rect.top < window.innerHeight * 0.8;
        }
      });
      setIsVisible(newVisible);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    librariesFrameworks: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Ant Design",
      "Material UI",
      "Tailwind CSS",
      "React Flow",
      "ECharts",
    ],
    formsValidation: ["Formik", "Yup"],
    apiIntegration: ["REST APIs", "WebSockets", "JWT Auth"],
    tools: ["npm", "Git", "GitHub", "Vite", "Webpack"],
  };

  const experiences = [
    {
      title: "React JS Developer",
      company: "Nexgensis Technologies Pvt. Ltd.",
      location: "Pune",
      period: "Oct 2023 – Present",
      description:
        "React.js Front-End Developer with 2 years experience. Delivered SaaS platforms across pharmaceutical, manufacturing, IoT, food tech, and recruitment domains.",
      projects: [
        {
          name: "Food Trucks Platform (Saudi)",
          description:
            "Built a multi-tenant food truck ecosystem with three React SPAs (Customer, Owner, Admin) using Redux Toolkit, Ant Design, Tailwind, Recharts, and Google Maps API. Delivered location-based truck discovery, real-time order tracking, payment checkout, booking flow, analytics and revenue dashboards, truck approval workflows, and full English/Arabic RTL support. Implemented map-based operational tools for owners and admins.",
        },
        {
          name: "Recruitment Platform (Saudi)",
          description:
            "Developed end-to-end recruitment workflow using React, Redux Toolkit, Ant Design, Formik/Yup, Tiptap rich editor, Chart.js, and i18next RTL. Implemented job portal, candidate application tracking, recruiter pipeline boards, interview scheduling, offer letter generation with digital signatures, and AI-powered resume parsing. Added role-based access, multi-language support, workflow customization, analytics dashboards.",
        },
        {
          name: "@nexgensis/core Component Library",
          description:
            "Created and published a 73-component enterprise UI library using React, Ant Design 5, Tailwind CSS, and Lucide icons. Added custom theming engine, light/dark mode, documentation site with live previews, and dual ES/UMD builds for seamless integration across multiple internal applications.",
        },
        {
          name: "Quality Management System (QMS)",
          description:
            "Developed an enterprise QMS using Redux Toolkit, Ant Design, React Flow and Tailwind CSS with modules for compliance, document control, LMS training, custom workflows, and FMEA risk management. Built dynamic form builder, multi-stage approval flows, dashboards, document versioning, and integrated an AI chatbot with semantic search.",
        },
        {
          name: "Manufacturing Execution System (MES)",
          description:
            "Built production monitoring and OEE dashboards using React, MUI, AntD, E-Charts. Implemented real-time machine status polling, breakdown logs, shift planning UI, rejection analysis, multi-plant navigation, and PDF/Excel export. Integrated 188 REST API endpoints for complete plant-wide visibility.",
        },
      ],
    },
  ];

const projects = [
  {
    name: "Custom Form Builder & Interactive Preview",
    github: "https://github.com/Shivaprasad-Badiger/Custom-Form",
    live: "https://custom-form-jade.vercel.app/",
    techStack: [
      "React",
      "JavaScript",
      "Formik",
      "Yup",
      "Ant Design",
      "Tailwind CSS"
    ],
    description:
      "Created a dynamic form builder supporting 15+ configurable fields with regex-based validation. Implemented robust form handling using Formik and Yup. Used Ant Design and Tailwind CSS for responsive UI.",
  },
  {
    name: "Personal Portfolio",
    github: "https://github.com/Shivaprasad-Badiger/Portfolio",
    live: "https://portfolio-omega-khaki-56.vercel.app/",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS"
    ],
    description:
      "Built a minimalist black-and-white themed portfolio using React, TypeScript, Vite, and Tailwind CSS. Features smooth animations, responsive UI, and clean project showcase.",
  },
];


  return (
    <div className="min-h-screen w-full transition-all duration-700 bg-background text-foreground relative">
      <AnimatedBackground />
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider text-foreground">
            SB
          </div>
          <IconThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="text-center z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-thin mb-4 tracking-wider text-foreground animate-fade-in">
            SHIVAPRASAD BADIGER
          </h1>
          <div
            className="text-2xl md:text-3xl font-light mb-8 text-primary animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            React JS Front-End Developer
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm tracking-widest text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91-9481006002
            </span>
            <span className="w-px h-4 bg-border"></span>
            <span
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() =>
                (window.location.href = "mailto:shivbadiger.dev@gmail.com")
              }
            >
              <Mail className="h-4 w-4" />
              shivbadiger.dev@gmail.com
            </span>
            <span className="w-px h-4 bg-border"></span>
            <span
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shivaprasad-badiger/",
                  "_blank"
                )
              }
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </span>
            <span className="w-px h-4 bg-border"></span>
            <span
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() =>
                window.open("https://github.com/Shivaprasad-Badiger", "_blank")
              }
            >
              <Github className="h-4 w-4" />
              GitHub
            </span>
            {/* <span className="w-px h-4 bg-border"></span>
            <span
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() =>
                window.open("http://shivbadiger.space/", "_blank")
              }
            >
              <Globe className="h-4 w-4" />
              Portfolio
            </span> */}
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-muted-foreground/10 animate-pulse"
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(${
                scrollY * 0.1
              }deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full border border-muted-foreground/10 animate-pulse"
            style={{
              transform: `translateY(${scrollY * -0.1}px) rotate(${
                scrollY * -0.1
              }deg)`,
            }}
          ></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-24 px-6 transition-all duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            ABOUT
          </h2>
          <div className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto text-center">
            React.js Front-End Developer with 2 years of experience in developing modern, scalable, and responsive web applications.
            Strong expertise in React.js, Redux Toolkit, Formik, enterprise UI libraries, and dashboard-driven interfaces.
            Experience delivering SaaS platforms across pharmaceutical, manufacturing, IoT, food tech, and recruitment domains.
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-24 px-6 transition-all duration-1000 ${
          isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/80 border-border backdrop-blur-md animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4 capitalize tracking-wide text-card-foreground">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border backdrop-blur-md animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4 capitalize tracking-wide text-card-foreground">
                  Libraries & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.librariesFrameworks.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border backdrop-blur-md animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4 capitalize tracking-wide text-card-foreground">
                  Forms & Validation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.formsValidation.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border backdrop-blur-md animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4 capitalize tracking-wide text-card-foreground">
                  API Integration
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.apiIntegration.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/80 border-border backdrop-blur-md animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4 capitalize tracking-wide text-card-foreground">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-24 px-6 transition-all duration-1000 ${
          isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card/80 border-border backdrop-blur-md hover:scale-[1.02] hover:shadow-xl transition-all duration-700 animate-fade-in"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-medium mb-2 text-card-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                        <span className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="space-y-6">
                    {exp.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="border-l-2 border-border pl-6"
                      >
                        <h4 className="text-lg font-medium mb-2 text-card-foreground">
                          {project.name}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-24 px-6 transition-all duration-1000 ${
          isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Card
                key={project.name}
                className="bg-card/80 border-border backdrop-blur-md hover:scale-[1.02] hover:shadow-xl transition-all duration-700"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium mb-4 text-card-foreground">
                    {project.name}
                  </h3>
                  <div className="flex gap-4 mb-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <Badge variant="outline" key={t}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            EDUCATION
          </h2>
          <Card className="bg-card/80 border-border backdrop-blur-md hover:scale-105 transition-all duration-500">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-medium mb-2 text-card-foreground">
                KLE Technological University
              </h3>
              <div className="text-lg text-primary mb-2">
                Bachelor of Engineering
              </div>
              <div className="text-muted-foreground mb-4">
                Hubballi
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>Aug 2018 – May 2022</span>
                <span className="w-px h-4 bg-border"></span>
                <span>CGPA: 8.11</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-24 px-6 transition-all duration-1000 ${
          isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-thin mb-16 tracking-wider text-foreground">
            CONTACT
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a
              href="tel:+919481006002"
              className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 text-muted-foreground hover:text-primary"
            >
              <Phone className="h-5 w-5" />
              <span>+91-9481006002</span>
            </a>
            <a
              href="mailto:shivbadiger.dev@gmail.com"
              className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 text-muted-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span>shivbadiger.dev@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shivaprasad-badiger/"
              className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Shivaprasad-Badiger"
              className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            {/* <a
              href="http://shivbadiger.space/"
              className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5" />
              <span>Portfolio</span>
            </a> */}
          </div>
          <div className="text-4xl font-thin tracking-widest text-muted-foreground">
            LET'S BUILD SOMETHING AMAZING
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground border-t border-border">
        <div className="text-sm tracking-wider">
          © 2024 Shivaprasad N Badiger. Crafted with precision.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
