"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Code,
  GraduationCap,
  Star,
  Trophy,
  Target,
  Zap,
  Rocket,
  Brain,
  Database,
  Cloud,
  Globe,
  Server,
  Shield,
  GitBranch,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  CloudLightningIcon as Lightning,
  Layers,
  Box,
  Smartphone,
  Palette,
  Terminal,
  FileCode,
  Settings,
  Wifi,
  Activity,
  Crown, // For Chess
  Music, // For Guitar
  Gamepad2, // For Games
} from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

// Comprehensive tech stacks with icons
const techStacks = {
  languages: [
    {
      name: "Java",
      level: 90,
      icon: <FileCode className="w-5 h-5" />,
      color: "text-orange-500",
    },
    {
      name: "Python",
      level: 95,
      icon: <Brain className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      name: "C++",
      level: 85,
      icon: <Code className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      name: "JavaScript",
      level: 88,
      icon: <Globe className="w-5 h-5" />,
      color: "text-yellow-500",
    },
    {
      name: "SQL",
      level: 82,
      icon: <Database className="w-5 h-5" />,
      color: "text-blue-400",
    },
    {
      name: "Kotlin",
      level: 75,
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-purple-500",
    },
  ],
  frameworks: [
    {
      name: "React.js",
      level: 88,
      icon: <Globe className="w-5 h-5" />,
      color: "text-cyan-500",
    },
    {
      name: "Node.js",
      level: 82,
      icon: <Server className="w-5 h-5" />,
      color: "text-green-500",
    },
    {
      name: "FastAPI",
      level: 85,
      icon: <Lightning className="w-5 h-5" />,
      color: "text-green-400",
    },
    {
      name: "Next.js",
      level: 80,
      icon: <Layers className="w-5 h-5" />,
      color: "text-gray-800 dark:text-white",
    },
    {
      name: "TensorFlow",
      level: 80,
      icon: <Brain className="w-5 h-5" />,
      color: "text-orange-400",
    },
    {
      name: "Firebase",
      level: 78,
      icon: <Zap className="w-5 h-5" />,
      color: "text-yellow-600",
    },
  ],
  tools: [
    {
      name: "Docker",
      level: 80,
      icon: <Box className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      name: "Git",
      level: 90,
      icon: <GitBranch className="w-5 h-5" />,
      color: "text-orange-500",
    },
    {
      name: "AWS",
      level: 75,
      icon: <Cloud className="w-5 h-5" />,
      color: "text-orange-400",
    },
    {
      name: "Linux",
      level: 85,
      icon: <Terminal className="w-5 h-5" />,
      color: "text-gray-700 dark:text-gray-300",
    },
    {
      name: "VS Code",
      level: 95,
      icon: <Code className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      name: "Android Studio",
      level: 78,
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-green-500",
    },
  ],
  specializations: [
    {
      name: "Machine Learning",
      level: 85,
      icon: <Brain className="w-5 h-5" />,
      color: "text-purple-500",
    },
    {
      name: "Computer Vision",
      level: 82,
      icon: <Target className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      name: "NLP",
      level: 78,
      icon: <Sparkles className="w-5 h-5" />,
      color: "text-pink-500",
    },
    {
      name: "System Design",
      level: 85,
      icon: <Settings className="w-5 h-5" />,
      color: "text-gray-600",
    },
    {
      name: "RPA",
      level: 80,
      icon: <Activity className="w-5 h-5" />,
      color: "text-indigo-500",
    },
    {
      name: "Microservices",
      level: 83,
      icon: <Layers className="w-5 h-5" />,
      color: "text-teal-500",
    },
  ],
};

