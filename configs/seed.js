import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { db } from "./db.js";
import { courses, announcements } from "./schema.js";
import { sql } from "drizzle-orm";

const initialCourses = [
  {
    title: "Next.js Full-Stack Development",
    slug: "nextjs-fullstack-development",
    description: "Build Modern, Scalable & Production-Ready Web Applications with Next.js 16, React 19, Node.js, and PostgreSQL.",
    fullDescription: "Master full-stack web development with Next.js, React.js, Tailwind CSS, Node.js, PostgreSQL, Authentication, and API integrations. Build real-world projects from scratch to deployment.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    duration: "90+ Hours | Beginner to Advanced",
    instructor: "Statixflow Tech Team",
    level: "Beginner to Advanced",
    price: "Free",
    badge: "Internship & Training",
    keyFeatures: JSON.stringify([
      "JavaScript (ES6+, Async/Await, DOM & Fetch API)",
      "React.js (Components, Hooks, Props & State)",
      "Next.js (App Router, Server Components & Server Actions)",
      "Tailwind CSS (Responsive Design & Animations)",
      "Node.js (Backend Fundamentals & REST APIs)",
      "PostgreSQL (Database Tables, SQL CRUD & Drizzle ORM)",
      "Authentication (JWT, Cookies & Protected Routes)",
      "Deployment (Environment Variables & Production Hosting)"
    ]),
    tags: JSON.stringify(["Full-Stack", "Next.js", "React", "PostgreSQL", "Tailwind CSS", "API Integration"]),
    keyOutcome: "Learn → Build → Deploy → Become Full-Stack Ready",
    modules: JSON.stringify([
      { title: "Module 1: JavaScript Fundamentals (10 hrs)", desc: "ES6+ & Modern JS, Functions, Async/Await, DOM & Fetch API" },
      { title: "Module 2: React.js Deep Dive (15 hrs)", desc: "Components & JSX, Props & State, React Hooks, Forms & Events" },
      { title: "Module 3: Next.js App Router (18 hrs)", desc: "App Router, Server & Client Components, API Routes & Server Actions" },
      { title: "Module 4: Tailwind CSS Styling (8 hrs)", desc: "Responsive Design, Flexbox & Grid, Animations & Custom Styling" },
      { title: "Module 5: Node.js & Backend (12 hrs)", desc: "Backend Fundamentals, REST APIs, Middleware & Express" },
      { title: "Module 6: PostgreSQL Database (12 hrs)", desc: "Database & Tables, SQL CRUD, Drizzle ORM Integration" },
      { title: "Module 7: Authentication & Roles (8 hrs)", desc: "JWT & Sessions, Cookies, Protected Routes, Authorization" },
      { title: "Module 8: API Integration (7 hrs)", desc: "REST APIs (GET, POST, PUT, DELETE), Third-Party APIs, Frontend Integration" },
      { title: "Module 9: Git & GitHub Workflows (5 hrs)", desc: "Git Basics, Branching, Pull Requests & Team Collaboration" },
      { title: "Module 10: Production Deployment (5 hrs)", desc: "Environment Variables, Production Build, Domain & Cloud Hosting" }
    ])
  },
  {
    title: "Linux Administration & AWS Cloud & DevOps Engineering",
    slug: "linux-aws-devops-engineering",
    description: "Master AWS from fundamentals to production-grade architecture. Build highly available, scalable, and secure cloud infrastructure like Fortune 500 companies.",
    fullDescription: "Master AWS, Linux administration, Docker, Kubernetes, Jenkins, Terraform, CloudWatch, and DevSecOps. Gain hands-on experience building enterprise-grade cloud environments.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
    category: "Cloud & DevOps",
    duration: "80+ Hours | Beginner to Advanced",
    instructor: "Senior AWS Architect",
    level: "Beginner to Advanced",
    price: "Free",
    badge: "Trending",
    keyFeatures: JSON.stringify([
      "Linux & Shell Scripting",
      "AWS Fundamentals (EC2, S3, VPC, IAM, RDS)",
      "AWS Advanced Architecture & Solutions",
      "Docker & Kubernetes Orchestration",
      "CI/CD Pipelines (Jenkins)",
      "Terraform Infrastructure as Code",
      "Monitoring with CloudWatch & Prometheus",
      "AWS DevSecOps & Security Best Practices"
    ]),
    tags: JSON.stringify(["Cloud Architecture", "Infrastructure Automation", "DevOps", "Security"]),
    testimonial: '"StatixFlow transformed my career. Within 3 months of completing the DevOps course, I landed a job at a Fortune 500 company!" — Tejas Khade, Lead SRE at BBI',
    modules: JSON.stringify([
      { title: "Module 1: Linux Fundamentals (10 hrs)", desc: "Linux architecture, commands, shell scripting, package management" },
      { title: "Module 2: AWS Core Services (15 hrs)", desc: "EC2 instances, S3 storage, VPC networking, IAM security, RDS databases" },
      { title: "Module 3: AWS Advanced (12 hrs)", desc: "Auto Scaling, Load Balancing, CloudFormation, Solutions Architect patterns" },
      { title: "Module 4: Docker & Kubernetes (15 hrs)", desc: "Container fundamentals, Docker Compose, K8s deployments, service mesh" },
      { title: "Module 5: CI/CD & IaC (18 hrs)", desc: "Jenkins, Terraform, Ansible" },
      { title: "Module 6: Monitoring & Security (10 hrs)", desc: "CloudWatch, Prometheus, DevSecOps, compliance, cost optimization" }
    ])
  },
  {
    title: "Java + Selenium Automation Testing",
    slug: "java-selenium-automation-testing",
    description: "Build production-grade automation testing frameworks. Master Java, Selenium WebDriver, TestNG, BDD, and CI/CD integration for enterprise-level QA.",
    fullDescription: "Comprehensive test automation course covering Manual Testing, Core Java, Selenium WebDriver, TestNG, Cucumber BDD, Maven, Git, and Jenkins CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    category: "Automation & QA",
    duration: "60+ Hours | Beginner to Intermediate",
    instructor: "Lead QA Automation Engineer",
    level: "Beginner to Intermediate",
    price: "Free",
    badge: "High Demand",
    keyFeatures: JSON.stringify([
      "Manual Testing & SDLC/STLC Fundamentals",
      "Core Java (OOPs, Collections, Exception Handling)",
      "Selenium WebDriver Deep Dive (XPath/CSS, POM)",
      "TestNG Framework & Data-Driven Testing",
      "BDD with Cucumber & Gherkin Syntax",
      "Maven Build Automation",
      "Git & GitHub Version Control",
      "Jenkins CI/CD Pipeline Integration"
    ]),
    tags: JSON.stringify(["Automation Testing", "Java Programming", "Framework Design", "CI/CD"]),
    keyOutcome: "Build a Complete Automation Framework from Scratch",
    modules: JSON.stringify([
      { title: "Module 1: Manual Testing Basics (6 hrs)", desc: "SDLC, STLC, test case design (BVA, equivalence partitioning), defect reporting" },
      { title: "Module 2: Core Java (12 hrs)", desc: "Variables, loops, OOPs (inheritance, polymorphism), collections, exception handling" },
      { title: "Module 3: Selenium WebDriver (14 hrs)", desc: "WebDriver architecture, locators (XPath/CSS), implicit/explicit waits, POM pattern" },
      { title: "Module 4: TestNG & Data-Driven (8 hrs)", desc: "Annotations, DataProvider, parallel execution, test configuration" },
      { title: "Module 5: BDD & Cucumber (8 hrs)", desc: "Gherkin syntax, feature files, step definitions, Selenium integration" },
      { title: "Module 6: Build & CI/CD (12 hrs)", desc: "Maven (pom.xml, dependencies), Git/GitHub workflows, Jenkins pipelines" }
    ])
  },
  {
    title: "Playwright & AI-Powered Automation Testing",
    slug: "playwright-ai-automation-testing",
    description: "Enter the future of testing. Master Playwright, JavaScript/TypeScript, and AI-powered autonomous testing agents. Build self-healing tests powered by LLMs and RAG.",
    fullDescription: "Learn next-generation testing using Playwright, JavaScript/TypeScript, Prompt Engineering, MCP, N8N workflows, RAG, and autonomous self-healing testing agents.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    category: "Automation & QA",
    duration: "70+ Hours | Intermediate to Advanced",
    instructor: "AI & QA Specialist",
    level: "Intermediate to Advanced",
    price: "Free",
    badge: "Future Tech",
    keyFeatures: JSON.stringify([
      "JavaScript/TypeScript Essentials (Async/Await, ES6+)",
      "Playwright Architecture & Browser Automation",
      "Cross-browser & API Testing with Playwright",
      "Advanced Prompt Engineering for AI",
      "Model Context Protocol (MCP) Integration",
      "N8N Workflow Automation & LangFlow Pipelines",
      "RAG for Enterprise Knowledge Systems",
      "Building Autonomous AI Testing Agents"
    ]),
    tags: JSON.stringify(["Modern Testing", "AI Integration", "Autonomous Agents", "Prompt Engineering"]),
    keyOutcome: "Build Autonomous AI Testing Agents with 98% autonomy",
    modules: JSON.stringify([
      { title: "Module 1: JS/TS Fundamentals (8 hrs)", desc: "Variables, async/await, promises, TypeScript interfaces, ES6+ features" },
      { title: "Module 2: Playwright Deep Dive (16 hrs)", desc: "Architecture, browser contexts, auto-waiting, cross-browser testing, API testing" },
      { title: "Module 3: Prompt Engineering (6 hrs)", desc: "Zero-shot/few-shot prompting, role-based strategies, structured outputs" },
      { title: "Module 4: AI Integration Tools (10 hrs)", desc: "MCP (Model Context Protocol), N8N workflows, LangFlow pipelines" },
      { title: "Module 5: RAG & Knowledge Systems (8 hrs)", desc: "Document chunking, embeddings, vector databases, semantic search" },
      { title: "Module 6: Agentic Testing (12 hrs)", desc: "Autonomous agent design, self-discovery, self-healing, self-reporting" },
      { title: "Module 7: Production Deployment (10 hrs)", desc: "Agent orchestration, monitoring, production-grade deployment, scaling" }
    ])
  },
  {
    title: "Data Science & AI Fundamentals",
    slug: "data-science-ai-fundamentals",
    description: "Learn the language of data. Master Python, data manipulation, machine learning algorithms, and real-world predictive analytics for enterprise applications.",
    fullDescription: "Master Python programming, Pandas, NumPy, Exploratory Data Analysis, Supervised & Unsupervised Machine Learning, Deep Learning, and Generative AI fundamentals.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Data Science & AI",
    duration: "50+ Hours | Beginner to Intermediate",
    instructor: "Data Science Lead",
    level: "Beginner to Intermediate",
    price: "Free",
    badge: "High Growth",
    keyFeatures: JSON.stringify([
      "Python Programming Fundamentals",
      "Data Manipulation with Pandas & NumPy",
      "Exploratory Data Analysis (EDA) & Visualization",
      "Supervised Learning (Regression, Classification)",
      "Unsupervised Learning (Clustering, PCA)",
      "Model Evaluation & Feature Engineering",
      "Deep Learning & Neural Networks Intro",
      "NLP, Generative AI & Ethics"
    ]),
    tags: JSON.stringify(["Python", "ML Algorithms", "Data Analysis", "Predictive Modeling"]),
    keyOutcome: "Build real-world ML models used in production",
    modules: JSON.stringify([
      { title: "Module 1: Python Fundamentals (6 hrs)", desc: "Variables, loops, functions, libraries, data structures" },
      { title: "Module 2: Data Manipulation (8 hrs)", desc: "Pandas DataFrames, NumPy arrays, data cleaning, transformation" },
      { title: "Module 3: EDA & Visualization (7 hrs)", desc: "Matplotlib, Seaborn, exploratory analysis, insights extraction" },
      { title: "Module 4: Supervised Learning (10 hrs)", desc: "Linear/logistic regression, decision trees, ensemble methods" },
      { title: "Module 5: Unsupervised Learning (6 hrs)", desc: "K-means clustering, hierarchical clustering, PCA" },
      { title: "Module 6: Model Evaluation (5 hrs)", desc: "Cross-validation, performance metrics, hyperparameter tuning" },
      { title: "Module 7: Deep Learning Intro (5 hrs)", desc: "Neural networks basics, TensorFlow/Keras, computer vision intro" },
      { title: "Module 8: NLP & Generative AI (7 hrs)", desc: "Text processing, embeddings, LLMs, ChatGPT API, ethical AI" }
    ])
  },
  {
    title: "Azure DevOps & AI Automation Engineering",
    slug: "azure-devops-ai-automation-engineering",
    description: "Master Microsoft Azure from fundamentals to enterprise-grade DevSecOps. Learn real-world networking, security, Terraform IaC, AKS, and AI-powered cloud automation used by top cloud teams globally.",
    fullDescription: "Deep dive into Azure cloud computing, governance, networking, Defender security, AKS, Terraform IaC, Azure DevOps CI/CD pipelines, and AI automation for cloud engineers.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    category: "Cloud & DevOps",
    duration: "60+ Hours | Beginner to Advanced",
    instructor: "Enterprise Azure Architect",
    level: "Beginner to Advanced",
    price: "Free",
    badge: "Enterprise",
    keyFeatures: JSON.stringify([
      "Azure Fundamentals & Global Infrastructure",
      "Governance, RBAC & Azure Policy",
      "Advanced Networking & Hub-and-Spoke Design",
      "Microsoft Defender, Sentinel & Key Vault",
      "AKS Security & VM Hardening",
      "Terraform for Azure & CI/CD Pipelines",
      "Azure Monitor, Log Analytics & Automation",
      "AI Tools for Cloud Engineers (ChatGPT, Copilot, n8n)"
    ]),
    tags: JSON.stringify(["Azure Cloud", "DevSecOps", "Terraform", "AKS Security", "AI Automation"]),
    keyOutcome: "Build enterprise-grade Azure infrastructure with security, automation, and AI integration",
    modules: JSON.stringify([
      { title: "Module 1: Azure Fundamentals & Cloud Computing (2 hrs)", desc: "Cloud concepts, Azure global infrastructure, regions, availability zones, resource groups, subscriptions, service models, shared responsibility model. Hands-on Azure Portal exploration." },
      { title: "Module 2: Azure Governance, RBAC & Policy Management (3 hrs)", desc: "Azure Resource Manager, governance strategies, Role-Based Access Control (RBAC), custom roles, Azure Policies, Management Groups, Resource Locks, and enterprise compliance controls." },
      { title: "Module 3: Azure Networking & Advanced Architectures (12 hrs)", desc: "VNets, Subnets, NSGs, Route Tables, DNS, VPN Gateway, ExpressRoute, Hub-and-Spoke, Azure Firewall, Application Gateway, Load Balancer, Front Door, Traffic Manager, Private & Service Endpoints, NAT Gateway, Virtual WAN. Real-world enterprise network design discussions." },
      { title: "Module 4: Azure Security & Compliance (8 hrs)", desc: "Microsoft Defender for Cloud, Microsoft Sentinel, Key Vault, Conditional Access, MFA, Identity Protection, encryption, compliance monitoring, and enterprise security operations best practices." },
      { title: "Module 5: Azure Compute, VM Security & AKS Security (5 hrs)", desc: "Securing VMs with NSGs, Bastion, Just-In-Time (JIT) Access, patch management. AKS architecture, network policies, ingress controllers, Azure AD integration, Kubernetes security fundamentals." },
      { title: "Module 6: Identity & Access Management (2 hrs)", desc: "Microsoft Entra ID, users, groups, enterprise applications, Privileged Identity Management (PIM), Conditional Access, B2B, B2C, and modern identity governance practices." },
      { title: "Module 7: Backup, Disaster Recovery & Business Continuity (2 hrs)", desc: "Azure Backup, Recovery Services Vault, Azure Site Recovery, high-availability solutions, and business continuity strategies for mission-critical workloads." },
      { title: "Module 8: Monitoring, Logging & Automation (2 hrs)", desc: "Azure Monitor, Log Analytics, Network Watcher, Azure Alerts. Troubleshooting, diagnostics, and operational visibility for applications and infrastructure." },
      { title: "Module 9: Terraform for Azure (4 hrs)", desc: "Infrastructure as Code (IaC) with Terraform. Providers, state management, modules, remote backends, reusable templates, and Azure infrastructure deployment automation." },
      { title: "Module 10: Azure DevOps & CI/CD (4 hrs)", desc: "Modern CI/CD pipelines with Azure DevOps. Repos, Pipelines, YAML, build and release strategies, Docker integration, deployment automation, and DevSecOps practices." },
      { title: "Module 11: AI for Cloud & DevOps Engineers (10 hrs)", desc: "ChatGPT, Claude/GitHub Copilot, OpenAI Codex for cloud teams. Prompt engineering, AI-assisted Terraform, YAML generation, incident analysis, Agentic AI, multi-agent workflows, n8n automation, Azure OpenAI, embeddings, and RAG concepts." }
    ])
  }
];

