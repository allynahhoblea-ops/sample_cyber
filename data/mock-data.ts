import { LucideIcon, Shield, Target, Eye, BookOpen, Award, Flame, Zap, Map, FlaskConical, TrendingUp, Users } from "lucide-react";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "text" | "quiz" | "lab";
  completed: boolean;
  content?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  estimatedTime: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  thumbnail: string;
  instructor: string;
  rating: number;
  enrolledCount: number;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  courses: Course[];
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  color: string;
}

export interface UserProgress {
  coursesCompleted: number;
  totalCourses: number;
  currentTrack: string;
  overallProgress: number;
  lessonsCompleted: number;
  totalLessons: number;
  achievements: Achievement[];
  currentCourse: Course | null;
  currentLesson: Lesson | null;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
  type: "milestone" | "skill" | "streak";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

// Mock Lessons Data
const networkingLessons: Lesson[] = [
  {
    id: "l1",
    title: "Introduction to Networking",
    duration: "15 min",
    type: "video",
    completed: true,
    content: `
# Introduction to Networking

Networking is the foundation of modern computing and cybersecurity. In this lesson, we'll explore the fundamental concepts that every security professional needs to understand.

## What is a Network?

A computer network is a collection of interconnected devices that can communicate and share resources. These devices include:

- Computers and laptops
- Servers and data centers
- Routers and switches
- Mobile devices
- IoT devices

## The OSI Model

The OSI (Open Systems Interconnection) model is a conceptual framework that describes how data moves through a network in seven layers:

1. **Physical Layer** - Deals with physical connections
2. **Data Link Layer** - Handles MAC addresses and switching
3. **Network Layer** - Manages IP addressing and routing
4. **Transport Layer** - Controls TCP/UDP protocols
5. **Session Layer** - Manages connections between applications
6. **Presentation Layer** - Handles data formatting and encryption
7. **Application Layer** - User-facing protocols like HTTP, FTP

## Key Takeaways

- Networks enable communication between devices
- Understanding layers helps in troubleshooting
- Security must be considered at every layer
    `,
  },
  {
    id: "l2",
    title: "TCP/IP Protocol Suite",
    duration: "20 min",
    type: "video",
    completed: true,
    content: `
# TCP/IP Protocol Suite

The TCP/IP protocol suite is the backbone of the internet and most modern networks.

## TCP vs UDP

**TCP (Transmission Control Protocol)**
- Connection-oriented
- Reliable delivery
- Error checking
- Used for: HTTP, FTP, Email

**UDP (User Datagram Protocol)**
- Connectionless
- Fast but unreliable
- No error checking
- Used for: DNS, Streaming, Gaming

## IP Addressing

Every device on a network needs a unique identifier called an IP address.

### IPv4
- 32-bit address
- Format: 192.168.1.1
- Limited address space

### IPv6
- 128-bit address
- Format: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- Virtually unlimited addresses
    `,
  },
  {
    id: "l3",
    title: "Subnetting Fundamentals",
    duration: "25 min",
    type: "video",
    completed: false,
    content: `
# Subnetting Fundamentals

Subnetting is the practice of dividing a network into smaller sub-networks.

## Why Subnet?

- **Security** - Isolate sensitive systems
- **Performance** - Reduce broadcast traffic
- **Organization** - Logical grouping of devices

## Subnet Masks

A subnet mask determines which part of an IP address is the network portion and which is the host portion.

Common subnet masks:
- /8 (255.0.0.0) - Class A
- /16 (255.255.0.0) - Class B
- /24 (255.255.255.0) - Class C

## CIDR Notation

CIDR (Classless Inter-Domain Routing) provides a more flexible way to define subnets.

Example: 192.168.1.0/24 means:
- Network: 192.168.1.0
- Hosts: 192.168.1.1 - 192.168.1.254
- Broadcast: 192.168.1.255
    `,
  },
  {
    id: "l4",
    title: "Network Security Basics",
    duration: "30 min",
    type: "video",
    completed: false,
  },
  {
    id: "l5",
    title: "Hands-on Lab: Network Analysis",
    duration: "45 min",
    type: "lab",
    completed: false,
  },
];

const securityPlusLessons: Lesson[] = [
  {
    id: "sp1",
    title: "Security+ Overview",
    duration: "10 min",
    type: "video",
    completed: true,
  },
  {
    id: "sp2",
    title: "Threats, Attacks, and Vulnerabilities",
    duration: "45 min",
    type: "video",
    completed: true,
  },
  {
    id: "sp3",
    title: "Technologies and Tools",
    duration: "40 min",
    type: "video",
    completed: false,
  },
  {
    id: "sp4",
    title: "Architecture and Design",
    duration: "35 min",
    type: "video",
    completed: false,
  },
  {
    id: "sp5",
    title: "Practice Quiz",
    duration: "30 min",
    type: "quiz",
    completed: false,
  },
];

// Mock Courses Data
export const courses: Course[] = [
  {
    id: "c1",
    title: "Networking Fundamentals",
    description:
      "Master the core concepts of computer networking essential for cybersecurity professionals.",
    modules: [
      {
        id: "m1",
        title: "Network Basics",
        description: "Understanding how networks work",
        lessons: networkingLessons,
        estimatedTime: "2.5 hours",
      },
      {
        id: "m2",
        title: "Network Protocols",
        description: "Deep dive into network protocols",
        lessons: [
          {
            id: "np1",
            title: "HTTP and HTTPS",
            duration: "20 min",
            type: "video",
            completed: false,
          },
          {
            id: "np2",
            title: "DNS Deep Dive",
            duration: "25 min",
            type: "video",
            completed: false,
          },
          {
            id: "np3",
            title: "DHCP Explained",
            duration: "15 min",
            type: "video",
            completed: false,
          },
        ],
        estimatedTime: "1 hour",
      },
    ],
    difficulty: "beginner",
    estimatedTime: "8 hours",
    thumbnail: "/course-networking.jpg",
    instructor: "Dr. Sarah Chen",
    rating: 4.8,
    enrolledCount: 12500,
  },
  {
    id: "c2",
    title: "CompTIA Security+ Prep",
    description:
      "Comprehensive preparation for the Security+ certification exam.",
    modules: [
      {
        id: "sp-m1",
        title: "Security Fundamentals",
        description: "Core security concepts",
        lessons: securityPlusLessons,
        estimatedTime: "3 hours",
      },
    ],
    difficulty: "intermediate",
    estimatedTime: "40 hours",
    thumbnail: "/course-security-plus.jpg",
    instructor: "James Miller",
    rating: 4.9,
    enrolledCount: 28000,
  },
  {
    id: "c3",
    title: "Ethical Hacking Basics",
    description:
      "Learn the fundamentals of penetration testing and ethical hacking.",
    modules: [
      {
        id: "eh-m1",
        title: "Introduction to Ethical Hacking",
        description: "Understanding the hacker mindset",
        lessons: [
          {
            id: "eh1",
            title: "What is Ethical Hacking?",
            duration: "15 min",
            type: "video",
            completed: false,
          },
          {
            id: "eh2",
            title: "Legal and Ethical Considerations",
            duration: "20 min",
            type: "video",
            completed: false,
          },
          {
            id: "eh3",
            title: "Setting Up Your Lab",
            duration: "30 min",
            type: "lab",
            completed: false,
          },
        ],
        estimatedTime: "1.5 hours",
      },
    ],
    difficulty: "intermediate",
    estimatedTime: "25 hours",
    thumbnail: "/course-ethical-hacking.jpg",
    instructor: "Alex Rodriguez",
    rating: 4.7,
    enrolledCount: 15000,
  },
  {
    id: "c4",
    title: "Red Team Operations",
    description:
      "Advanced offensive security techniques for red team professionals.",
    modules: [
      {
        id: "rt-m1",
        title: "Red Team Fundamentals",
        description: "Understanding red team operations",
        lessons: [
          {
            id: "rt1",
            title: "Red Team vs Penetration Testing",
            duration: "20 min",
            type: "video",
            completed: false,
          },
          {
            id: "rt2",
            title: "Adversary Simulation",
            duration: "35 min",
            type: "video",
            completed: false,
          },
        ],
        estimatedTime: "2 hours",
      },
    ],
    difficulty: "advanced",
    estimatedTime: "60 hours",
    thumbnail: "/course-red-team.jpg",
    instructor: "Marcus Black",
    rating: 4.9,
    enrolledCount: 5000,
  },
  {
    id: "c5",
    title: "Blue Team Defense",
    description:
      "Master defensive security techniques and incident response.",
    modules: [
      {
        id: "bt-m1",
        title: "Defensive Security Basics",
        description: "Foundation of blue team operations",
        lessons: [
          {
            id: "bt1",
            title: "Introduction to Blue Teaming",
            duration: "15 min",
            type: "video",
            completed: false,
          },
          {
            id: "bt2",
            title: "Security Monitoring",
            duration: "30 min",
            type: "video",
            completed: false,
          },
        ],
        estimatedTime: "2.5 hours",
      },
    ],
    difficulty: "advanced",
    estimatedTime: "50 hours",
    thumbnail: "/course-blue-team.jpg",
    instructor: "Emily Watson",
    rating: 4.8,
    enrolledCount: 7500,
  },
  {
    id: "c6",
    title: "Threat Hunting",
    description:
      "Proactively search for threats and advanced persistent threats in your network.",
    modules: [
      {
        id: "th-m1",
        title: "Threat Hunting Methodology",
        description: "Systematic approach to threat hunting",
        lessons: [
          {
            id: "th1",
            title: "What is Threat Hunting?",
            duration: "20 min",
            type: "video",
            completed: false,
          },
          {
            id: "th2",
            title: "Hypothesis-Driven Hunting",
            duration: "25 min",
            type: "video",
            completed: false,
          },
        ],
        estimatedTime: "2 hours",
      },
    ],
    difficulty: "advanced",
    estimatedTime: "45 hours",
    thumbnail: "/course-threat-hunting.jpg",
    instructor: "Dr. Michael Torres",
    rating: 4.9,
    enrolledCount: 4200,
  },
];

// Mock Career Paths Data
export const careerPaths: CareerPath[] = [
  {
    id: "cp1",
    title: "Cybersecurity Analyst",
    description:
      "Start your journey in cybersecurity by learning to monitor, detect, and respond to security threats.",
    icon: "shield",
    courses: [courses[0], courses[1]],
    difficulty: "beginner",
    estimatedTime: "3 months",
    color: "primary",
  },
  {
    id: "cp2",
    title: "Penetration Tester",
    description:
      "Learn to think like a hacker and discover vulnerabilities before malicious actors do.",
    icon: "target",
    courses: [courses[0], courses[2], courses[3]],
    difficulty: "intermediate",
    estimatedTime: "6 months",
    color: "accent",
  },
  {
    id: "cp3",
    title: "SOC Analyst",
    description:
      "Become the first line of defense in a Security Operations Center.",
    icon: "eye",
    courses: [courses[0], courses[1], courses[4]],
    difficulty: "intermediate",
    estimatedTime: "4 months",
    color: "chart-3",
  },
];

// Mock User Progress Data
export const userProgress: UserProgress = {
  coursesCompleted: 1,
  totalCourses: 6,
  currentTrack: "Cybersecurity Analyst",
  overallProgress: 35,
  lessonsCompleted: 12,
  totalLessons: 45,
  achievements: [
    {
      id: "a1",
      title: "First Steps",
      description: "Completed your first lesson",
      icon: "Footprints",
      earnedAt: "2024-01-15",
      type: "milestone",
    },
    {
      id: "a2",
      title: "Network Ninja",
      description: "Completed Networking Fundamentals",
      icon: "Network",
      earnedAt: "2024-02-01",
      type: "skill",
    },
    {
      id: "a3",
      title: "Week Warrior",
      description: "7-day learning streak",
      icon: "Flame",
      earnedAt: "2024-02-10",
      type: "streak",
    },
    {
      id: "a4",
      title: "Quiz Master",
      description: "Score 100% on any quiz",
      icon: "Trophy",
      earnedAt: "2024-02-15",
      type: "milestone",
    },
  ],
  currentCourse: courses[1],
  currentLesson: securityPlusLessons[2],
};

// Mock Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jennifer Martinez",
    role: "Security Analyst",
    company: "TechCorp Inc.",
    avatar: "/avatar-1.jpg",
    content:
      "CyberPath transformed my career. The structured learning paths made it easy to go from IT support to a security analyst role in just 6 months.",
    rating: 5,
  },
  {
    id: "t2",
    name: "David Kim",
    role: "Penetration Tester",
    company: "SecureDefense",
    avatar: "/avatar-2.jpg",
    content:
      "The hands-on labs are incredible. I learned more practical skills here than in any other platform. Now I'm doing what I love as a pentester.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Rachel Thompson",
    role: "SOC Team Lead",
    company: "GlobalBank",
    avatar: "/avatar-3.jpg",
    content:
      "The career path approach is genius. Instead of random courses, I followed a clear roadmap that got me promoted twice in one year.",
    rating: 5,
  },
];

// Helper function to get course progress
export function getCourseProgress(courseId: string): number {
  const course = courses.find((c) => c.id === courseId);
  if (!course) return 0;

  let completedLessons = 0;
  let totalLessons = 0;

  course.modules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      totalLessons++;
      if (lesson.completed) completedLessons++;
    });
  });

  return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
}

// Helper function to get all lessons for a course
export function getCourseLessons(courseId: string): Lesson[] {
  const course = courses.find((c) => c.id === courseId);
  if (!course) return [];

  return course.modules.flatMap((module) => module.lessons);
}