const projects = [
  {
    title: "easyEdits",
    subtitle: "AI Powered Video Editing Platform",
    description:
      "Developed platform enabling prompt-based video editing via natural language and AI function calling with distributed microservices architecture",
    tech: [
      "FastAPI",
      "FFmpeg",
      "OpenAI Whisper",
      "Google Gemini",
      "Microservices",
    ],
    achievements: [
      "Natural Language Processing",
      "Distributed Architecture",
      "Real-time Transcription",
      "Scene Detection",
    ],
    color: "from-purple-500 via-pink-500 to-red-500",
    icon: <Palette className="w-6 h-6" />,
    github: "https://github.com/swagatmitra22/easyEdits",
  },
  {
    title: "VCHECK",
    subtitle: "Real-time Uniform Compliance System",
    description:
      "Designed system using dual YOLOv8 models for 99% ID detection and 98% clothing compliance accuracy with GPU acceleration",
    tech: ["Python", "YOLOv8", "EasyOCR", "OpenCV", "Multi-threading"],
    achievements: [
      "99% ID Detection",
      "98% Compliance Accuracy",
      "GPU-Accelerated Pipeline",
      "OCR Integration",
    ],
    color: "from-blue-500 via-cyan-500 to-teal-500",
    icon: <Shield className="w-6 h-6" />,
    github: "https://github.com/swagatmitra22/VCHECK-Uniform-Compliance-System",
  },
  {
    title: "SONORIQ",
    subtitle: "Scalable Music Platform",
    description:
      "Developed full-stack music platform with real-time chat, collaborative playlists, and personalized recommendations",
    tech: ["ReactJS", "NodeJS", "Firebase", "WebSocket", "Caching"],
    achievements: [
      "1000+ Users",
      "Real-time Chat",
      "Collaborative Playlists",
      "Low-latency Streaming",
    ],
    color: "from-green-500 via-emerald-500 to-cyan-500",
    icon: <Wifi className="w-6 h-6" />,
    github: "https://github.com/swagatmitra22/Sonoriq",
  },
];

const experiences = [
  {
    company: "Accenture India",
    role: "Advanced Application Engineer Analyst Intern",
    duration: "May 2025 – July 2025",
    location: "Bengaluru, Karnataka",
    description:
      "Proposed and designed solutions to enhance existing RPA and AI tools, focusing on efficiency and scalability",
    achievements: [
      "RPA Enhancement",
      "AI Tool Development",
      "Microsoft Power Automate",
      "Workflow Automation",
    ],
    logo: "/ACN.svg?height=60&width=60&text=Accenture",
    color: "from-purple-600 to-blue-600",
  },
  {
    company: "Samsung R&D Institute",
    role: "Samsung PRISM Developer Intern",
    duration: "Aug 2024 – June 2025",
    location: "Bengaluru, Karnataka (Remote)",
    description:
      "Developed IDE plugin for energy smell detection in Kotlin code, improving code efficiency analysis by 35%",
    achievements: [
      "35% Efficiency Improvement",
      "Static Code Analysis",
      "Mobile App Optimization",
      "IDE Plugin Development",
    ],
    logo: "/samsungresearch_logo.jpg?height=60&width=60&text=Samsung",
    color: "from-blue-600 to-indigo-600",
  },
];

const achievements = [
  {
    title: "Licenses & Certifications",
    icon: <Award className="w-6 h-6" />,
    color: "text-blue-500",
    count: 15,
  },
  {
    title: "Amazon ML Challenge 2024",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-orange-500",
    count: "Top 9%",
  },
  {
    title: "Problems Solved",
    icon: <Code className="w-6 h-6" />,
    color: "text-green-500",
    count: 220,
  },
  {
    title: "CGPA",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-purple-500",
    count: 8.87,
  },
];

// Particle component
function Particles() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; delay: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  // Check if the target number is a float (has decimals)
  const isFloat = end % 1 !== 0;

  return (
    <span>
      {/* 
        If it's a float, display it with 2 decimal places.
        Otherwise, round it down to a whole number.
      */}
      {isFloat ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  );
}

