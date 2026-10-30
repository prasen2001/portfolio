// Replace the placeholder values below with the details from your resume.
// The website renders all resume-specific content from this one object.
window.RESUME_DATA = {
  name: "Prasenjeet Tambe",
  heroName: "Prasenjeet S. Tambe",
  initials: "PT",
  title: "Software Engineer · AI Systems & Full-Stack Products",
  location: "Los Angeles, CA",
  availability: {
    degree: "Pursuing M.S. in Computer Science",
    school: "University of Southern California",
    status: "Open to opportunities"
  },
  email: "development.prasenjeet@gmail.com",
  summary:
    "Software engineer building production AI platforms, scalable automation systems, and cloud-native products—from frontend experiences to infrastructure.",
  focus: "AI systems & full-stack",
  about: {
    lead: "I work across the stack to turn ambitious AI ideas into reliable products people can use every day.",
    body: "As a founding engineer at Insaito, I built an end-to-end AI agent platform spanning multi-agent orchestration, RAG, document intelligence, React interfaces, Python services, and GCP infrastructure. Previously at Fold Health, I scaled healthcare workflow automation for 200+ providers and 1.7M+ active lives."
  },
  strengths: ["AI agents", "RAG", "React", "Python", "Cloud architecture", "Healthcare technology"],
  metrics: [
    { value: "1.7M+", label: "Lives supported" },
    { value: "10×", label: "Workflow throughput" },
    { value: "95%+", label: "Extraction accuracy" }
  ],
  experience: [
    {
      period: "Sep 2025 — Aug 2026",
      role: "Senior Software Engineer",
      company: "Insaito Inc. • Remote",
      companyUrl: "https://www.insaito.com/",
      description: "Founding engineer for <a href=\"https://automatan.ai/\" target=\"_blank\" rel=\"noreferrer\">Automatan.ai</a>, owning the full product stack. Built multi-agent orchestration, RAG pipelines, and a Docling-based ingestion layer for PDFs, Word documents, text files, CSVs, and Excel workbooks. Used Docling VLM for visual document understanding and structured information extraction, processing 1,000+ documents daily at 95%+ accuracy. Used OpenAI API inference alongside model deployment on Nebius AI Cloud with NVIDIA H200 GPUs.",
      highlights: [
        "Engineered an event-driven Google Sheets automation engine that processed 10,000+ updates through Pub/Sub, Firestore, and Cloud Storage with real-time status tracking.",
        "Converted user-selected document insights into structured JSON and evaluated extraction against verified ground truth."
      ],
      tags: [
        "React", "Python", "Flask", "Jinja", "HTML", "CSS", "JavaScript", "GitHub Actions",
        "AI agents", "RAG", "Docling", "Docling VLM", "OpenAI API", "Pinecone", "Secret Manager", "Cloud Run", "Compute Engine", "Pub/Sub",
        "Firestore", "PostgreSQL", "App Engine", "Cloud Storage", "Cloud SQL", "Cloud Tasks", "Cloud Functions",
        "Nebius AI Cloud", "NVIDIA H200"
      ]
    },
    {
      period: "Jul 2023 — Jun 2025",
      role: "Software Engineer",
      company: "Fold Health Inc. • Pune, India",
      companyUrl: "https://fold.health",
      description: "Built healthcare workflow automation used by 200+ providers across 10+ organizations, supporting 1.7M+ active lives. Designed a provider-agnostic LLM inference layer that let users choose between OpenAI, Gemini, Claude, and other model APIs. Scaled concurrent workflow execution from 20 to 200 while reducing LLM inference costs by up to 80% and API calls by 3×.",
      highlights: [
        "Built an AWS Lambda PDF pipeline supporting 1,000+ concurrent requests, with database-backed caching to eliminate redundant processing.",
        "Delivered an LLM-powered EHR synopsis with HIPAA-aware access controls, role-based authorization, and normalized structured output.",
        "Shipped 50+ production features across healthcare products, from React performance and Redis caching to testing, releases, and production support."
      ],
      tags: [
        "Python", "TypeScript", "React", "React Flow", "NestJS", "GraphQL", "Hasura", "PostgreSQL",
        "OpenAI / ChatGPT", "Google Gemini", "Anthropic Claude", "Prisma ORM", "SQLAlchemy ORM",
        "AWS SAM", "Amazon SQS", "EC2", "ECS", "AWS Lambda", "Step Functions", "State Machines", "EventBridge",
        "Parameter Store", "LLMs", "Microservices"
      ]
    }
  ],
  projects: [
    {
      number: "01",
      title: "Automatan.ai at Insaito",
      description: "At Insaito, I helped build an end-to-end AI agent platform with multi-agent execution, document-grounded RAG, configurable human-in-the-loop intelligence, and real-time workflow status.",
      category: "AI Agent Platform",
      color: "blue",
      link: "https://automatan.ai"
    },
    {
      number: "02",
      title: "Healthcare workflow automation at Fold Health",
      description: "At Fold Health, I helped build a scalable visual automation system with 40+ triggers and 100+ filters that saved providers 75% of their time while supporting 1.7M+ active lives.",
      category: "Cloud / Healthcare",
      color: "healthcare",
      link: "https://fold.health"
    },
    {
      number: "03",
      title: "Contactless pulse monitoring",
      description: "My B.E. final-year project: a computer-vision system that extracts a pulse signal from camera recordings, filters noise, and uses Fourier analysis to estimate BPM without physical contact.",
      category: "OpenCV / Signal Processing",
      color: "violet",
      link: "#"
    }
  ],
  skills: [
    {
      name: "Design production AI systems",
      detail: "Turn ambiguous AI ideas into grounded, measurable products with orchestration, retrieval, document intelligence, and human oversight.",
      outcomes: ["Grounded responses", "Human-in-the-loop", "Evaluation-ready"]
    },
    {
      name: "Scale workflow automation",
      detail: "Engineer event-driven systems that handle real production load while improving throughput, reliability, and operating cost.",
      outcomes: ["10× throughput", "Cost-efficient inference", "Reliable orchestration"]
    },
    {
      name: "Ship complete products",
      detail: "Own the path from design-faithful interfaces to APIs, data models, cloud infrastructure, testing, and production releases.",
      outcomes: ["Product-minded UX", "Dependable services", "End-to-end ownership"]
    },
    {
      name: "Build healthcare-ready software",
      detail: "Create provider workflows and AI-assisted clinical experiences with privacy, authorization, and operational realities built in.",
      outcomes: ["HIPAA-aware patterns", "Role-based access", "Provider-centered workflows"]
    }
  ],
  toolbox: [
    {
      category: "Languages",
      description: "Core tools for application, systems, and data work.",
      technologies: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "SQL"]
    },
    {
      category: "Frontend & APIs",
      description: "Interfaces and services designed as one product system.",
      technologies: ["React", "React Flow", "Node.js", "NestJS", "Flask", "GraphQL"]
    },
    {
      category: "AI & document intelligence",
      description: "Grounded AI pipelines from ingestion through evaluation.",
      technologies: ["AI agents", "RAG", "Docling", "Docling VLM", "OpenAI API", "Google Gemini", "Anthropic Claude", "LangChain", "PyTorch", "TensorFlow", "OpenCV"]
    },
    {
      category: "Cloud, data & persistence",
      description: "Cloud platforms, containers, databases, vector search, and ORM-backed persistence.",
      technologies: ["GCP", "AWS", "Docker", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Pinecone", "Prisma ORM", "SQLAlchemy ORM"]
    },
    {
      category: "Google Cloud platform",
      description: "The managed services behind Automatan.ai's secure, event-driven platform.",
      technologies: ["Secret Manager", "Cloud Run", "Compute Engine", "Pub/Sub", "Firestore", "App Engine", "Cloud Storage", "Cloud SQL", "Cloud Tasks", "Cloud Functions"]
    },
    {
      category: "Web delivery & automation",
      description: "Design implementation, product delivery, server-rendered surfaces, and continuous integration.",
      technologies: ["Figma", "Jira", "HTML", "CSS", "JavaScript", "Jinja", "Git", "GitHub", "GitLab", "GitHub Actions", "CI/CD", "Flask"]
    },
    {
      category: "AI infrastructure & inference",
      description: "Production model serving on accelerated cloud infrastructure.",
      technologies: ["OpenAI API", "Google Gemini", "Anthropic Claude", "Nebius AI Cloud", "NVIDIA H200", "Pinecone", "Cloud Run", "Docker", "LLMs"]
    },
    {
      category: "AWS compute & orchestration",
      description: "Compute, eventing, serverless, configuration, and workflow services behind Fold Health.",
      technologies: ["AWS SAM", "Amazon SQS", "EC2", "ECS", "Amazon RDS", "Amazon S3", "API Gateway", "AWS Lambda", "Step Functions", "State Machines", "EventBridge", "Parameter Store"]
    },
    {
      category: "Data science & computer vision",
      description: "Scientific computing, classical machine learning, OCR, and image-based signal extraction.",
      technologies: ["Scikit-learn", "NumPy", "Pandas", "OpenCV", "Tesseract", "EasyOCR"]
    }
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institutions: [
        { name: "University of Southern California", url: "https://usc.edu/" },
        { name: "Viterbi School of Engineering", url: "https://viterbischool.usc.edu/" }
      ],
      period: "Aug 2026 — Dec 2028",
      location: "Los Angeles, CA",
      coursework: ["Database Systems", "Fundamentals of Programming Systems"]
    },
    {
      degree: "B.E. in Electronics & Telecommunication Engineering",
      institutions: [
        { name: "Pune Institute of Computer Technology", url: "https://pict.edu/" }
      ],
      detail: "CGPA 8.76/10",
      period: "Aug 2019 — Jun 2023",
      location: "Pune, India",
      coursework: [
        "Programming & Problem Solving",
        "Data Structures",
        "Object-Oriented Programming",
        "Advanced Java Programming",
        "JavaScript",
        "Android Development",
        "Database Management",
        "Computer Networks",
        "Cloud Computing",
        "Deep Learning"
      ],
      curriculum: [
        {
          label: "Freshman Year · First Year Engineering",
          subjects: [
            "Systems in Mechanical Engineering", "Basic Electronics Engineering", "Engineering Mathematics I",
            "Engineering Chemistry", "Programming & Problem Solving",
            "Engineering Mechanics", "Engineering Graphics", "Basic Electrical Engineering", "Engineering Physics",
            "Engineering Mathematics II"
          ]
        },
        {
          label: "Sophomore Year · Second Year Engineering",
          subjects: [
            "Electronic Circuits", "Digital Circuits", "Electrical Circuits", "Data Structures",
            "Engineering Mathematics III",
            "Signals & Systems", "Control Systems", "Principles of Communication Systems",
            "Object-Oriented Programming"
          ]
        },
        {
          label: "Junior Year · Third Year Engineering",
          subjects: [
            "Digital Communication", "Electromagnetic Field Theory", "Database Management", "Microcontrollers",
            "Computer Networks", "Cellular Networks", "Power Devices & Circuits", "Advanced Java Programming",
            "Internship", "Mini Project"
          ]
        },
        {
          label: "Senior Year · Final Year Engineering",
          subjects: [
            "Radiation & Microwave Theory", "VLSI Design & Technology", "Cloud Computing", "JavaScript",
            "Deep Learning", "Project Stage I", "Fiber Optic Communication", "Android Development",
            "Project Stage II"
          ]
        }
      ]
    }
  ],
  achievements: [
    {
      value: "#6",
      title: "ABU Robocon 2022",
      detail: "Core Technical Member, PICT Robocon Team",
      certificateDetail: "Contributed to PICT's participation in DD-Robocon 2022, organized by IIT Delhi with Prasar Bharati.",
      certificateUrl: "assets/documents/certificates/Robocon_2022.pdf"
    },
    {
      value: "#13",
      title: "ABU Robocon 2020",
      detail: "Four years of competitive robotics, 2019–2023",
      certificateDetail: "Participated in the DD-Robocon 2020 Online Festival hosted by the Indian Institute of Technology Delhi.",
      certificateUrl: "assets/documents/certificates/Robocon_2020.pdf"
    }
  ],
  certifications: [
    {
      title: "Fundamentals of Computers",
      issuer: "AstroMediComp · January 2022",
      description: "Covered computer architecture, data representation, memory, booting, SDK toolchains, virtual machines, and how programs execute.",
      url: "assets/documents/certificates/Prasenjeet_Tambe_FND-2022-43WZ2TRJ97.pdf"
    },
    {
      title: "Heterogeneous Parallel Programming",
      issuer: "AstroMediComp · March 2022",
      description: "Explored GPU computing and heterogeneous parallel programming using CUDA and OpenCL.",
      url: "assets/documents/certificates/Prasenjeet_Tambe_HPP-2022-3GD9HPM6SW[3112].pdf"
    },
    {
      title: "Multi-OS Installation",
      issuer: "AstroMediComp · February 2022",
      description: "Covered BIOS and UEFI, disk partitioning, bootloaders, filesystems, virtualization, and multi-OS system configuration.",
      url: "assets/documents/certificates/Prasenjeet_Tambe_MOS-2022-ZLHIBF1PXE[2925].pdf"
    }
  ],
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/prasenjeet-tambe-478021193" },
    { label: "GitHub", url: "https://github.com/prasen2001" }
  ],
  resumeUrl: null
};
