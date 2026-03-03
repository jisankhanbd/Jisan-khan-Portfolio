export const projectsData = [
  {
    id: 1,
    name: "Zabbix",
    description:
      "An enterprise-grade open-source monitoring and observability platform used to monitor networks, servers, virtual machines, cloud services, and applications in real time. Implemented Zabbix for proactive infrastructure monitoring, performance tracking, and alerting. Configured hosts, templates, triggers, dashboards, and alert rules to ensure high availability and fast incident response. The setup enables real-time metrics collection, log monitoring, and automated notifications for critical system events.",
    tools: [
       "Zabbix",
       "Linux",
       "SNMP",
       "MySQL",
       "PostgreSQL",
       "Nginx",
       "Grafana",
       "Docker",
       "Networking",
       "Monitoring & Alerting",
    ],
    role: "Infrastructure Monitoring Specialist",
    code: "",
    demo: "http://103.149.105.125/zabbix/",
    date: "2025-10-14",
    images: [
      "/projects/zabbix/zabbix.jpg",
      "/projects/zabbix/zabbix1.png",
      "/projects/zabbix/zabbix2.png",
    ],
    videos: [""],
    highlights: [
      "Deployed and configured Zabbix for real-time monitoring of servers, network devices, and services across the infrastructure.",
      "Implemented SNMP-based monitoring for routers, switches, and network equipment to collect performance and availability metrics.",
      "Designed custom triggers and alert rules to detect critical issues such as high CPU usage, memory exhaustion, disk space shortages, and network outages.",
      "Built interactive dashboards to visualize system health, network traffic, and performance trends for faster decision-making.",
      "Integrated alerting mechanisms (Email / Telegram / Slack) to ensure instant notification and rapid incident response.",
      "Optimized monitoring performance using Linux-based servers with MySQL/PostgreSQL backend and Nginx for high availability.",
      "Enhanced infrastructure reliability through proactive monitoring, reducing downtime and improving overall system stability.",
    ],
    challenges: [
      "Implementing efficient vector embeddings and semantic search across large PDF documents.",
      "Managing real-time streaming responses while maintaining context accuracy.",
      "Integrating multiple third-party services (OpenAI, Pinecone, Stripe, Kinde) seamlessly.",
      "Optimizing database queries and state management for handling multiple concurrent chats.",
    ],
  },
  {
    id: 2,
    name: "cPanel – Hosting & Server Management",
    description:
      "A secure cPanel-based hosting and server management system designed to manage domains, user accounts, and server operations from a centralized platform. It simplifies server administration while ensuring strong security, optimized performance, and a responsive interface for efficient hosting management.",
    
      tools: [
      "cPanel / WHM",
      "Linux Server Environment",
      "MySQL Database",
      "Server-side Automation Scripts",
      "Secure Authentication & Access Control",
      "Performance Monitoring Tools",
    ],
    role: "Cloud & Hosting Administrator",
    code: "",
    demo: "https://cpanel-hosting-demo.vercel.app/",
    date: "2025-10-14",
    images: [
      "/projects/cPanel/cpanel.webp",
      "/projects/cpanel/cpanel1.png",
      "/projects/cpanel/cpanel2.png",
    ],
    videos: [""],
    highlights: [
      "Implemented secure user authentication with Google OAuth.",
      "Designed interactive dashboards with real-time data visualization.",
      "Optimized database queries for enhanced performance.",
    ],
    challenges: [
      "Ensuring seamless integration of NextAuth with Prisma.",
      "Managing complex state across multiple components.",
    ],
  },
  
  {
    id: 8,
    name: "Notion Table Clone",
    description:
      "A Notion-style editable task table featuring drag-and-drop functionality for columns and rows, tag inputs, persistent localStorage, and dark mode support. Built with React, TypeScript, and Vite, and styled using Chakra UI.",
    tools: [
      "React",
      "TypeScript",
      "Vite",
      "Chakra UI",
      "react-beautiful-dnd",
      "localStorage",
    ],
    role: "Frontend Developer",
    code: "https://github.com/Ghost-oo5/Notion-Table-Clone",
    demo: "https://task-table-zeta.vercel.app/",
    date: "",
    images: ["/projects/tasktable/task-table.png"],
    videos: [""],
    highlights: [
      "Implemented drag-and-drop functionality with react-beautiful-dnd.",
      "Added dark mode support for better user accessibility.",
    ],
    challenges: [
      "Maintaining state consistency during drag-and-drop operations.",
      "Ensuring data persistence with localStorage.",
    ],
  },
];
