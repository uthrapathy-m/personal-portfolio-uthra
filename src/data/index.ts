import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { TelegramIcon } from '@/components/icons/telegram'
import { GitHubActionsIcon } from '@/components/icons/tags/githubActions'
import { ZomatoIcon } from '@/components/icons/tags/zomato'
import { UberIcon } from '@/components/icons/tags/uber'
import { PrometheusIcon } from '@/components/icons/tags/prometheus'
import { AWSEKSIcon } from '@/components/icons/tags/awsEKS'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JenkinsIcon } from '@/components/icons/tags/jenkins'
import { KubernetesIcon } from '@/components/icons/tags/kubernetes'
import { DockerIcon } from '@/components/icons/tags/docker'
import { AzureIcon } from '@/components/icons/tags/azure'
import { AWSIcon } from '@/components/icons/tags/aws'
import { TerraformIcon } from '@/components/icons/tags/terraform'
import { AnsibleIcon } from '@/components/icons/tags/ansible'
import { AzureDevOpsIcon } from '@/components/icons/tags/azureDevOps'
import { DevOpsIcon } from '@/components/icons/tags/devops'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Uthrapathy M',
  initials: 'UM'
}

export const ABOUT = {
  title: `DevOps Engineer | Cloud Infrastructure & Deployment Specialist`,
  description: `AWS DevOps Engineer with hands-on experience in cloud infrastructure management and deployment automation. Based in Chennai. My career began in digital marketing and social media (2017-2023), where I developed strong analytical skills and data-driven decision-making abilities, before transitioning to DevOps engineering in 2023.

Currently, I focus on provisioning cloud infrastructure using Terraform and Ansible, deploying 3-tier applications on AWS with proper security and scalability configurations, and managing containerized workloads with Docker and Kubernetes. I work extensively with infrastructure monitoring using Prometheus, Grafana, and CloudWatch to maintain system reliability.

A key part of my role involves cloud cost optimization - analyzing resource usage, rightsizing EC2 instances, implementing auto-scaling policies, and identifying opportunities to reduce operational expenses. I set up alerting systems, troubleshoot production issues, and ensure infrastructure health through continuous monitoring.

My background in analytics from digital marketing helps me take a metrics-driven approach to infrastructure management. I believe in infrastructure as code, comprehensive monitoring, and making informed decisions based on data. Open to opportunities where I can contribute to building reliable, cost-effective cloud infrastructure.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/uthrapathy-m',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/uthrapathy-m',
    icon: LinkedInIcon
  },
  {
    title: 'Telegram',
    url: 'https://t.me/uthrapathym',
    icon: TelegramIcon
  },
  {
    title: 'Resume',
    url: '#',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:mail.uthrapathy@gmail.com',
    icon: MailIcon
  },
  {
    title: 'Portfolio',
    url: '#',
    icon: LinkIcon
  }
]

export const CAREER = [
  {
    company: 'Barrla Systems Pvt Ltd',
    location: 'Chennai, India',
    link: '#',
    badges: ['Full-time', 'DevOps'],
    jobs: [
      {
        title: 'AWS DevOps Engineer',
        start: 'Sep, 2024',
        end: 'Present',
        description: [
          'Design and manage AWS cloud infrastructure (EC2, S3, RDS, VPC, ELB) for production applications',
          'Deploy and maintain 3-tier applications with proper security groups and scalability configurations',
          'Implement infrastructure as code using Terraform and Ansible for automated provisioning',
          'Optimize cloud costs through resource analysis, rightsizing instances, and implementing auto-scaling',
          'Monitor infrastructure health using Prometheus, Grafana, and CloudWatch with custom alerting',
          'Manage containerized workloads using Docker and Kubernetes (EKS) with CI/CD integration',
          'Skills: AWS, Terraform, Ansible, Docker, Kubernetes, Prometheus, Grafana, Jenkins, Linux, Git'
        ]
      }
    ]
  },
  {
    company: 'Nigazh Pvt Ltd',
    location: 'Chennai, India',
    link: '#',
    badges: ['Full-time', 'DevOps'],
    jobs: [
      {
        title: 'Jr DevOps Engineer',
        start: 'Oct, 2023',
        end: 'Sep, 2024',
        description: [
          'Managed containerized applications using Docker and orchestrated deployments with Kubernetes',
          'Provisioned cloud infrastructure on AWS and Azure using Terraform and ARM templates',
          'Set up monitoring and alerting systems using Prometheus and Grafana for infrastructure reliability',
          'Implemented CI/CD pipelines using Jenkins and GitHub Actions for automated deployments',
          'Assisted in cost optimization initiatives through resource tagging and usage analysis',
          'Maintained Linux servers and troubleshot production environment issues',
          'Skills: AWS, Azure, Docker, Kubernetes, Terraform, Jenkins, Prometheus, Grafana, Linux, Bash'
        ]
      }
    ]
  },
  {
    company: 'Dr R Mahendran\'s – Expovan Pvt Ltd',
    location: 'Chennai, India',
    link: '#',
    badges: ['Full-time', 'Digital Marketing'],
    jobs: [
      {
        title: 'Digital Marketing Executive',
        start: 'Jun, 2022',
        end: 'Sep, 2023',
        description: [
          'Managed digital marketing campaigns across Google Ads, Facebook Ads, and Instagram',
          'Analyzed campaign performance using Google Analytics and social media insights',
          'Optimized marketing strategies based on ROI analysis and audience engagement metrics',
          'Created content calendars and coordinated with design teams for creative assets',
          'Managed SEO optimization and monitored website traffic and conversion rates',
          'Skills: Google Ads, Facebook Ads Manager, Google Analytics, SEO, Social Media Marketing, Content Strategy'
        ]
      }
    ]
  },
  {
    company: 'Meinigar Media Private Ltd',
    location: 'Chennai, India',
    link: '#',
    badges: ['Full-time', 'Digital Marketing'],
    jobs: [
      {
        title: 'Digital Marketing Executive',
        start: 'Aug, 2021',
        end: 'Feb, 2022',
        description: [
          'Executed digital marketing strategies across social media platforms and email campaigns',
          'Coordinated with creative teams for content development and brand messaging',
          'Monitored campaign performance and provided weekly reports on key metrics',
          'Managed social media accounts and engaged with online communities',
          'Skills: Social Media Management, Email Marketing, Content Marketing, Analytics, Canva, Hootsuite'
        ]
      }
    ]
  },
  {
    company: 'RKFI & MNM',
    location: 'Chennai, India',
    link: '#',
    badges: ['Full-time', 'Social Media'],
    jobs: [
      {
        title: 'Social Media Manager',
        start: 'Apr, 2018',
        end: 'Jul, 2021',
        description: [
          'Managed social media accounts across Facebook, Twitter, Instagram, and LinkedIn',
          'Developed content strategies and maintained consistent brand voice across platforms',
          'Analyzed social metrics using native analytics tools and third-party platforms',
          'Coordinated influencer partnerships and user-generated content campaigns',
          'Grew follower base through organic and paid social media strategies',
          'Skills: Social Media Strategy, Community Management, Content Creation, Analytics, Buffer, Facebook Business Manager'
        ]
      }
    ]
  },
  {
    company: 'Hashtag Media Pvt Ltd',
    location: 'Chennai, India',
    link: '#',
    badges: ['Full-time', 'Social Media'],
    jobs: [
      {
        title: 'Social Media Analyst',
        start: 'Jan, 2017',
        end: 'Mar, 2018',
        description: [
          'Analyzed social media trends and audience engagement metrics across platforms',
          'Provided data-driven insights for social media strategy improvements',
          'Created performance reports tracking reach, engagement, and conversion metrics',
          'Monitored competitor activities and industry trends for strategic recommendations',
          'Skills: Social Media Analytics, Data Analysis, Reporting, Excel, Social Listening Tools'
        ]
      }
    ]
  }
];

const TAGS = {
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon
  },
  GITHUB_ACTIONS: {
    name: 'GitHub Actions',
    icon: GitHubActionsIcon
  },
  PROMETHEUS: {
    name: 'Prometheus',
    icon: PrometheusIcon
  },
  AWS_EKS: {
    name: 'AWS EKS',
    icon: AWSEKSIcon
  },
  LINUX: {
    name: 'Linux',
    icon: LinuxIcon
  },
  JENKINS: {
    name: 'Jenkins',
    icon: JenkinsIcon
  },
  KUBERNETES: {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  DOCKER: {
    name: 'Docker',
    icon: DockerIcon
  },
  AZURE: {
    name: 'Azure',
    icon: AzureIcon
  },
  AWS: {
    name: 'AWS',
    icon: AWSIcon
  },
  TERRAFORM: {
    name: 'Terraform',
    icon: TerraformIcon
  },
  ANSIBLE: {
    name: 'Ansible',
    icon: AnsibleIcon
  },
  AZURE_DEVOPS: {
    name: 'Azure DevOps',
    icon: AzureDevOpsIcon
  },
  DEVOPS: {
    name: 'DevOps',
    icon: DevOpsIcon
  }
}

export const EDUCATION = [
  {
    school: 'PMR Engineering College',
    degree: 'B.E Computer Science',
    start: '2012',
    end: '2016',
    location: 'Chennai, India',
    description: [
      'Completed Bachelor of Engineering in Computer Science with focus on software engineering fundamentals',
      'Built strong foundation in data structures, algorithms, database management, and system design',
      'Gained practical experience in programming languages including Java, Python, and C++',
      'Developed problem-solving skills and analytical thinking essential for DevOps engineering'
    ]
  },
  {
    school: 'P.C.K.G Govt Hr Sec School',
    degree: 'Higher Secondary Education (12th)',
    year: '2012',
    percentage: '68%',
    location: 'Chennai, India',
    description: [
      'Completed Higher Secondary Education with focus on Science stream',
      'Studied Physics, Chemistry, Mathematics, and Computer Science'
    ]
  },
  {
    school: 'P.C.K.G Govt Hr Sec School',
    degree: 'Secondary Education (10th)',
    year: '2010',
    percentage: '80%',
    location: 'Chennai, India',
    description: [
      'Completed Secondary Education with strong academic performance',
      'Developed foundational knowledge across core subjects'
    ]
  }
];

export const PROJECTS = [
  {
    title: 'Multi-Cloud Infrastructure Automation',
    tags: [TAGS.AWS, TAGS.AZURE, TAGS.TERRAFORM, TAGS.ANSIBLE],
    description: 'Automated infrastructure provisioning across AWS and Azure using Terraform modules and Ansible playbooks. Implemented cost optimization strategies reducing cloud spending by 40%.',
    link: {
      github: 'https://github.com/uthrapathy-m/multi-cloud-infra',
      preview: '#'
    },
  },
  {
    title: 'Kubernetes Microservices Platform',
    tags: [TAGS.KUBERNETES, TAGS.DOCKER, TAGS.AWS_EKS, TAGS.PROMETHEUS],
    description: 'Built a scalable microservices platform on AWS EKS with automated deployment pipelines, monitoring, and logging. Supports auto-scaling and zero-downtime deployments.',
    link: {
      github: 'https://github.com/uthrapathy-m/k8s-microservices',
      preview: '#'
    },
  },
  {
    title: 'CI/CD Pipeline with Security Scanning',
    tags: [TAGS.JENKINS, TAGS.GITHUB_ACTIONS, TAGS.DOCKER, TAGS.AWS],
    description: 'Comprehensive CI/CD pipeline with integrated security scanning, automated testing, and deployment to multiple environments. Reduced deployment failures by 85%.',
    link: {
      github: 'https://github.com/uthrapathy-m/secure-cicd-pipeline',
    },
  },
  {
    title: 'Infrastructure Monitoring Dashboard',
    tags: [TAGS.PROMETHEUS, TAGS.KUBERNETES, TAGS.AWS],
    description: 'Real-time monitoring solution using Prometheus, Grafana, and custom metrics for infrastructure health tracking and alerting.',
    link: {
      github: 'https://github.com/uthrapathy-m/monitoring-dashboard',
    },
  },
  {
    title: 'Automated Database Backup System',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.LINUX],
    description: 'Automated backup and disaster recovery system for databases with encryption, retention policies, and cross-region replication.',
    link: {
      github: 'https://github.com/uthrapathy-m/db-backup-automation',
    },
  },
  {
    title: 'Container Registry with Vulnerability Scanning',
    tags: [TAGS.DOCKER, TAGS.AWS, TAGS.KUBERNETES],
    description: 'Private container registry with automated vulnerability scanning, image signing, and policy enforcement for secure deployments.',
    link: {
      github: 'https://github.com/uthrapathy-m/secure-container-registry',
    },
  },
  {
    title: 'GitOps Deployment Pipeline',
    tags: [TAGS.KUBERNETES, TAGS.GITHUB_ACTIONS, TAGS.TERRAFORM, TAGS.AWS],
    description: 'GitOps-based continuous deployment workflow using ArgoCD and Flux for automated application delivery. Implements progressive rollouts with automatic rollback capabilities on failure.',
    link: {
      github: 'https://github.com/uthrapathy-m/gitops-pipeline',
    },
  },
  {
    title: 'Infrastructure Cost Optimization Tool',
    tags: [TAGS.AWS, TAGS.AZURE, TAGS.TERRAFORM, TAGS.LINUX],
    description: 'Cost analysis and optimization tool for cloud resources with automated recommendations. Identifies unused resources, right-sizing opportunities, and reserved instance optimization.',
    link: {
      github: 'https://github.com/uthrapathy-m/cloud-cost-optimizer',
      preview: '#'
    },
  },
  {
    title: 'Service Mesh Implementation with Istio',
    tags: [TAGS.KUBERNETES, TAGS.DOCKER, TAGS.AWS_EKS, TAGS.PROMETHEUS],
    description: 'Production-ready service mesh architecture using Istio for microservices communication. Features traffic management, security policies, observability, and distributed tracing with Jaeger.',
    link: {
      github: 'https://github.com/uthrapathy-m/istio-service-mesh',
    },
  },
  {
    title: 'Disaster Recovery Automation Framework',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.ANSIBLE, TAGS.LINUX],
    description: 'Comprehensive disaster recovery solution with automated failover, data replication, and recovery testing. Ensures business continuity with RPO under 15 minutes and RTO under 1 hour.',
    link: {
      github: 'https://github.com/uthrapathy-m/disaster-recovery-framework',
      preview: '#'
    },
  }
];

export const data = {
  avatar: AVATAR,
  about: ABOUT,
  links: LINKS,
  career: CAREER,
  projects: PROJECTS
}