const initialAnnouncements = [
  {
    title: "Fall 2026 Cohort Admissions Open!",
    content: "Registrations are officially open for Next.js Full Stack, AWS DevOps, and AI Testing tracks. Reserve your seat today.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    badgeText: "New Cohort",
    link: "#courses",
  },
  {
    title: "100% Industry Certification & Placement Support",
    content: "All enrolled students get 1-on-1 mentorship, resume reviews, and direct referral opportunities with partner companies.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    badgeText: "Career Support",
    link: "#about",
  },
  {
    title: "Hands-on Liquid Glass Labs & Live Projects",
    content: "Work on production-grade real-world projects with live instructor support and cloud sandboxes.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    badgeText: "Live Labs",
    link: "#courses",
  },
];

export async function seedDatabase(force = false) {
  try {
    if (force) {
      for (const course of initialCourses) {
        await db
          .insert(courses)
          .values(course)
          .onConflictDoUpdate({
            target: courses.slug,
            set: {
              title: sql`excluded.title`,
              description: sql`excluded.description`,
              fullDescription: sql`excluded.full_description`,
              image: sql`excluded.image`,
              category: sql`excluded.category`,
              duration: sql`excluded.duration`,
              instructor: sql`excluded.instructor`,
              level: sql`excluded.level`,
              price: sql`excluded.price`,
              badge: sql`excluded.badge`,
              keyFeatures: sql`excluded.key_features`,
              tags: sql`excluded.tags`,
              modules: sql`excluded.modules`,
              testimonial: sql`excluded.testimonial`,
              keyOutcome: sql`excluded.key_outcome`,
            },
          });
      }
    } else {
      const existingCourses = await db.select().from(courses);
      if (existingCourses.length === 0) {
        await db.insert(courses).values(initialCourses);
      }
    }

    const existingAnnouncements = await db.select().from(announcements);
    if (existingAnnouncements.length === 0) {
      await db.insert(announcements).values(initialAnnouncements);
    }
  } catch (error) {
    throw error;
  }
}

async function runWithRetry(fn, retries = 3, delayMs = 4000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const isTimeout =
        err?.message?.includes("fetch failed") ||
        err?.message?.includes("ConnectTimeoutError") ||
        err?.cause?.message?.includes("fetch failed");
      if (isTimeout && attempt < retries) {
        await new Promise((res) => setTimeout(res, delayMs));
      } else {
        throw err;
      }
    }
  }
}

if (process.argv[1] && (process.argv[1].endsWith("seed.js") || process.argv[1].endsWith("seed"))) {
  runWithRetry(() => seedDatabase(true))
    .then(() => {
      process.exit(0);
    })
    .catch(() => {
      process.exit(1);
    });
}