function SkillBar({ skill, index }: { skill: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      onViewportEnter={() => {
        setIsVisible(true);
        setTimeout(() => setAnimationStarted(true), 200 + index * 100);
      }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="space-y-3 group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className={`${skill.color} transition-all duration-300`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill.icon}
          </motion.div>
          <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <motion.span
          className="text-sm text-muted-foreground font-mono tabular-nums"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            animationStarted
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          {animationStarted ? skill.level : 0}%
        </motion.span>
      </div>

      <div className="relative h-3 bg-muted rounded-full overflow-hidden shadow-inner">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" />

        {/* Animated progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full shadow-sm"
          style={{
            background: `linear-gradient(90deg, 
              hsl(var(--primary)) 0%, 
              hsl(var(--primary) / 0.8) 50%, 
              hsl(var(--secondary)) 100%)`,
          }}
          initial={{ width: "0%" }}
          animate={
            animationStarted ? { width: `${skill.level}%` } : { width: "0%" }
          }
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth easing
            delay: 0.3,
          }}
        >
          {/* Shimmer effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
            style={{
              backgroundSize: "200% 100%",
              animation: animationStarted
                ? "shimmer 2s ease-in-out infinite"
                : "none",
            }}
          />

          {/* Glowing end cap */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1 bg-white/60 rounded-r-full shadow-lg"
            initial={{ opacity: 0 }}
            animate={
              animationStarted ? { opacity: [0, 1, 0.7] } : { opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </motion.div>

        {/* Skill level indicator dot */}
        <motion.div
          className="absolute top-1/2 w-2 h-2 bg-primary rounded-full shadow-lg transform -translate-y-1/2 border border-background"
          initial={{ left: "0%" }}
          animate={
            animationStarted
              ? { left: `${Math.max(skill.level - 1, 0)}%` }
              : { left: "0%" }
          }
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
        />
      </div>

      {/* Skill level milestones */}
      <div className="flex justify-between text-xs text-muted-foreground/60 px-1">
        <span>Beginner</span>
        <span>Intermediate</span>
        <span>Advanced</span>
        <span>Expert</span>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group h-full"
    >
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/50">
          <div
            className={`h-1 bg-gradient-to-r ${project.color} animate-gradient`}
          />
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="group-hover:text-primary transition-colors text-lg sm:text-xl flex items-center gap-2">
                  {project.icon}
                  {project.title}
                </CardTitle>
                <CardDescription className="font-medium text-primary/80">
                  {project.subtitle}
                </CardDescription>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Rocket className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="space-y-2">
              {project.achievements.map((achievement: string) => (
                <motion.div
                  key={achievement}
                  className="flex items-center gap-2 text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Star className="w-3 h-3 text-yellow-500" />
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}
function ExperienceCard({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.3 }}
      className="relative group"
    >
      <Card className="hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-card to-card/50">
        <div
          className={`h-1 bg-gradient-to-r ${experience.color} animate-gradient`}
        />
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <motion.div
              className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <img
                src={experience.logo || "/placeholder.svg"}
                alt={`${experience.company} logo`}
                className="w-12 h-12 object-contain"
              />
            </motion.div>
            <div className="flex-1 space-y-2">
              <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                {experience.company}
              </CardTitle>
              <CardDescription className="font-medium text-primary/80 text-sm sm:text-base">
                {experience.role}
              </CardDescription>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.achievements.map((achievement: string) => (
              <Badge
                key={achievement}
                variant="outline"
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Zap className="w-3 h-3 mr-1" />
                {achievement}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl font-poppins text-primary/90 flex items-center gap-4"
            >
              <a href="#top">Swagat</a>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex items-center gap-2 bg-transparent text-[#b554fa] border-[#b554fa] hover:bg-[#b554fa]/10"
              >
                <a
                  href="https://drive.google.com/file/d/1I95gtqjoq1IOFb8XnMCeskNcIVYZP-6v/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileCode className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#experience">Experience</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#skills">Skills</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
              <ModeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-2">
              <ModeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t px-4 py-4 space-y-2"
            >
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full justify-start"
              >
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full justify-start"
              >
                <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                  Experience
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full justify-start"
              >
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full justify-start"
              >
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full justify-start"
              >
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </Button>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 dark:from-purple-500/20 dark:via-pink-500/10 dark:to-blue-500/20 animate-gradient" />
          <Particles />

          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-purple-500 p-1 animate-pulse-glow"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-4xl font-bold font-poppins bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    SM
                  </span>
                </div>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-7xl font-bold font-poppins bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-gradient pc-gap-under-swagatmitra"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Swagat Mitra
                </motion.h1>

                <motion.p
                  className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  AI/ML Engineer & Full-Stack Developer
                </motion.p>

                <motion.p
                  className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  BTech in Computer Science with specialization in AI & ML.
                  Passionate about building scalable solutions and exploring the
                  intersection of artificial intelligence and software
                  engineering.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-transparent"
                >
                  <a
                    href="https://github.com/swagatmitra22"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/swagat-mitra-a42340211/"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements
          {[
            {
              icon: <Crown className="w-8 h-8" />, // Chess (using Crown for chess king)
              position: "top-20 left-4 sm:left-10",
              delay: 0,
            },
            {
              icon: <Music className="w-8 h-8" />, // Guitar/Music
              position: "top-32 right-4 sm:right-16",
              delay: 1,
            },
            {
              icon: <Palette className="w-8 h-8" />, // Painting
              position: "bottom-32 left-8 sm:left-20",
              delay: 2,
            },
            {
              icon: <Gamepad2 className="w-8 h-8" />, // Games
              position: "bottom-20 right-8 sm:right-24",
              delay: 3,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: item.delay,
              }}
              className={`absolute ${item.position} w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-float`}
            >
              {item.icon}
            </motion.div>
          ))} */}
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors"
                >
                  <div
                    className={`mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-background flex items-center justify-center ${achievement.color} shadow-lg`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold font-poppins">
                      {achievement.title === "Amazon ML Challenge 2024" ? (
                        <span>Top 9%</span>
                      ) : (
                        <AnimatedCounter
                          end={
                            typeof achievement.count === "number"
                              ? achievement.count
                              : parseFloat(achievement.count)
                          }
                          suffix={
                            achievement.title === "Licenses & Certifications" ||
                            achievement.title === "Problems Solved"
                              ? "+"
                              : ""
                          }
                        />
                      )}
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm text-muted-foreground">
                      {achievement.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-poppins bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Currently pursuing BTech in Computer Science & Engineering with
                specialization in AI & ML at Vellore Institute of Technology
                with a CGPA of 8.87/10.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-base sm:text-lg">
                        Vellore Institute of Technology
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        BTech in Computer Science & Engineering w/s in AI & ML
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sept 2022 – Present | CGPA: 8.87/10
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-3">
                        Relevant Coursework:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures & Algorithms",
                          "Artificial Intelligence",
                          "Machine Learning",
                          "Deep Learning",
                          "AWS Solutions Architect",
                          "Computer Networks",
                          "Cryptography & Network Security",
                          "Database Management",
                          "Compiler Design",
                          "Operating System",
                        ].map((course) => (
                          <Badge
                            key={course}
                            variant="outline"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <Code className="w-5 h-5 text-primary" />
                      Coding Profiles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base">
                        LeetCode Problems
                      </span>
                      <Badge variant="secondary" className="font-mono">
                        <AnimatedCounter end={120} />+
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base">
                        Codeforces Rating
                      </span>
                      <Badge variant="secondary" className="font-mono">
                        <AnimatedCounter end={1072} />
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base">
                        Total Problems Solved
                      </span>
                      <Badge variant="secondary" className="font-mono">
                        <AnimatedCounter end={220} />+
                      </Badge>
                    </div>
                    <div className="pt-4 space-y-2">
                      <p className="text-sm font-medium">Platforms:</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Codeforces",
                          "LeetCode",
                          "CodeChef",
                          "HackerRank",
                        ].map((platform) => (
                          <Badge
                            key={platform}
                            variant="outline"
                            className="text-xs"
                          >
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-poppins bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Professional experience in AI/ML development and automation
                solutions
              </p>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.company}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-poppins bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Innovative solutions combining AI, machine learning, and
                full-stack development
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-poppins bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Comprehensive proficiency across various technologies and
                frameworks
              </p>
            </motion.div>

            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 h-auto p-1">
                <TabsTrigger
                  value="languages"
                  className="text-xs sm:text-sm px-2 sm:px-3"
                >
                  Languages
                </TabsTrigger>
                <TabsTrigger
                  value="frameworks"
                  className="text-xs sm:text-sm px-2 sm:px-3"
                >
                  Frameworks
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="text-xs sm:text-sm px-2 sm:px-3"
                >
                  Tools
                </TabsTrigger>
                <TabsTrigger
                  value="specializations"
                  className="text-xs sm:text-sm px-2 sm:px-3"
                >
                  AI/ML
                </TabsTrigger>
              </TabsList>

              {Object.entries(techStacks).map(([category, skills]) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-poppins bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Let's connect and discuss opportunities in AI/ML and software
                development
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      {
                        href: "mailto:swagatmitra2004@gmail.com",
                        icon: <Mail className="w-6 h-6 text-primary" />,
                        title: "Email",
                        subtitle: "swagatmitra2004@gmail.com",
                        color: "hover:bg-blue-50 dark:hover:bg-blue-950/20",
                      },
                      {
                        href: "tel:+917601836517",
                        icon: <Phone className="w-6 h-6 text-green-500" />,
                        title: "Phone",
                        subtitle: "+91 7601836517",
                        color: "hover:bg-green-50 dark:hover:bg-green-950/20",
                      },
                      {
                        href: "https://www.linkedin.com/in/swagat-mitra-a42340211/",
                        icon: <Linkedin className="w-6 h-6 text-blue-600" />,
                        title: "LinkedIn",
                        subtitle: "Connect with me",
                        color: "hover:bg-blue-50 dark:hover:bg-blue-950/20",
                      },
                      {
                        href: "https://github.com/swagatmitra22",
                        icon: (
                          <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        ),
                        title: "GitHub",
                        subtitle: "View my code",
                        color: "hover:bg-gray-50 dark:hover:bg-gray-950/20",
                      },
                    ].map((contact, index) => (
                      <motion.a
                        key={contact.title}
                        href={contact.href}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-4 p-4 sm:p-6 rounded-lg border transition-all duration-300 ${contact.color}`}
                      >
                        <div className="flex-shrink-0">{contact.icon}</div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-sm sm:text-base">
                            {contact.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">
                            {contact.subtitle}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">© 2024 Swagat Mitra</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
