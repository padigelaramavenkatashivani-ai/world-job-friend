document.addEventListener('DOMContentLoaded', () => {
  const storedName = localStorage.getItem('worldJobFriendName') || 'Explorer';
  const userName = document.getElementById('user-name');
  const heroName = document.getElementById('hero-name');
  const profileName = document.getElementById('profile-name');
  const categoryDetails = document.getElementById('category-details');
  const detailTitle = document.getElementById('detail-title');
  const courseGrid = document.getElementById('course-grid');
  const lessonView = document.getElementById('lesson-view');
  const lessonTitle = document.getElementById('lesson-title');
  const lessonContent = document.getElementById('lesson-content');
  const courseListView = document.getElementById('course-list-view');
  const backToCategories = document.getElementById('back-to-categories');
  const backToCourses = document.getElementById('back-to-courses');
  const progressPanel = document.getElementById('progress-panel');
  const profilePanel = document.getElementById('profile-panel');
  const startCareerBtn = document.getElementById('start-career-btn');
  const viewRoadmapsBtn = document.getElementById('view-roadmaps-btn');

  if (userName) {
    userName.textContent = storedName;
  }

  if (heroName) {
    heroName.textContent = storedName;
  }

  if (profileName) {
    profileName.textContent = storedName;
  }

  const categoryCourses = {
  'Information Technology': [
    {
      title: 'IT Fundamentals',
      description: 'Learn core concepts in networking, operating systems, and technical support.',
      level: 'Beginner',
      lessons: ['Hardware basics', 'Troubleshooting essentials', 'Networking foundations']
    },
    {
      title: 'Cloud Computing Essentials',
      description: 'Understand cloud services, infrastructure, and modern workplace tools.',
      level: 'Intermediate',
      lessons: ['Cloud architecture', 'Virtual machines', 'Security and scaling']
    }
  ],
  'Artificial Intelligence': [
    {
      title: 'AI Foundations',
      description: 'Explore machine learning, neural networks, and practical AI workflows.',
      level: 'Beginner',
      lessons: ['What is AI?', 'Supervised learning', 'Model evaluation']
    },
    {
      title: 'Generative AI Workshop',
      description: 'Learn to build prompts, workflows, and simple AI-powered applications.',
      level: 'Intermediate',
      lessons: ['Prompt design', 'AI assistants', 'Responsible AI']
    }
  ],
  'Data Science': [
    {
      title: 'Python for Data Science',
      description: 'Master Python libraries and data handling for clean analysis.',
      level: 'Beginner',
      lessons: ['Python basics', 'NumPy essentials', 'Data analysis workflows']
    },
    {
      title: 'Statistics for Data Science',
      description: 'Understand distributions, probability, and hypothesis testing.',
      level: 'Intermediate',
      lessons: ['Probability concepts', 'Sampling methods', 'Inferential statistics']
    },
    {
      title: 'Pandas & Data Cleaning',
      description: 'Prepare messy datasets for reliable analysis and reporting.',
      level: 'Intermediate',
      lessons: ['Dataframes', 'Missing values', 'Transformation pipelines']
    },
    {
      title: 'Data Visualization',
      description: 'Turn insights into compelling visual narratives using charts.',
      level: 'Intermediate',
      lessons: ['Chart selection', 'Design principles', 'Dashboard storytelling']
    },
    {
      title: 'SQL for Data Science',
      description: 'Query, filter, and summarize data with confidence.',
      level: 'Beginner',
      lessons: ['SELECT queries', 'Joins and grouping', 'Window functions']
    },
    {
      title: 'Machine Learning',
      description: 'Learn predictive modeling and evaluation techniques.',
      level: 'Advanced',
      lessons: ['Regression', 'Classification', 'Model tuning']
    }
  ],
  'Cyber Security': [
    {
      title: 'Cyber Security Basics',
      description: 'Understand threats, defenses, and everyday security habits.',
      level: 'Beginner',
      lessons: ['Threat landscape', 'Authentication', 'Secure browsing']
    },
    {
      title: 'Network Security',
      description: 'Learn how secure networks, firewalls, and monitoring work together.',
      level: 'Intermediate',
      lessons: ['Firewalls', 'Intrusion detection', 'Logging techniques']
    }
  ],
  Engineering: [
    {
      title: 'Engineering Problem Solving',
      description: 'Build a structured approach to technical challenges and design thinking.',
      level: 'Beginner',
      lessons: ['Problem analysis', 'Design steps', 'Evaluation methods']
    },
    {
      title: 'CAD Essentials',
      description: 'Create practical technical drawings and digital models.',
      level: 'Intermediate',
      lessons: ['Sketching basics', 'Inline dimensions', 'Modeling workflow']
    }
  ],
  Healthcare: [
    {
      title: 'Healthcare Communication',
      description: 'Develop strong patient communication and care coordination skills.',
      level: 'Beginner',
      lessons: ['Patient support', 'Documentation', 'Empathy and care']
    },
    {
      title: 'Medical Research Basics',
      description: 'Learn how evidence-based healthcare decisions are made.',
      level: 'Intermediate',
      lessons: ['Research design', 'Data interpretation', 'Clinical evidence']
    }
  ],
  Finance: [
    {
      title: 'Financial Literacy',
      description: 'Understand budgeting, saving, and smart money management.',
      level: 'Beginner',
      lessons: ['Budgeting', 'Savings habits', 'Financial planning']
    },
    {
      title: 'Investment Foundations',
      description: 'Learn the basics of portfolios, risk, and long-term growth.',
      level: 'Intermediate',
      lessons: ['Risk and return', 'Portfolio basics', 'Market awareness']
    }
  ],
  Business: [
    {
      title: 'Business Strategy',
      description: 'Discover how ideas turn into sustainable plans and growth.',
      level: 'Intermediate',
      lessons: ['Market planning', 'Value creation', 'Execution steps']
    },
    {
      title: 'Leadership Essentials',
      description: 'Strengthen team management and decision-making skills.',
      level: 'Beginner',
      lessons: ['Communication', 'Teamwork', 'Accountability']
    }
  ],
  Education: [
    {
      title: 'Teaching Skills for Modern Classrooms',
      description: 'Build engaging lessons with active learning and clear communication.',
      level: 'Beginner',
      lessons: ['Lesson planning', 'Student engagement', 'Assessment practices']
    },
    {
      title: 'Instructional Design',
      description: 'Design effective learning experiences for different audiences.',
      level: 'Intermediate',
      lessons: ['Learning objectives', 'Content structure', 'Feedback loops']
    }
  ],
  'Government Jobs': [
    {
      title: 'Government Exam Prep',
      description: 'Prepare for public sector exams with structured study guidance.',
      level: 'Beginner',
      lessons: ['Exam patterns', 'Current affairs', 'Time management']
    },
    {
      title: 'Administrative Skills',
      description: 'Improve document handling, professionalism, and office readiness.',
      level: 'Intermediate',
      lessons: ['Office communication', 'Record management', 'Service mindset']
    }
  ],
  Defence: [
    {
      title: 'Defence Career Awareness',
      description: 'Understand entry routes, roles, and preparation pathways.',
      level: 'Beginner',
      lessons: ['Career routes', 'Eligibility basics', 'Physical readiness']
    },
    {
      title: 'Leadership and Discipline',
      description: 'Develop focus, responsibility, and mission-driven habits.',
      level: 'Intermediate',
      lessons: ['Discipline routines', 'Team coordination', 'Resilience']
    }
  ],
  Aviation: [
    {
      title: 'Aviation Fundamentals',
      description: 'Understand aircraft operations, safety, and industry basics.',
      level: 'Beginner',
      lessons: ['Airport operations', 'Safety procedures', 'Aviation terminology']
    },
    {
      title: 'Airline Customer Service',
      description: 'Learn service and communication skills for passenger-facing roles.',
      level: 'Intermediate',
      lessons: ['Client handling', 'Professional etiquette', 'Service recovery']
    }
  ],
  Hospitality: [
    {
      title: 'Hospitality Service Skills',
      description: 'Build guest service, presentation, and customer care abilities.',
      level: 'Beginner',
      lessons: ['Guest interaction', 'Service standards', 'Professional presentation']
    },
    {
      title: 'Event Coordination',
      description: 'Plan events with organization, collaboration, and attention to detail.',
      level: 'Intermediate',
      lessons: ['Event planning', 'Vendor coordination', 'Timeline management']
    }
  ],
  Agriculture: [
    {
      title: 'Modern Agriculture Basics',
      description: 'Learn sustainable farming, crop planning, and cultivation essentials.',
      level: 'Beginner',
      lessons: ['Crop basics', 'Soil health', 'Farming workflow']
    },
    {
      title: 'Agribusiness Foundations',
      description: 'Understand supply chains, markets, and practical farm management.',
      level: 'Intermediate',
      lessons: ['Market awareness', 'Resource planning', 'Operations management']
    }
  ],
  'Design & Media': [
    {
      title: 'Design Thinking',
      description: 'Create visually compelling ideas through structure and creativity.',
      level: 'Beginner',
      lessons: ['Research', 'Concept development', 'Visual storytelling']
    },
    {
      title: 'Content Creation',
      description: 'Learn how to craft digital media with strategy and style.',
      level: 'Intermediate',
      lessons: ['Storyboarding', 'Editing basics', 'Audience targeting']
    }
  ],
  'Skilled Trades': [
    {
      title: 'Trade Skills Foundations',
      description: 'Get started with practical, hands-on trade knowledge and safety.',
      level: 'Beginner',
      lessons: ['Safety practices', 'Tool basics', 'Workflow discipline']
    },
    {
      title: 'Workshop Efficiency',
      description: 'Improve precision, planning, and quality in technical tasks.',
      level: 'Intermediate',
      lessons: ['Time management', 'Quality checks', 'Problem solving']
    }
  ],
  Freelancing: [
    {
      title: 'Freelance Career Setup',
      description: 'Build your profile, pricing, and client communication strategy.',
      level: 'Beginner',
      lessons: ['Portfolio building', 'Pricing', 'Client outreach']
    },
    {
      title: 'Freelance Project Delivery',
      description: 'Improve delivery quality and client satisfaction for repeat work.',
      level: 'Intermediate',
      lessons: ['Scope planning', 'Milestones', 'Client updates']
    }
  ],
  Entrepreneurship: [
    {
      title: 'Startup Basics',
      description: 'Learn how ideas turn into products, teams, and traction.',
      level: 'Beginner',
      lessons: ['Opportunity spotting', 'Business model', 'Pitching']
    },
    {
      title: 'Growth Mindset for Founders',
      description: 'Develop habits that help founders learn and adapt quickly.',
      level: 'Intermediate',
      lessons: ['Decision making', 'Customer feedback', 'Scaling habits']
    }
  ],
  Other: [
    {
      title: 'Career Discovery',
      description: 'Explore options and discover where your curiosity can grow.',
      level: 'Beginner',
      lessons: ['Self-assessment', 'Path exploration', 'Next steps']
    },
    {
      title: 'Personal Growth Planning',
      description: 'Create a flexible plan that fits your strengths and ambitions.',
      level: 'Intermediate',
      lessons: ['Goal setting', 'Learning habits', 'Progress reviews']
    }
  ]
};

  const categoryTools = {
    'Information Technology': {
      'Explore IT Careers': {
        description: 'Discover IT career paths including software development, network administration, and system engineering.',
        details: [
          'Software Developer - Build applications and systems',
          'Network Administrator - Manage company networks and security',
          'System Engineer - Design and implement IT solutions',
          'IT Support Specialist - Provide technical assistance',
          'Database Administrator - Manage and optimize databases',
          'Cybersecurity Analyst - Protect systems from threats',
          'Cloud Architect - Design cloud infrastructure'
        ]
      },
      'IT Learning Roadmap': {
        description: 'Step-by-step guide to master IT skills and technologies.',
        details: [
          'Month 1-2: Fundamentals - Networking, OS, Hardware basics',
          'Month 3-4: Core Skills - Linux, Windows Server administration',
          'Month 5-6: Specialization - Cloud platforms (AWS, Azure)',
          'Month 7-8: Security - Network security and firewalls',
          'Month 9-10: Advanced - System design and architecture',
          'Month 11-12: Certification - Earn industry credentials'
        ]
      },
      'Recommended IT Courses': {
        description: 'Curated IT courses to enhance your technical expertise.',
        details: [
          'IT Fundamentals - Networking, OS, and troubleshooting',
          'Cloud Computing Essentials - AWS and Azure basics',
          'Advanced Networking - TCP/IP, DNS, DHCP',
          'Cybersecurity for IT Professionals',
          'Database Management - SQL Server and MySQL',
          'IT Project Management - Leadership and planning',
          'System Administration Bootcamp'
        ]
      },
      'IT Mock Tests': {
        description: 'Practice tests for IT certifications and skills.',
        details: [
          'CompTIA A+ Practice Test - 50 questions, 1 hour',
          'CompTIA Network+ Exam Simulator - 80 questions, 90 mins',
          'Microsoft Azure Fundamentals - 40 questions, 1 hour',
          'Cisco CCNA Practice Quiz - 60 questions, 90 mins',
          'Linux System Administration - 40 questions, 1 hour',
          'Advanced Networking Assessment - 55 questions'
        ]
      },
      'IT Interview Prep': {
        description: 'Interview questions and answers for IT roles.',
        details: [
          'Q: Explain the OSI model and its 7 layers.',
          'Q: What is the difference between HTTP and HTTPS?',
          'Q: How would you troubleshoot network connectivity issues?',
          'Q: Describe your experience with cloud platforms.',
          'Q: What is virtualization and why is it important?',
          'Q: Explain the concept of firewalls and their types.',
          'Q: How do you approach cybersecurity risks?'
        ]
      },
      'IT Resume Builder': {
        description: 'Tailor your resume for IT positions.',
        details: [
          'Highlight technical certifications and credentials',
          'Showcase specific technologies: AWS, Azure, Linux, etc.',
          'Quantify achievements: systems optimized, uptime improved',
          'List programming languages and frameworks you know',
          'Include project management and team leadership experience',
          'Add metrics: performance improvements, cost savings',
          'Use keywords from job descriptions'
        ]
      },
      'IT Skill Assessment': {
        description: 'Evaluate your current IT competency levels.',
        details: [
          'Networking Fundamentals - Test your knowledge of protocols',
          'Operating Systems - Windows, Linux, macOS proficiency',
          'Cloud Platforms Assessment - AWS and Azure skills',
          'Security Concepts Quiz - Network and system security',
          'Troubleshooting Scenarios - Real-world problem-solving',
          'Scripting and Automation - PowerShell, Bash, Python',
          'Infrastructure Design - Architecture and planning skills'
        ]
      },
      'IT Career Progress': {
        description: 'Track your growth in the IT field.',
        details: [
          'Months 1-3: Building foundation skills (35% progress)',
          'Months 4-6: Gaining hands-on experience (55% progress)',
          'Months 7-9: Specializing in your chosen area (75% progress)',
          'Months 10-12: Achieving certifications (85% progress)',
          'Year 2: Leadership and project management skills (95% progress)',
          'Year 3+: Senior roles and architecture expertise (100% achieved)'
        ]
      },
      'Saved IT Careers': {
        description: 'Your bookmarked IT career paths and opportunities.',
        details: [
          '⭐ Senior Systems Administrator - Fortune 500 Tech Company',
          '⭐ Cloud Solutions Architect - Growing Startup',
          '⭐ Security Engineer - Cybersecurity Firm',
          '⭐ DevOps Engineer - Tech Innovation Hub',
          '⭐ Database Administrator - Financial Services',
          '⭐ IT Service Manager - Enterprise Company',
          '⭐ Network Security Specialist - Telecom Corporation'
        ]
      }
    },
    'Artificial Intelligence': {
      'Explore AI Careers': {
        description: 'Discover AI career opportunities in machine learning, NLP, and robotics.',
        details: [
          'Machine Learning Engineer - Build predictive models',
          'AI Research Scientist - Conduct cutting-edge research',
          'NLP Specialist - Work with language understanding',
          'Computer Vision Engineer - Image and video processing',
          'AI Ethics Specialist - Ensure responsible AI development',
          'AI Product Manager - Lead AI product strategy',
          'Robotics Engineer - Develop autonomous systems'
        ]
      },
      'AI Learning Roadmap': {
        description: 'Comprehensive path to becoming an AI professional.',
        details: [
          'Month 1-2: Python and Math - Programming and linear algebra',
          'Month 3-4: Machine Learning - Algorithms and models',
          'Month 5-6: Deep Learning - Neural networks and TensorFlow',
          'Month 7-8: NLP & Computer Vision - Advanced AI techniques',
          'Month 9-10: Real-world Projects - Build portfolio projects',
          'Month 11-12: Specialization - Choose your AI focus area'
        ]
      },
      'Recommended AI Courses': {
        description: 'Top courses for AI and machine learning skills.',
        details: [
          'AI Foundations - Concepts and applications',
          'Machine Learning Specialization - Supervised and unsupervised',
          'Deep Learning with TensorFlow - Neural networks',
          'Natural Language Processing - Text analysis and NLP',
          'Computer Vision Mastery - Image recognition systems',
          'Generative AI Workshop - LLMs and prompt engineering',
          'AI Ethics and Responsible Development'
        ]
      },
      'AI Mock Tests': {
        description: 'Practice assessments for AI roles and certifications.',
        details: [
          'Machine Learning Fundamentals - 45 questions, 1.5 hours',
          'Python for AI Assessment - 50 questions, 1 hour',
          'TensorFlow Certification Prep - 60 questions, 2 hours',
          'NLP Concepts Quiz - 40 questions, 1 hour',
          'AI Algorithm Challenge - 35 questions, 90 minutes',
          'Deep Learning Mastery Test - 50 questions, 2 hours'
        ]
      },
      'AI Interview Prep': {
        description: 'Common AI interview questions and preparation.',
        details: [
          'Q: Explain the difference between supervised and unsupervised learning.',
          'Q: What is backpropagation and how does it work?',
          'Q: How do you handle overfitting in machine learning models?',
          'Q: Describe your experience with deep learning frameworks.',
          'Q: What are transformers and how are they used in NLP?',
          'Q: How do you evaluate model performance?',
          'Q: Discuss a challenging AI project you have worked on.'
        ]
      },
      'AI Resume Builder': {
        description: 'Optimize your resume for AI and machine learning roles.',
        details: [
          'Highlight machine learning certifications and credentials',
          'Showcase specific AI frameworks: TensorFlow, PyTorch, Keras',
          'Include GitHub portfolio with AI projects',
          'Quantify model improvements: accuracy gains, performance metrics',
          'List publications, papers, or research contributions',
          'Demonstrate Python, R, and SQL proficiency',
          'Include competitions like Kaggle rankings and wins'
        ]
      },
      'AI Skill Assessment': {
        description: 'Evaluate your AI and machine learning skills.',
        details: [
          'Python Programming - Data structures and algorithms',
          'Mathematics for AI - Linear algebra and calculus concepts',
          'Machine Learning Concepts - Algorithms and evaluation',
          'Deep Learning Fundamentals - Neural networks and training',
          'NLP and Text Processing - Language models and analysis',
          'Model Optimization - Tuning and deployment techniques',
          'AI Problem Solving - Real-world case studies'
        ]
      },
      'AI Career Progress': {
        description: 'Track your advancement in the AI field.',
        details: [
          'Months 1-3: Learning fundamentals (30% progress)',
          'Months 4-6: Building first ML models (55% progress)',
          'Months 7-9: Deep learning expertise (70% progress)',
          'Months 10-12: Portfolio and projects (85% progress)',
          'Year 2: Specialization in focus area (90% progress)',
          'Year 3+: Senior AI researcher or engineer (100% achieved)'
        ]
      },
      'Saved AI Careers': {
        description: 'Your bookmarked AI and ML career opportunities.',
        details: [
          '⭐ Machine Learning Engineer - Tech Giant',
          '⭐ AI Research Scientist - Research Institute',
          '⭐ Senior ML Engineer - AI Startup',
          '⭐ NLP Specialist - Language AI Company',
          '⭐ Computer Vision Engineer - Autonomous Vehicles',
          '⭐ AI Product Manager - Tech Innovation Lab',
          '⭐ Robotics AI Engineer - Robotics Company'
        ]
      }
    },
    'Data Science': {
      'Explore Data Science Careers': {
        description: 'Discover data science career paths and roles.',
        details: [
          'Data Scientist - Build predictive models and insights',
          'Data Analyst - Extract and visualize data patterns',
          'Machine Learning Engineer - Develop scalable models',
          'Analytics Engineer - Build data infrastructure',
          'Data Engineer - Design data pipelines',
          'Business Analyst - Translate data to strategy',
          'Data Architect - Plan data systems and strategy'
        ]
      },
      'Data Science Learning Roadmap': {
        description: 'Structured path to become a data scientist.',
        details: [
          'Month 1-2: Python and SQL - Data manipulation',
          'Month 3-4: Statistics and Probability - Foundation math',
          'Month 5-6: Data Visualization - Dashboard creation',
          'Month 7-8: Machine Learning - Model building',
          'Month 9-10: Advanced Techniques - Deep learning and NLP',
          'Month 11-12: Portfolio Projects - Real-world applications'
        ]
      },
      'Recommended Data Science Courses': {
        description: 'Essential data science learning programs.',
        details: [
          'Python for Data Science - NumPy, Pandas, Scikit-learn',
          'Statistics for Data Science - Distributions and testing',
          'SQL for Data Scientists - Query optimization',
          'Data Visualization - Tableau and Python libraries',
          'Machine Learning Algorithms - Regression and classification',
          'Big Data Processing - Spark and distributed systems',
          'Advanced Analytics - Time series and forecasting'
        ]
      },
      'Data Science Mock Tests': {
        description: 'Practice tests for data science skills.',
        details: [
          'SQL Query Assessment - 50 questions, 1 hour',
          'Statistics Fundamentals - 45 questions, 90 minutes',
          'Python for Data Science - 60 questions, 2 hours',
          'Machine Learning Concepts - 50 questions, 90 minutes',
          'Data Visualization Quiz - 40 questions, 1 hour',
          'Real-world Case Study - 20 questions, 2 hours'
        ]
      },
      'Data Science Interview Prep': {
        description: 'Interview preparation for data science roles.',
        details: [
          'Q: Walk through your data science project workflow.',
          'Q: How do you handle missing data in datasets?',
          'Q: Explain the bias-variance tradeoff.',
          'Q: Describe A/B testing and how to design experiments.',
          'Q: How do you evaluate classification model performance?',
          'Q: What is feature engineering and why is it important?',
          'Q: Tell me about your most impactful data project.'
        ]
      },
      'Data Science Resume Builder': {
        description: 'Build a compelling data science resume.',
        details: [
          'Showcase relevant certifications and degree programs',
          'Highlight technical skills: Python, SQL, R, Tableau',
          'Quantify project impact: accuracy metrics, business value',
          'Include GitHub projects and Kaggle competitions',
          'List data science tools: Jupyter, Git, AWS, GCP',
          'Demonstrate communication skills and presentation experience',
          'Add publications and conference presentations'
        ]
      },
      'Data Science Skill Assessment': {
        description: 'Evaluate your data science competency.',
        details: [
          'Python Proficiency - Data manipulation and analysis',
          'SQL Skills - Complex queries and optimization',
          'Statistics Knowledge - Probability and hypothesis testing',
          'Machine Learning Understanding - Algorithm selection',
          'Data Visualization - Communicating insights effectively',
          'Business Acumen - Understanding business metrics',
          'Problem Solving - Approaching complex data challenges'
        ]
      },
      'Data Science Career Progress': {
        description: 'Track your data science career advancement.',
        details: [
          'Months 1-3: Building technical foundation (40% progress)',
          'Months 4-6: First data projects (60% progress)',
          'Months 7-9: Specialization emerging (75% progress)',
          'Months 10-12: Recognized expertise (85% progress)',
          'Year 2: Leadership and mentoring (90% progress)',
          'Year 3+: Senior data scientist role (100% achieved)'
        ]
      },
      'Saved Data Science Careers': {
        description: 'Your bookmarked data science opportunities.',
        details: [
          '⭐ Senior Data Scientist - Tech Company',
          '⭐ Data Science Manager - Finance Corporation',
          '⭐ ML Engineer - Healthcare Startup',
          '⭐ Analytics Lead - E-commerce Platform',
          '⭐ Data Architect - Fortune 500 Company',
          '⭐ Research Data Scientist - Academic Institution',
          '⭐ Data Science Consultant - Consulting Firm'
        ]
      }
    },
    'Cyber Security': {
      'Explore Cyber Security Careers': {
        description: 'Cybersecurity career paths and specializations.',
        details: [
          'Security Analyst - Monitor and respond to threats',
          'Penetration Tester - Identify security vulnerabilities',
          'Security Architect - Design secure systems',
          'Incident Response Specialist - Handle security breaches',
          'Security Operations Manager - Lead security team',
          'Compliance Officer - Ensure regulatory compliance',
          'Threat Intelligence Analyst - Analyze security trends'
        ]
      },
      'Cyber Security Learning Roadmap': {
        description: 'Path to becoming a cybersecurity professional.',
        details: [
          'Month 1-2: IT Fundamentals - Networking and systems basics',
          'Month 3-4: Security Basics - Concepts and principles',
          'Month 5-6: Network Security - Firewalls and VPNs',
          'Month 7-8: Penetration Testing - Ethical hacking basics',
          'Month 9-10: Compliance and Risk - Regulations and frameworks',
          'Month 11-12: Incident Response - Crisis management'
        ]
      },
      'Recommended Cyber Security Courses': {
        description: 'Essential cybersecurity training programs.',
        details: [
          'Cyber Security Basics - Threats and defenses',
          'Network Security Fundamentals - Protocols and firewalls',
          'Ethical Hacking and Penetration Testing',
          'CISSP Exam Preparation - Security certification',
          'Incident Response and Crisis Management',
          'Cloud Security - AWS and Azure security',
          'Security Operations Center (SOC) Training'
        ]
      },
      'Cyber Security Mock Tests': {
        description: 'Practice tests for cybersecurity roles.',
        details: [
          'CompTIA Security+ Practice - 90 questions, 2 hours',
          'CEH Exam Simulator - 125 questions, 4 hours',
          'CISSP Mini Exam - 100 questions, 2 hours',
          'Network Security Quiz - 50 questions, 1 hour',
          'Incident Response Assessment - 45 questions, 1.5 hours',
          'Vulnerability Management Test - 40 questions, 90 minutes'
        ]
      },
      'Cyber Security Interview Prep': {
        description: 'Interview questions for cybersecurity positions.',
        details: [
          'Q: Explain the principles of the CIA triad.',
          'Q: What is the difference between a threat and a vulnerability?',
          'Q: How would you respond to a security breach?',
          'Q: Describe your experience with SIEM tools.',
          'Q: What is zero-trust security architecture?',
          'Q: How do you stay updated with security threats?',
          'Q: Tell me about a security incident you managed.'
        ]
      },
      'Cyber Security Resume Builder': {
        description: 'Create a competitive cybersecurity resume.',
        details: [
          'Highlight security certifications: Security+, CISSP, CEH',
          'Showcase hands-on security tools experience',
          'Quantify security improvements: vulnerabilities patched',
          'Include incident response and recovery achievements',
          'Demonstrate knowledge of compliance frameworks',
          'List programming and scripting languages',
          'Highlight security certifications and ongoing training'
        ]
      },
      'Cyber Security Skill Assessment': {
        description: 'Evaluate your cybersecurity competency levels.',
        details: [
          'Network Security Knowledge - Protocols and firewalls',
          'Threat Analysis Ability - Identifying vulnerabilities',
          'Compliance Understanding - Regulations and standards',
          'Incident Response Skills - Crisis management capability',
          'Penetration Testing Knowledge - Ethical hacking basics',
          'Security Tools Proficiency - SIEM, firewalls, IDS/IPS',
          'Risk Management - Assessment and mitigation strategies'
        ]
      },
      'Cyber Security Career Progress': {
        description: 'Track advancement in cybersecurity field.',
        details: [
          'Months 1-3: Learning foundations (35% progress)',
          'Months 4-6: Hands-on security experience (55% progress)',
          'Months 7-9: Specialization in security focus (70% progress)',
          'Months 10-12: Certifications achieved (80% progress)',
          'Year 2: Team leadership emerging (90% progress)',
          'Year 3+: Senior security roles (100% achieved)'
        ]
      },
      'Saved Cyber Security Careers': {
        description: 'Your bookmarked cybersecurity opportunities.',
        details: [
          '⭐ Senior Security Analyst - Banking Sector',
          '⭐ Penetration Testing Lead - Consulting Firm',
          '⭐ CISO - Large Enterprise',
          '⭐ SOC Manager - Managed Security Services',
          '⭐ Incident Response Lead - Cybersecurity Company',
          '⭐ Cloud Security Architect - Tech Company',
          '⭐ Threat Intelligence Specialist - Defense Contractor'
        ]
      }
    },
    'Engineering': {
      'Explore Engineering Careers': {
        description: 'Engineering career paths and specializations.',
        details: [
          'Software Engineer - Design and build software systems',
          'Mechanical Engineer - Design and develop mechanical products',
          'Electrical Engineer - Work with electrical systems',
          'Civil Engineer - Infrastructure and construction projects',
          'Chemical Engineer - Process design and optimization',
          'Systems Engineer - Integrate complex technical systems',
          'Engineering Manager - Lead engineering teams'
        ]
      },
      'Engineering Learning Roadmap': {
        description: 'Path to becoming a professional engineer.',
        details: [
          'Month 1-2: Engineering Fundamentals - Math and physics',
          'Month 3-4: CAD and Design - Tools and techniques',
          'Month 5-6: Specialized Knowledge - Your engineering discipline',
          'Month 7-8: Project Management - Planning and execution',
          'Month 9-10: Real-world Applications - Hands-on projects',
          'Month 11-12: Professional Development - Certifications'
        ]
      },
      'Recommended Engineering Courses': {
        description: 'Essential engineering education programs.',
        details: [
          'Engineering Problem Solving - Structured approach',
          'CAD Essentials - AutoCAD, SolidWorks, or equivalent',
          'Technical Communication - Reports and presentations',
          'Project Management - Agile and Waterfall',
          'Safety and Compliance - Engineering standards',
          'Advanced Specialization - Your engineering focus',
          'Leadership for Engineers - Management skills'
        ]
      },
      'Engineering Mock Tests': {
        description: 'Practice assessments for engineering roles.',
        details: [
          'Fundamentals of Engineering (FE) Exam - 110 questions, 5.5 hours',
          'Engineering Math Assessment - 60 questions, 2 hours',
          'CAD Proficiency Test - Project-based, 2 hours',
          'Physics and Mechanics Quiz - 50 questions, 1.5 hours',
          'Technical Problem Solving - 30 questions, 2 hours',
          'Engineering Design Challenge - Real-world scenario'
        ]
      },
      'Engineering Interview Prep': {
        description: 'Interview preparation for engineering positions.',
        details: [
          'Q: Describe your most complex engineering project.',
          'Q: How do you approach design optimization?',
          'Q: Explain your experience with engineering software.',
          'Q: How do you ensure safety in your designs?',
          'Q: Tell me about a design failure and how you learned from it.',
          'Q: Describe your experience with cross-functional teams.',
          'Q: How do you stay current with engineering advancements?'
        ]
      },
      'Engineering Resume Builder': {
        description: 'Build a professional engineering resume.',
        details: [
          'Highlight engineering degree and specialization',
          'Include Professional Engineer (PE) license if applicable',
          'Showcase CAD and engineering software expertise',
          'Quantify achievements: cost savings, efficiency gains',
          'List patents and publications if applicable',
          'Include relevant certifications and continuing education',
          'Demonstrate project leadership and team collaboration'
        ]
      },
      'Engineering Skill Assessment': {
        description: 'Evaluate your engineering competency.',
        details: [
          'Mathematics Proficiency - Calculus and physics concepts',
          'CAD Skills - 2D and 3D design capabilities',
          'Technical Analysis - Problem-solving approach',
          'Design Knowledge - Engineering principles and practices',
          'Safety Awareness - Compliance and best practices',
          'Teamwork Ability - Collaboration and communication',
          'Project Management - Planning and execution skills'
        ]
      },
      'Engineering Career Progress': {
        description: 'Track your engineering career development.',
        details: [
          'Months 1-3: Building technical skills (40% progress)',
          'Months 4-6: First projects completed (60% progress)',
          'Months 7-9: Growing expertise (75% progress)',
          'Months 10-12: Professional recognition (85% progress)',
          'Year 2: Team leadership emerging (90% progress)',
          'Year 3+: Senior engineer role (100% achieved)'
        ]
      },
      'Saved Engineering Careers': {
        description: 'Your bookmarked engineering opportunities.',
        details: [
          '⭐ Senior Software Engineer - Tech Company',
          '⭐ Mechanical Design Engineer - Manufacturing',
          '⭐ Systems Engineer - Defense Contractor',
          '⭐ Civil Engineer - Infrastructure Firm',
          '⭐ Engineering Manager - Automotive Company',
          '⭐ Product Engineer - Hardware Startup',
          '⭐ Research Engineer - Innovation Lab'
        ]
      }
    }
  };

  // Fill in remaining categories with similar structure (Finance, Business, Healthcare, Education, etc.)
  const categoryToolsDefaults = {
    'Healthcare': { defaultTools: 'Healthcare', icon: '⚕️' },
    'Finance': { defaultTools: 'Finance', icon: '💰' },
    'Business': { defaultTools: 'Business', icon: '💼' },
    'Education': { defaultTools: 'Education', icon: '🎓' },
    'Government Jobs': { defaultTools: 'Government', icon: '🏛️' },
    'Defence': { defaultTools: 'Defence', icon: '🛡️' },
    'Aviation': { defaultTools: 'Aviation', icon: '✈️' },
    'Hospitality': { defaultTools: 'Hospitality', icon: '🏨' },
    'Agriculture': { defaultTools: 'Agriculture', icon: '🌾' },
    'Design & Media': { defaultTools: 'Design', icon: '🎨' },
    'Skilled Trades': { defaultTools: 'Skilled Trades', icon: '🔧' },
    'Freelancing': { defaultTools: 'Freelancing', icon: '💻' },
    'Entrepreneurship': { defaultTools: 'Entrepreneurship', icon: '🚀' },
    'Other': { defaultTools: 'General', icon: '⭐' }
  };

  // Populate remaining categories with default tools
  Object.keys(categoryToolsDefaults).forEach(category => {
    if (!categoryTools[category]) {
      const defaultCategory = categoryToolsDefaults[category].defaultTools;
      categoryTools[category] = {};
      const toolNames = [
        `Explore ${category} Careers`,
        `${category} Learning Roadmap`,
        `Recommended ${category} Courses`,
        `${category} Mock Tests`,
        `${category} Interview Preparation`,
        `${category} Resume Builder`,
        `${category} Skill Assessment`,
        `${category} Career Progress`,
        `Saved ${category} Careers`
      ];
      
      toolNames.forEach(toolName => {
        categoryTools[category][toolName] = {
          description: `Comprehensive guide for ${toolName.toLowerCase()}`,
          details: [
            `${toolName} - Resource 1`,
            `${toolName} - Resource 2`,
            `${toolName} - Resource 3`,
            `${toolName} - Resource 4`,
            `${toolName} - Resource 5`,
            `${toolName} - Resource 6`,
            `${toolName} - Resource 7`
          ]
        };
      });
    }
  });

  const genericToolsView = document.getElementById('generic-tools-view');
  const categoryToolsView = document.getElementById('category-tools-view');
  const toolDetailView = document.getElementById('tool-detail-view');
  const categoryToolsGrid = document.getElementById('category-tools-grid');
  const categoryToolsTitle = document.getElementById('category-tools-title');
  const backToCategoryView = document.getElementById('back-to-category-view');
  const backToTools = document.getElementById('back-to-tools');
  const toolDetailTitle = document.getElementById('tool-detail-title');
  const toolDetailContent = document.getElementById('tool-detail-content');

  function showCategorySpecificTools(category) {
    categoryToolsTitle.textContent = `${category} Career Tools`;
    categoryToolsGrid.innerHTML = '';
    genericToolsView.classList.remove('active');
    genericToolsView.classList.add('hidden');
    categoryToolsView.classList.remove('hidden');
    categoryToolsView.classList.add('active');
    toolDetailView.classList.add('hidden');

    const tools = categoryTools[category];
    if (!tools) return;

    Object.keys(tools).forEach(toolName => {
      const toolData = tools[toolName];
      const card = document.createElement('article');
      card.className = 'tool-card glass-card';
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <div class="icon">🎯</div>
        <h4>${toolName}</h4>
        <p>${toolData.description}</p>
      `;
      card.addEventListener('click', () => showToolDetail(category, toolName, toolData));
      categoryToolsGrid.appendChild(card);
    });
  }

  function showToolDetail(category, toolName, toolData) {
    toolDetailTitle.textContent = toolName;
    toolDetailContent.innerHTML = `
      <p style="color: var(--muted); margin-bottom: 12px;">${toolData.description}</p>
      <div class="tool-detail-items">
        ${toolData.details.map(detail => `<div class="tool-detail-item"><p>${detail}</p></div>`).join('')}
      </div>
    `;
    categoryToolsView.classList.add('hidden');
    toolDetailView.classList.remove('hidden');
  }

  function returnToGenericTools() {
    genericToolsView.classList.remove('hidden');
    genericToolsView.classList.add('active');
    categoryToolsView.classList.add('hidden');
    categoryToolsView.classList.remove('active');
    toolDetailView.classList.add('hidden');
  }

  function showCategoryDetails(category) {
    detailTitle.textContent = category;
    courseGrid.innerHTML = '';
    categoryDetails.classList.remove('hidden');
    courseListView.classList.remove('hidden');
    lessonView.classList.add('hidden');
    showCategorySpecificTools(category);

    const courses = categoryCourses[category] || categoryCourses.Other;

    courses.forEach((course) => {
      const card = document.createElement('article');
      card.className = 'course-card';
      card.innerHTML = `
        <h4>${course.title}</h4>
        <p>${course.description}</p>
        <div class="course-meta">
          <span class="course-level">● ${course.level}</span>
          <span>${course.lessons.length} lessons</span>
        </div>
        <div class="course-actions">
          <button class="primary-btn small" data-course="${course.title}">Start Course</button>
        </div>
      `;
      courseGrid.appendChild(card);
    });
  }

  function showLessons(courseTitle) {
    const category = detailTitle.textContent;
    const course = (categoryCourses[category] || categoryCourses.Other).find((item) => item.title === courseTitle);

    if (!course) {
      return;
    }

    lessonTitle.textContent = course.title;
    lessonContent.innerHTML = `
      <p>${course.description}</p>
      <div class="lesson-content">
        ${course.lessons.map((lesson) => `<div class="lesson-item"><strong>Lesson:</strong> ${lesson}</div>`).join('')}
      </div>
    `;
    courseListView.classList.add('hidden');
    lessonView.classList.remove('hidden');
  }

  const chips = document.querySelectorAll('.chip');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((item) => item.classList.remove('active'));
      chip.classList.add('active');
      showCategoryDetails(chip.dataset.category || chip.textContent.trim());
    });
  });

  if (courseGrid) {
    courseGrid.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-course]');
      if (button) {
        showLessons(button.dataset.course);
      }
    });
  }

  if (backToCategories) {
    backToCategories.addEventListener('click', () => {
      categoryDetails.classList.add('hidden');
      lessonView.classList.add('hidden');
      courseListView.classList.remove('hidden');
      returnToGenericTools();
    });
  }

  if (backToCourses) {
    backToCourses.addEventListener('click', () => {
      lessonView.classList.add('hidden');
      courseListView.classList.remove('hidden');
    });
  }

  if (backToCategoryView) {
    backToCategoryView.addEventListener('click', () => {
      categoryToolsView.classList.add('hidden');
      toolDetailView.classList.add('hidden');
      genericToolsView.classList.remove('hidden');
      genericToolsView.classList.add('active');
    });
  }

  if (backToTools) {
    backToTools.addEventListener('click', () => {
      toolDetailView.classList.add('hidden');
      categoryToolsView.classList.remove('hidden');
    });
  }

  function showDashboardSection(target) {
    const sections = [
      document.querySelector('.hero'),
      document.querySelector('.categories-section'),
      document.querySelector('.cards-section')
    ];

    sections.forEach((section) => {
      if (section) {
        section.style.display = target === 'home' || target === 'careers' || target === 'learn' ? 'block' : 'none';
      }
    });

    if (target === 'careers' || target === 'learn' || target === 'home') {
      categoryDetails.classList.remove('hidden');
      courseListView.classList.remove('hidden');
      lessonView.classList.add('hidden');
      genericToolsView.classList.remove('hidden');
      genericToolsView.classList.add('active');
      categoryToolsView.classList.add('hidden');
      toolDetailView.classList.add('hidden');
      showCategoryDetails('Information Technology');
      document.querySelector('.categories-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (target === 'progress') {
      if (progressPanel) progressPanel.classList.remove('hidden');
      if (profilePanel) profilePanel.classList.add('hidden');
      document.querySelector('.categories-section').style.display = 'none';
      document.querySelector('.cards-section').style.display = 'none';
      progressPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (target === 'profile') {
      if (profilePanel) profilePanel.classList.remove('hidden');
      if (progressPanel) progressPanel.classList.add('hidden');
      document.querySelector('.categories-section').style.display = 'none';
      document.querySelector('.cards-section').style.display = 'none';
      profilePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const featuredCareers = [
    {
      title: 'Software Developer',
      field: 'Information Technology',
      salary: '₹6L–₹18L',
      description: 'Build web and mobile products using modern programming languages and frameworks.'
    },
    {
      title: 'Data Analyst',
      field: 'Data Science',
      salary: '₹5L–₹14L',
      description: 'Turn business data into insights with dashboards, SQL, and reporting tools.'
    },
    {
      title: 'Cybersecurity Analyst',
      field: 'Cyber Security',
      salary: '₹7L–₹20L',
      description: 'Protect systems, monitor threats, and support resilient digital infrastructure.'
    },
    {
      title: 'AI Engineer',
      field: 'Artificial Intelligence',
      salary: '₹8L–₹25L',
      description: 'Design AI-driven solutions using machine learning, NLP, and automation workflows.'
    },
    {
      title: 'Civil Engineer',
      field: 'Engineering',
      salary: '₹4L–₹12L',
      description: 'Plan and supervise infrastructure, construction, and public works projects.'
    },
    {
      title: 'Hospitality Manager',
      field: 'Hospitality',
      salary: '₹4L–₹10L',
      description: 'Lead guest experience, operations, and service quality in hospitality businesses.'
    }
  ];

  const featuredCareersGrid = document.getElementById('featured-careers-grid');
  if (featuredCareersGrid) {
    featuredCareersGrid.innerHTML = featuredCareers.map((career) => `
      <article class="featured-career-card">
        <div class="featured-career-meta">
          <span>${career.field}</span>
          <span>${career.salary}</span>
        </div>
        <h4>${career.title}</h4>
        <p>${career.description}</p>
        <button class="primary-btn small">Explore</button>
      </article>
    `).join('');
  }

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItems.forEach((nav) => nav.classList.remove('active'));
      item.classList.add('active');
      showDashboardSection(item.dataset.nav || 'home');
    });
  });

  if (startCareerBtn) {
    startCareerBtn.addEventListener('click', () => {
      navItems.forEach((nav) => nav.classList.toggle('active', nav.dataset.nav === 'careers'));
      showDashboardSection('careers');
    });
  }

  if (viewRoadmapsBtn) {
    viewRoadmapsBtn.addEventListener('click', () => {
      navItems.forEach((nav) => nav.classList.toggle('active', nav.dataset.nav === 'careers'));
      showDashboardSection('careers');
      const defaultCategory = 'Information Technology';
      const chip = document.querySelector(`.chip[data-category="${defaultCategory}"]`);
      if (chip) {
        chip.click();
      }
      document.getElementById('category-details').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  showDashboardSection('home');
});
