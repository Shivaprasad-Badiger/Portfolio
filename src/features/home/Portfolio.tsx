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

      // Check visibility of sections
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
    languages: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    libraries: ["React.js", "Redux Toolkit", "React Router", "Ant Design", "Material UI", "Tailwind CSS", "React Flow"],
    formsValidation: ["Formik", "Yup"],
    apiIntegration: ["REST APIs", "Webhooks", "WebSockets"],
    authentication: ["OAuth (Google, Facebook, Apple)"],
    paymentIntegration: ["Moyasar"],
    dashboardsCharts: ["Recharts", "ECharts", "ApexCharts"],
    tools: ["npm", "Babel", "Webpack", "Git", "GitHub"],
    other: ["Responsive Design", "Cross-Browser Compatibility", "Performance Optimization"],
  };

  const experiences = [
    {
      title: "React JS Developer",
      company: "Nexgensis Technologies Pvt. Ltd.",
      location: "Pune",
      period: "Oct 2023 – Present",
      description: "Results-driven React.js Front-End Developer with nearly 2 years of experience in developing modern, scalable, and responsive web applications. Expertise in React.js, Redux Toolkit, Formik, and REST APIs.",
      projects: [
        {
          name: "Recruitment Application (Saudi Client)",
          description:
            "Led the frontend of a role-based recruitment platform with dynamic screens for Admin, Recruiter, and Applicant. Integrated Google, Facebook, and Apple OAuth for seamless login. Delivered 100% mobile responsiveness and boosted form completion by 35%.",
        },
        {
          name: "Food Truck Platform (Saudi Client)",
          description:
            "Developed a mobile-responsive Customer Portal for truck discovery, order placement, and real-time order tracking. Built a comprehensive Merchant Panel including modules for order processing, booking management, profile setup, and truck configuration. Integrated Moyasar payment gateway and developed analytics dashboards using ECharts.",
        },
        {
          name: "Enterprise Product Suite",
          description:
            "Delivered reusable components for asset, ticketing, audit, and spare modules using Ant Design and Material UI. Managed global state with Redux Toolkit and handled complex multi-stage forms with Formik & Yup. Reduced repetitive code by 40%.",
        },
        {
          name: "IoT Traceability Application",
          description:
            "Developed real-time traceability UI for manufacturing processes. Implemented access control and Redux-managed state flow across modules like Product Config, Station, Material Setup, and Reports.",
        },
        {
          name: "Analytics Dashboards",
          description:
            "Integrated ECharts to provide real-time KPIs for traceability and workflow tracking. Collaborated closely with backend engineers and QA to deliver cohesive features in an Agile team of 4+, ensuring high API reliability and timely delivery under tight deadlines.",
        },
      ],
    },
    {
      title: "React JS Intern",
      company: "Fork Technologies Pvt. Ltd.",
      location: "Bangalore",
      period: "Mar 2023 – Sep 2023",
      description: "Enhanced dashboard UX and delivered responsive layouts with focus on interactive visualizations.",
      projects: [
        {
          name: "Integreon Project",
          description:
            "Built login/OTP authentication, dashboards, and modular UI components for Integreon project using React, Redux, and Ant Design. Enhanced dashboard UX and delivered responsive layouts with Styled Components and Material UI. Implemented ApexCharts for interactive visualization across KPIs.",
        },
      ],
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
            SHIVAPRASAD N BADIGER
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-8 text-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
            React JS Front-End Developer
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm tracking-widest text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91-9481006002
            </span>
            <span className="w-px h-4 bg-border"></span>
            <span
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() => window.location.href = 'mailto:shivabadiger2@gmail.com'}
            >
              <Mail className="h-4 w-4" />
              shivabadiger2@gmail.com
            </span>
            <span className="w-px h-4 bg-border"></span>
            <span
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() => window.open('https://www.linkedin.com/in/shivaprasad-badiger/', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </span>
            <span className="w-px h-4 bg-border"></span>
            <span
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() => window.open('https://github.com/Shivaprasad-Badiger', '_blank')}
            >
              <Github className="h-4 w-4" />
              GitHub
            </span>
            <span className="w-px h-4 bg-border"></span>
            {/* <span
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() => window.open('https://portfolio-omega-khaki-56.vercel.app/', '_blank')}
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
              transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.1
                }deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full border border-muted-foreground/10 animate-pulse"
            style={{
              transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.1
                }deg)`,
            }}
          ></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-24 px-6 transition-all duration-1000 ${isVisible.about
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
          }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            ABOUT
          </h2>
          <div className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto text-center">
            Results-driven React.js Front-End Developer with nearly 2 years of experience in developing modern, scalable, and
            responsive web applications. Expertise in React.js, Redux Toolkit, Formik, and REST APIs. Adept at crafting
            reusable components, integrating third-party services (OAuth, payments), and building interactive dashboards.
            Strong background in SaaS platforms across recruitment, IoT, food tech, and enterprise asset management.
            Passionate about performance, clean code, and user experience.
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-24 px-6 transition-all duration-1000 ${isVisible.skills
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className="bg-card/80 border-border backdrop-blur-md hover:scale-105 hover:shadow-lg transition-all duration-500 animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-4 capitalize tracking-wide text-card-foreground">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-24 px-6 transition-all duration-1000 ${isVisible.experience
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            EXPERIENCE
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
        className={`py-24 px-6 transition-all duration-1000 ${isVisible.projects
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin mb-16 text-center tracking-wider text-foreground">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/80 border-border backdrop-blur-md hover:scale-[1.02] hover:shadow-xl transition-all duration-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium mb-4 text-card-foreground">
                  Custom Form Builder & Interactive Preview
                </h3>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://github.com/Shivaprasad-Badiger/Custom-Form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://custom-form-jade.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Developed a dynamic form creation tool supporting 15+ configurable field types, including
                  custom validation using regex patterns. Utilized Formik and Yup for form handling and validation,
                  Ant Design for UI components, and Tailwind CSS for responsive layouts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Formik</Badge>
                  <Badge variant="outline">Yup</Badge>
                  <Badge variant="outline">Ant Design</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border backdrop-blur-md hover:scale-[1.02] hover:shadow-xl transition-all duration-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium mb-4 text-card-foreground">
                  Personal Portfolio
                </h3>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://github.com/Shivaprasad-Badiger/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://portfolio-omega-khaki-56.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Built a minimalist black-and-white themed portfolio website using Vite, React, TypeScript, and
                  Tailwind CSS. Showcased projects and skills with a clean, responsive UI featuring smooth animations
                  and interactive elements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Vite</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
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
        className={`py-24 px-6 transition-all duration-1000 ${isVisible.contact
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
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
              href="mailto:shivabadiger2@gmail.com"
              className="flex items-center gap-3 hover:scale-110 transition-transform duration-300 text-muted-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span>shivabadiger2@gmail.com</span>
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
              href="https://portfolio-omega-khaki-56.vercel.app/"
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
