import type { ComponentType, CSSProperties } from "react";
import { Bot, Cloud } from "lucide-react";
import { FaAws } from "react-icons/fa6";
import {
  SiAndroid,
  SiAngular,
  SiAnthropic,
  SiCloudflare,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGooglecloud,
  SiGooglegemini,
  SiGraphql,
  SiHuggingface,
  SiKotlin,
  SiKubernetes,
  SiLangchain,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOllama,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiRazorpay,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSocketdotio,
  SiStripe,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export type TechItem = {
  name: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
  note: string;
};

export type TechCategory = {
  slug: string;
  category: string;
  summary: string;
  items: TechItem[];
};

export const techStack: TechCategory[] = [
  {
    slug: "frontend",
    category: "Frontend",
    summary:
      "Fast, SEO-friendly and accessible interfaces — from marketing sites to complex dashboards.",
    items: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        note: "SSR/SSG React apps, SEO-ready sites",
      },
      { name: "React", icon: SiReact, color: "#149ECA", note: "Interactive SPAs and dashboards" },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        note: "Type-safe, maintainable codebases",
      },
      {
        name: "Vue.js",
        icon: SiVuedotjs,
        color: "#4FC08D",
        note: "Lightweight progressive web apps",
      },
      { name: "Angular", icon: SiAngular, color: "#DD0031", note: "Large enterprise front-ends" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        note: "Consistent, responsive design systems",
      },
    ],
  },
  {
    slug: "backend",
    category: "Backend",
    summary:
      "Secure APIs and business logic in the language that fits your team, budget and scale.",
    items: [
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
        note: "APIs, automation, data and AI services",
      },
      {
        name: "Django",
        icon: SiDjango,
        color: "#092E20",
        note: "Batteries-included web apps & admin",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688",
        note: "High-performance async & AI APIs",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#5FA04E",
        note: "Real-time and API-first backends",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
        note: "Structured TypeScript enterprise APIs",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#000000",
        note: "Lean REST services and middleware",
      },
      { name: "PHP", icon: SiPhp, color: "#777BB4", note: "Proven web stack, easy hosting" },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
        note: "Rapid business apps, ERPs & portals",
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        color: "#E10098",
        note: "Flexible APIs for web and mobile",
      },
    ],
  },
  {
    slug: "databases",
    category: "Databases & Storage",
    summary:
      "The right data store for the job — relational for transactions, document and cache for speed.",
    items: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
        note: "Reliable relational DB + pgvector for AI",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        note: "Widely hosted relational DB for PHP/ERP",
      },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", note: "Flexible document storage" },
      { name: "Redis", icon: SiRedis, color: "#FF4438", note: "Caching, queues and sessions" },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "#3FCF8E",
        note: "Postgres with auth & storage",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#DD2C00",
        note: "Realtime data & mobile backends",
      },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748", note: "Type-safe ORM for TypeScript" },
    ],
  },
  {
    slug: "ai",
    category: "AI & Machine Learning",
    summary:
      "Production AI features — assistants, RAG search, document intelligence and ML models — built with evaluation and guardrails.",
    items: [
      {
        name: "OpenAI GPT",
        icon: Bot,
        color: "#10A37F",
        note: "Assistants, extraction and generation",
      },
      {
        name: "Anthropic Claude",
        icon: SiAnthropic,
        color: "#D97757",
        note: "Long-context reasoning & agents",
      },
      {
        name: "Google Gemini",
        icon: SiGooglegemini,
        color: "#8E75B2",
        note: "Multimodal AI on Google Cloud",
      },
      {
        name: "LangChain",
        icon: SiLangchain,
        color: "#1C3C3C",
        note: "RAG pipelines and AI agents",
      },
      {
        name: "Hugging Face",
        icon: SiHuggingface,
        color: "#FF9D00",
        note: "Open-source models & embeddings",
      },
      { name: "Ollama", icon: SiOllama, color: "#000000", note: "Private, on-premise LLMs" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", note: "Custom deep-learning models" },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        color: "#FF6F00",
        note: "ML training and deployment",
      },
      {
        name: "scikit-learn",
        icon: SiScikitlearn,
        color: "#F7931E",
        note: "Classic ML: prediction & scoring",
      },
    ],
  },
  {
    slug: "cloud-devops",
    category: "Cloud & DevOps",
    summary:
      "Containerised, automated deployments on the cloud you prefer — with monitoring and backups built in.",
    items: [
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
        note: "Consistent containerised deployments",
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
        color: "#326CE5",
        note: "Scalable container orchestration",
      },
      { name: "AWS", icon: FaAws, color: "#FF9900", note: "EC2, S3, RDS, Lambda and more" },
      {
        name: "Google Cloud",
        icon: SiGooglecloud,
        color: "#4285F4",
        note: "Cloud Run, GKE, Vertex AI",
      },
      {
        name: "Microsoft Azure",
        icon: Cloud,
        color: "#0078D4",
        note: "App Service, AKS, Azure OpenAI",
      },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA", note: "Infrastructure as code" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF", note: "CI/CD pipelines" },
      { name: "Nginx", icon: SiNginx, color: "#009639", note: "Reverse proxy and load balancing" },
      { name: "Linux", icon: SiLinux, color: "#000000", note: "Server administration & hardening" },
      {
        name: "Cloudflare",
        icon: SiCloudflare,
        color: "#F38020",
        note: "CDN, DNS and edge security",
      },
    ],
  },
  {
    slug: "mobile",
    category: "Mobile",
    summary: "Cross-platform and native apps for Android and iOS, sharing one secure backend.",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B", note: "Cross-platform Android & iOS" },
      {
        name: "React Native",
        icon: SiReact,
        color: "#149ECA",
        note: "Native apps with React skills",
      },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", note: "Native Android development" },
      { name: "Swift", icon: SiSwift, color: "#F05138", note: "Native iOS development" },
      {
        name: "Android",
        icon: SiAndroid,
        color: "#34A853",
        note: "Play Store release & device features",
      },
    ],
  },
  {
    slug: "integrations",
    category: "Integrations & Automation",
    summary:
      "Payments, messaging, real-time features and workflow automation that connect your tools.",
    items: [
      { name: "n8n", icon: SiN8N, color: "#EA4B71", note: "Workflow automation" },
      {
        name: "Razorpay",
        icon: SiRazorpay,
        color: "#0C2451",
        note: "Indian payments & subscriptions",
      },
      { name: "Stripe", icon: SiStripe, color: "#635BFF", note: "International payments" },
      {
        name: "Socket.IO",
        icon: SiSocketdotio,
        color: "#010101",
        note: "Real-time chat & notifications",
      },
    ],
  },
];

export const allTech: TechItem[] = techStack.flatMap((c) => c.items);
