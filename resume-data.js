// Resume-specific content is rendered from this object.
window.RESUME_DATA = {
  name: "Prasenjeet Tambe",
  heroName: "Prasenjeet S. Tambe",
  initials: "PT",
  title: "Software Engineer | Full-Stack Engineering | AI Systems | Cloud Infrastructure",
  location: "Los Angeles, CA",
  availability: {
    degree: "Pursuing M.S. in Computer Science",
    school: "University of Southern California",
    status: "Summer 2027 Software Engineering internships"
  },
  email: "development.prasenjeet@gmail.com",
  summary:
    "Software Engineer pursuing an MS in Computer Science at USC, with experience building production-grade full-stack applications, distributed workflows, cloud infrastructure, and AI-powered platforms.",
  focus: "Full-stack, AI & cloud",
  about: {
    lead: "I build production software across interfaces, backend services, distributed workflows, and cloud infrastructure.",
    body: "Across approximately three years of professional engineering experience, I have helped take an Agentic AI platform from zero to one and shipped healthcare workflow systems used in production. I enjoy owning the complete path from product requirements and frontend implementation to APIs, data, observability, and deployment."
  },
  strengths: ["Full-stack engineering", "Backend systems", "AI engineering", "Cloud infrastructure", "Workflow automation", "Healthcare technology"],
  metrics: [
    { value: "~3 years", label: "Professional engineering experience" },
    { value: "2,000+", label: "Reusable AI workflows" },
    { value: "1,000", label: "Concurrent PDF requests supported" }
  ],
  experience: [
    {
      period: "Sep 2025 — Aug 2026",
      role: "Founding Software Engineer",
      company: "Insaito Inc. • Remote",
      companyUrl: "https://www.insaito.com/",
      description: "Played a key role in building <a href=\"https://automatan.ai/\" target=\"_blank\" rel=\"noreferrer\">Automatan.ai</a>, an Agentic AI platform, from zero to one—developing full-stack applications and backend services that power reusable AI workflows.",
      highlights: [
        "Built Python and Flask services on Google Cloud using Firestore, Cloud Storage, Pub/Sub, and Secret Manager.",
        "Developed document-intelligence pipelines with Docling, OCR, and vision-language models, including ingestion from Google Drive, OneDrive, Dropbox, PDFs, and spreadsheets.",
        "Engineered event-driven Google Sheets automation with Pub/Sub, Firestore, and Cloud Storage, contributing to an ecosystem of 2,000+ reusable AI workflows."
      ],
      tags: [
        "React", "Python", "Flask", "GCP", "Firestore", "Cloud Storage", "Pub/Sub", "Secret Manager",
        "AI agents", "RAG", "Docling", "Docling VLM", "OCR", "OpenAI API", "GitHub Actions"
      ]
    },
    {
      period: "Jul 2023 — Jun 2025",
      role: "Software Engineer",
      company: "Fold Health Inc. • Pune, India",
      companyUrl: "https://fold.health",
      description: "Developed production full-stack healthcare applications and configurable workflow automation using React, React Flow, NestJS, and Python.",
      highlights: [
        "Built workflow systems supporting 40+ triggers and 100+ filters, and optimized interactions to reduce API calls by 3×.",
        "Developed an AWS Lambda PDF-processing service supporting up to 1,000 concurrent requests.",
        "Implemented event-driven workflows with AWS Step Functions, Lambda, PostgreSQL, Hasura, and Prisma, with frontend testing and production monitoring through CloudWatch and execution logs."
      ],
      tags: [
        "React", "React Flow", "TypeScript", "NestJS", "Python", "PostgreSQL", "Hasura", "Prisma ORM",
        "AWS Lambda", "Step Functions", "CloudWatch", "Amazon SQS", "EventBridge", "Microservices"
      ]
    }
  ],
  projects: [
    {
      number: "01",
      title: "Agentic AI platform & orchestration",
      description: "Helped take Automatan.ai from zero to one by building full-stack product surfaces, Python services, multi-agent execution, human-in-the-loop controls, and event-driven orchestration.",
      category: "Production AI Platform",
      color: "blue",
      link: "https://automatan.ai",
      technologies: ["React", "Python", "Flask", "GCP", "AI agents", "RAG"]
    },
    {
      number: "02",
      title: "Healthcare workflow automation",
      description: "Built configurable visual workflows with 40+ triggers and 100+ filters, event-driven AWS execution, and production observability for healthcare operations.",
      category: "Full-Stack / Distributed Systems",
      color: "healthcare",
      link: "https://fold.health",
      technologies: ["React Flow", "NestJS", "Python", "AWS Lambda", "Step Functions", "PostgreSQL"]
    },
    {
      number: "03",
      title: "DocuMind document intelligence workspace",
      description: "Built a local-first PDF intelligence platform that extracts text, tables, images, charts, layout, and source coordinates. It supports evidence-grounded RAG with highlighted page regions, multi-document comparison, asynchronous ingestion, and persistent human review.",
      category: "Document AI / Grounded RAG",
      color: "documind",
      link: "https://github.com/prasen2001/DocuMind",
      technologies: ["Python", "OpenCV", "Tesseract", "RAG", "PyTorch", "Docker"]
    },
    {
      number: "04",
      title: "JobCover application intelligence",
      description: "Built a full-stack workspace for versioned résumés, explainable job-fit scoring, grounded cover-letter generation, and guarded LaTeX résumé tailoring. The system includes authentication, selectable model providers, document parsing, and security controls for uploads and job-link fetching.",
      category: "Full-Stack AI Product",
      color: "jobcover",
      link: "https://github.com/prasen2001/jobcover",
      technologies: ["React", "TypeScript", "Flask", "Docling", "Google Gemini", "LangChain"]
    },
    {
      number: "05",
      title: "Brain MRI skull-stripping evaluator",
      description: "Built a reproducible medical-imaging pipeline that compares classical skull-stripping methods across 558 held-out SynthStrip scans and 125 complete NFBS volumes. The best baseline reached 0.790 mean Dice, with boundary metrics, bootstrap confidence intervals, failure analysis, visual review tools, and 66 automated tests.",
      category: "Medical Imaging / Research",
      color: "mri",
      link: "https://github.com/prasen2001/brain-mri-skull-stripping-evaluator",
      technologies: ["Python", "NumPy", "Scikit-learn", "Medical imaging", "Pytest"]
    },
    {
      number: "06",
      title: "Hospital management system",
      description: "Created a Java and MySQL desktop application for recording patient information, diagnoses, medicines, ward requirements, search history, updates, and PDF report generation.",
      category: "Java / Database Application",
      color: "amber",
      link: "https://github.com/prasen2001/Hospital_Management_System",
      technologies: ["Java", "MySQL", "SQL", "Java Swing"]
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
      outcomes: ["Scalable execution", "Cost-efficient systems", "Reliable orchestration"]
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
      description: "Primary languages used across product, backend, systems, and data work.",
      technologies: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Frontend",
      description: "Accessible interfaces and visual workflow experiences.",
      technologies: ["React", "React Flow", "HTML", "CSS"]
    },
    {
      category: "Backend",
      description: "APIs and services for production application workloads.",
      technologies: ["Node.js", "NestJS", "Flask", "REST APIs"]
    },
    {
      category: "Databases",
      description: "Relational, in-memory, document, and application data layers.",
      technologies: ["PostgreSQL", "MySQL", "Redis", "Firestore", "Prisma ORM", "Hasura"]
    },
    {
      category: "Cloud & infrastructure",
      description: "Cloud-native compute, orchestration, messaging, storage, and observability.",
      technologies: ["AWS", "GCP", "AWS Lambda", "Step Functions", "CloudWatch", "Cloud Storage", "Pub/Sub", "Docker"]
    },
    {
      category: "Developer tools",
      description: "Source control, delivery automation, and Linux-based development.",
      technologies: ["Git", "GitHub Actions", "GitLab", "CI/CD", "Linux"]
    },
    {
      category: "AI engineering",
      description: "Agentic systems, grounded generation, document intelligence, and automation.",
      technologies: ["AI agents", "LLMs", "RAG", "VLMs", "OCR", "Docling", "Workflow automation"]
    }
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institutions: [
        { name: "University of Southern California", url: "https://usc.edu/" },
        { name: "Viterbi School of Engineering", url: "https://viterbischool.usc.edu/" }
      ],
      period: "Expected December 2028",
      location: "Los Angeles, CA",
      coursework: ["Database Systems", "Fundamentals of Programming Systems"]
    },
    {
      degree: "B.E. in Electronics & Telecommunication Engineering",
      institutions: [
        { name: "Pune Institute of Computer Technology", url: "https://pict.edu/" }
      ],
      detail: "CGPA 8.76/10",
      period: "2019 — 2023",
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
  resumeUrl: "assets/documents/resumes/Prasenjeet_Tambe_Resume.pdf"
};
